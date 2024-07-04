import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import React from 'react';

export default function RegistrationForm() {
  return (
    <View style={styles.container}>
     
      <View style={{ marginTop: 10, flexDirection: 'column', gap: 15 }}>
        <Text style={styles.heading}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder='Email'
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize='none'
        />
        <Pressable style={styles.button}>
          <Text style={styles.text}>Submit</Text>
        </Pressable>
      </View>
      <View>
        <Text style={{ textAlign: 'center', marginTop: 25, fontSize: 15 }}>Or login with</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 25 }}>
        <Image style={styles.logo} source={{ uri: 'https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png' }} />
        <Image style={styles.logo} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSzDnc0MUFbyQlB75CTxiUmVgc_sVw39l7w&s' }} />
        <Image style={styles.logo} source={{ uri: 'https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png' }} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, fontSize: 15 }}>
        <Text style={{ color: "#000", fontWeight: 'bold' }}>New to the app? <Text style={{ color: "#5DA3FA" }}>Register</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 20,
  },
  image: {
    marginTop: 50,
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#00796b',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 15,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: '#5DA3FA',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
 
    paddingHorizontal: 40,
  }
});
