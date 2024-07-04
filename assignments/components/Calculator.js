import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

export default function Calculator() {
  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>0</Text>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>C</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>±</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>%</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]}><Text style={styles.buttonText}>÷</Text></TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]}><Text style={styles.buttonText}>×</Text></TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]}><Text style={styles.buttonText}>−</Text></TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.zeroButton]}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>.</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operatorButton]}><Text style={styles.buttonText}>=</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    backgroundColor: '#000',
    padding: 10,
  },
  displayContainer: {
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#1c1c1c',
    padding: 20,
    marginBottom: 10,
    width: width - 20,
  },
  displayText: {
    color: '#fff',
    fontSize: 60,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: width - 20,
  },
  button: {
    backgroundColor: '#333',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.1,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  operatorButton: {
    backgroundColor: '#ff9500',
  },
  zeroButton: {
    flex: 1,
  },
});
