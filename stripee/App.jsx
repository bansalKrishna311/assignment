import React, { useState } from 'react';
import { Button, View, Image, StyleSheet, Alert, ActivityIndicator, Text, TextInput } from 'react-native';
import { CardField, useStripe, StripeProvider } from '@stripe/stripe-react-native';

const PaymentScreen = () => {
  const { confirmPayment } = useStripe();
  const [cardDetails, setCardDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState('');

  const handlePayment = async () => {
    if (!cardDetails || !cardDetails.complete) {
      Alert.alert('Error', 'Please enter complete card details.');
      return;
    }

    const amountInCents = parseFloat(amount) * 100;
    if (isNaN(amountInCents) || amountInCents <= 0) {
      Alert.alert('Error', 'Please enter a valid amount.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const billingDetails = {
        email: 'bansalkrishna311@gmail.com',
        name: 'Krishna Bansal',
      };

      const response = await fetch('http://192.168.0.173:3000/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amountInCents }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const { clientSecret } = await response.json();

      const { error, paymentIntent } = await confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
        paymentMethod: {
          card: cardDetails,
          billingDetails,
        },
      });

      if (error) {
        console.error('Payment failed:', error.message);
        setError(error.message);
      } else {
        console.log('Payment Successful', paymentIntent);
        Alert.alert('Success', 'Payment Successful');
      }
    } catch (error) {
      console.error('Payment Error', error);
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-gold-card-498x280.png' }} style={styles.cardImage} />
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <CardField
        postalCodeEnabled={false}
        placeholder={{ number: '4242 4242 4242 4242' }}
        cardStyle={styles.card}
        style={styles.cardField}
        onCardChange={setCardDetails}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Button title="Pay" onPress={handlePayment} disabled={loading} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
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
  cardImage: {
    width: 500,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  cardField: {
    height: 50,
    marginVertical: 30,
  },
  card: {
    backgroundColor: '#FFFFFF',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default App;
