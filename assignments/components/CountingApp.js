import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function CountingApp() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState('1');

  const increment = () => {
    setCount(count + parseInt(step));
  };

  const decrement = () => {
    setCount(count - parseInt(step));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counting App</Text>
      <Text style={styles.count}>{count}</Text>
      <TextInput
        style={styles.input}
        value={step}
        onChangeText={setStep}
        keyboardType="numeric"
        placeholder="Enter step"
      />
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={increment} color="#00796b" />
        <Button title="-" onPress={decrement} color="#00796b" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  count: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#00796b',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '40%',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
  },
});
