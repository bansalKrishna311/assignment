import React, { useState } from 'react';
import { Button, View, StyleSheet, Alert } from 'react-native';
import { CardField, useStripe, StripeProvider } from '@stripe/stripe-react-native';

const PaymentScreen = () => {
  const { confirmPayment } = useStripe();
  const [cardDetails, setCardDetails] = useState(null); // Default to null

  const handlePayment = async () => {
    if (!cardDetails || !cardDetails.complete) {
      Alert.alert('Error', 'Please enter complete card details.');
      return;
    }

    try {
      const billingDetails = {
        email: 'bansalkrishna311@gmail.com',
        name: 'krishna bansal',
      };

      const response = await fetch('http://192.168.0.173:3000/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 1099 }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const { clientSecret } = await response.json();

      // Confirm payment using card details
      const { error, paymentIntent } = await confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
        paymentMethod: {
          card: cardDetails,
          billingDetails,
        },
      });
console.log(cardDetails)
      if (error) {
        console.error('Payment failed:', error.message);
        Alert.alert('Payment Error', error.message);
      } else {
        console.log('Payment Successful', paymentIntent);
        Alert.alert('Success', 'Payment Successful');
      }
    } catch (error) {
      console.error('Payment Error', error);
      Alert.alert('Payment Error', 'An unexpected error occurred.');
    }
  };

  return (
    <View style={styles.container}>
      <CardField
        postalCodeEnabled={false}
        placeholder={{ number: '4242 4242 4242 4242' }}
        cardStyle={styles.card}
        style={styles.cardField}
        onCardChange={(cardDetails) => setCardDetails(cardDetails)}
      />
      <Button title="Pay" onPress={handlePayment} />
    </View>
  );
};

const App = () => {
  return (
    <StripeProvider publishableKey="pk_test_51PgO1U2Lwr6W2UyaWr6NdQp62VdQz16LO72EG7IJhgItwe1c7GHEWHfsJVLRLnY5PD9x2ofJgqjEmoPaqb95I6M700zLz0fy6P">
      <PaymentScreen />
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  cardField: {
    height: 50,
    marginVertical: 30,
  },
  card: {
    backgroundColor: '#FFFFFF',
  },
});

export default App;
