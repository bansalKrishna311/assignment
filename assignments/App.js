import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegistrationForm from './components/registrationForm'
import OtpForm from './components/otpForm'
import remote from './components/remoteTV'

export default function App() {
  return (
<SafeAreaView>
  <ScrollView>
    <View>
      <RegistrationForm/>
      <View style={styles.gapFirst}>

      </View>
      <OtpForm/>
      <remote/>
    </View>
  </ScrollView>
</SafeAreaView>
  )
}

const styles = StyleSheet.create({
  gapFirst:{
    marginVertical: 210,
  }
})