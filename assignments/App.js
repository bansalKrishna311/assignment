import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegistrationForm from './components/registrationForm'

export default function App() {
  return (
<SafeAreaView>
  <ScrollView>
    <View>
      <RegistrationForm/>
      
    </View>
  </ScrollView>
</SafeAreaView>
  )
}

const styles = StyleSheet.create({})