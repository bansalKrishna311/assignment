import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function otpForm() {
  return (
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
    );
    }
    const styles = StyleSheet.create({
    container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0f7fa',
},
heading: {
fontSize: 30,
fontWeight: 'bold',
color: '#00796b',
marginBottom: 20,
},
instructionText: {
fontSize: 18,
color: '#004d40',
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
borderColor: '#00796b',
borderWidth: 1,
borderRadius: 10,
textAlign: 'center',
fontSize: 18,
marginHorizontal: 5,
backgroundColor: '#ffffff',
},
button: {
marginTop: 20,
backgroundColor: '#00796b',
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
  )
}

const styles = StyleSheet.create({})