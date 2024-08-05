import React, { useState, useRef } from 'react';
import { View, Image, StyleSheet, Alert, ActivityIndicator, Text, TextInput, TouchableOpacity, Animated, KeyboardAvoidingView } from 'react-native';
import { CardField, useStripe, StripeProvider } from '@stripe/stripe-react-native';
import { Picker } from '@react-native-picker/picker';
import LottieView from 'lottie-react-native';

const PaymentScreen = () => {
  const { confirmPayment } = useStripe();
  const [cardDetails, setCardDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [email, setEmail] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const successAnim = useRef(null);

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

    if (!email) {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }

    if (!cardholderName) {
      Alert.alert('Error', 'Please enter the cardholder name.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const billingDetails = {
        email,
        name: cardholderName,
      };

      const response = await fetch('http://192.168.0.173:3000/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amountInCents, currency }),
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
        successAnim.current.play();
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
        placeholder="Cardholder Name"
        value={cardholderName}
        onChangeText={setCardholderName}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#aaa"
      />
      <View style={styles.amountCurrencyContainer}>
        <TextInput
          style={[styles.input, styles.amountInput]}
          placeholder="Enter amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
          placeholderTextColor="#aaa"
        />
        <Picker
          selectedValue={currency}
          style={styles.currencyPicker}
          onValueChange={(itemValue) => setCurrency(itemValue)}
        >
          <Picker.Item label="USD" value="USD" />
          <Picker.Item label="EUR" value="EUR" />
          <Picker.Item label="INR" value="INR" />
        </Picker>
      </View>
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
      <TouchableOpacity style={styles.cancelButton} onPress={() => {
        setCardDetails(null);
        setAmount('');
        setError(null);
        setEmail('');
        setCardholderName('');
      }}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
      <LottieView
        ref={successAnim}
        source={require('./success.json')}
        style={styles.successAnimation}
        loop={false}
      />
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
  amountCurrencyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  amountInput: {
    flex: 0.7,
  },
  currencyPicker: {
    flex: 0.3,
    height: 50,
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
  cancelButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 10,
  },
  successAnimation: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 30,
  },
});

export default App;