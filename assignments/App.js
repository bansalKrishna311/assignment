import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegistrationForm from './components/registrationForm'
import OtpForm from './components/otpForm'
import remoteAC from './components/remoteAC'
import MyCV from './components/MyCV'
import Calculator from './components/Calculator'
import CounterApp from './components/CounterApp'
import CountingApp from './components/CountingApp'

export default function App() {
  return (
<SafeAreaView>
  <ScrollView>
    <View>
      <RegistrationForm/>
      <View style={styles.gapFirst}>

      </View>
      <OtpForm/>
      <View style={styles.gapFirst}>

      </View>
      {/* <remoteAC/>
      <View style={styles.gapFirst}>

      </View> */}
      <MyCV/>
      <View style={styles.gapFirst}>

      </View>
      <Calculator/>
      <View style={styles.gapFirst}>

      </View>
      <CounterApp/>
      <View style={styles.gapFirst}>

      </View>
        <CountingApp/>
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