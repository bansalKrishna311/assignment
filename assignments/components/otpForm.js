import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';

export default function OtpForm() {
  return (
    <SafeAreaView>
        <ScrollView>
        
    <View style={styles.container}>
      <Text style={styles.heading}>OTP Verification</Text>
      <Text style={styles.instructionText}>Enter the OTP sent to your mobile number</Text>
      <View style={styles.otpContainer}>
        <TextInput style={styles.otpInput} keyboardType="numeric" maxLength={1} />
        <TextInput style={styles.otpInput} keyboardType="numeric" maxLength={1} />
        <TextInput style={styles.otpInput} keyboardType="numeric" maxLength={1} />
        <TextInput style={styles.otpInput} keyboardType="numeric" maxLength={1} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
        
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF3DE',
  },
  heading: {
    fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: '#fcb535',
  },
  instructionText: {
    fontSize: 18,
    color: '#0F351B',
    textAlign: 'center',
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    height: 50,
    width: 50,
    borderColor: '#0F351B',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#fcb535',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
