import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function remote() {
  return (
    <View style={styles.container}>
<Text style={styles.heading}>AC Remote</Text>
<View style={styles.display}>
<Text style={styles.displayText}>24°C</Text>
<Text style={styles.modeText}>Cool</Text>
</View>
<View style={styles.buttonContainer}>
<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>Power On</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>+</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>-</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>Mode</Text>
</TouchableOpacity>
</View>
</View>
);
}
const styles = StyleSheet.create({
container: {
justifyContent: 'center',
alignItems: 'center',
padding: 20,
backgroundColor: '#f0f4f7',
},
heading: {
fontSize: 30,
fontWeight: 'bold',
color: '#00796b',
marginBottom: 40,
},
display: {
width: '100%',
padding: 20,
marginBottom: 20,
backgroundColor: '#00796b',
borderRadius: 10,
alignItems: 'center',
},
displayText: {
fontSize: 60,
color: '#fff',
},
modeText: {
fontSize: 20,
color: '#fff',
marginTop: 10,
},
buttonContainer: {
width: '100%',
flexDirection: 'row',
justifyContent: 'space-between',
},
button: {
flex: 1,
margin: 5,
padding: 20,
backgroundColor: '#00796b',
borderRadius: 10,
alignItems: 'center',
},
buttonText: {
color: '#fff',
fontSize: 20,
fontWeight: 'bold',
},
});
