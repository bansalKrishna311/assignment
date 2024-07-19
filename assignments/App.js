import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import OtpForm from './components/OtpForm';
import MyCV from './components/MyCV';
import Calculator from './components/Calculator';
import CounterApp from './components/CounterApp';
import SortingApp from './components/SortingApp';
import BudgetApp from './components/BudgetApp';
import BillingSystemApp from './components/BillingSystemApp';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <RegistrationForm />
          <View style={styles.gap}></View>
          <OtpForm />
          <View style={styles.gap}></View>
          <MyCV />
          <View style={styles.gap}></View>
          <Calculator />
          <View style={styles.gap}></View>
          <CounterApp />
          <View style={styles.gap}></View>
          <SortingApp />
          <View style={styles.gap}></View>
          <BudgetApp />
          <View style={styles.gap}></View>
          <BillingSystemApp />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  gap: {
    marginVertical: 20, // Adjust as needed
  },
});
