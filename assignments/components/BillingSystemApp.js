import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function BillingSystemApp() {
  const [product, setProduct] = useState('');
  const [cost, setCost] = useState('');
  const [qty, setQty] = useState('');
  const [netBill, setNetBill] = useState(0);
  const [payableAmount, setPayableAmount] = useState(0);

  const calculateBill = () => {
    const totalCost = parseFloat(cost) * parseInt(qty); // Calculate total cost
    const discount = totalCost * 0.1; // Calculate 10% discount
    const finalAmount = totalCost - discount; // Calculate payable amount after discount

    setNetBill(totalCost.toFixed(2)); // Update net bill state
    setPayableAmount(finalAmount.toFixed(2)); // Update payable amount state
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Billing System</Text>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={product}
        onChangeText={setProduct}
      />
      <TextInput
        style={styles.input}
        placeholder="Cost"
        keyboardType="numeric"
        value={cost}
        onChangeText={setCost}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        keyboardType="numeric"
        value={qty}
        onChangeText={setQty}
      />
      <Button title="Calculate" onPress={calculateBill} color="#fcb535" />
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Net Bill: Rs.{netBill}</Text>
        <Text style={styles.resultText}>Discount: 10%</Text>
        <Text style={styles.resultText}>Payable Amount: Rs.{payableAmount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF3DE',
    flex: 1, // Ensure the component takes full height
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fcb535',
  },
  input: {
    height: 40,
    borderColor: '#fcb535',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 8,
    width: '80%',
    textAlign: 'center',
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fcb535',
  },
});
