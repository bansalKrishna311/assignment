import React, { useState } from 'react';
import { View, Image, StyleSheet, Alert, ActivityIndicator, Text, TextInput, TouchableOpacity, Animated, KeyboardAvoidingView } from 'react-native';
import { CardField, useStripe, StripeProvider } from '@stripe/stripe-react-native';

const PaymentScreen = () => {
  const { confirmPayment } = useStripe();
  const [cardDetails, setCardDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState('');
  const fadeAnim = new Animated.Value(0);

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
        setAmount(''); // Clear the amount input after successful payment
      }
    } catch (error) {
      console.error('Payment Error', error);
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const startFadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    startFadeIn();
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Animated.View style={[styles.imageContainer, { opacity: fadeAnim }]}>
        <Image source={{ uri: 'https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-gold-card-498x280.png' }} style={styles.cardImage} />
      </Animated.View>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        placeholderTextColor="#aaa"
      />
      <CardField
        postalCodeEnabled={false}
        placeholder={{ number: '4242 4242 4242 4242' }}
        cardStyle={styles.card}
        style={styles.cardField}
        onCardChange={setCardDetails}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={[styles.button, loading && styles.buttonDisabled]} onPress={handlePayment} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Pay</Text>
        )}
      </TouchableOpacity>
    </KeyboardAvoidingView>
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
    backgroundColor: '#f5f7fa',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cardImage: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardField: {
    height: 50,
    marginVertical: 30,
  },
  card: {
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    borderRadius: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#6a1b9a',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#9b7cb6',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
