import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function BudgetSystem() {
  const [budget] = useState(1200); // Initial budget, constant value
  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');
  const [balance, setBalance] = useState(1200); // Starting balance, same as budget

  const calculateBalance = () => {
    const incomeValue = parseFloat(income) || 0; // Convert to float, default to 0 if NaN
    const expenseValue = parseFloat(expense) || 0; // Convert to float, default to 0 if NaN
    const newBalance = balance + incomeValue - expenseValue; // Calculate new balance
    setBalance(newBalance); // Update balance state
    setIncome(''); // Clear income input
    setExpense(''); // Clear expense input
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Budget System</Text>
      <TextInput
        style={styles.input}
        placeholder="Income"
        keyboardType="numeric"
        value={income}
        onChangeText={setIncome}
      />
      <TextInput
        style={styles.input}
        placeholder="Expense"
        keyboardType="numeric"
        value={expense}
        onChangeText={setExpense}
      />
      <Button title="Calculate" onPress={calculateBalance} color="#00796b" />
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Initial Budget: Rs.{budget}</Text>
        <Text
          style={[
            styles.resultText,
            { color: balance >= budget ? 'green' : 'red' }
          ]}
        >
          Current Balance: Rs.{balance.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e0f7fa',
    flex: 1, // Ensure the component takes full height
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796b',
  },
  input: {
    height: 40,
    borderColor: '#00796b',
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
    color: '#004d40',
  },
});
