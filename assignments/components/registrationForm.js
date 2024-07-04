import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import React from 'react';

export default function RegistrationForm() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image
          style={styles.image}
          source={{ uri: 'https://img.freepik.com/free-vector/user-verificationunauthorized-access-prevention-private-account-authentication-cyber-security-peopleentering-login-password-safety-measures_335657-3530.jpg?t=st=1719638952~exp=1719642552~hmac=db8a1264da495bd86ef5981c57a9cd19751d0f868708612b21920c99f835c4f3&w=740' }}
        />
      </View>
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
        <Image style={styles.logo} source={{ uri: 'https://w7.pngwing.com/pngs/249/19/pngtransparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png' }} />
        <Image style={styles.logo} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWSzDnc0MUFbyQlB75CTxiUmVgc_sVw39l7w&s' }} />
        <Image style={styles.logo} source={{ uri: 'https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png' }} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, fontSize: 15 }}>
        <Text style={{ color: "#000", fontWeight: 'bold' }}>New to the app? <Text style={{ color: "#f58d88" }}>Register</Text></Text>
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
    color: '#00796b',
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
    backgroundColor: '#f58d88',
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
    borderWidth: 2,
    borderColor: "#b4b3b3",
    paddingHorizontal: 40,
  }
});
