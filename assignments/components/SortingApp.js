import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SortingApp() {
    const [A, setA] = useState('');
    const [B, setB] = useState('');
    const [C, setC] = useState('');
    const [sortedValues, setSortedValues] = useState([]);
    const sortValues = () => {
    const values = [parseFloat(A), parseFloat(B), parseFloat(C)];
    values.sort((a, b) => a - b);
    setSortedValues(values);
};
return (
<View style={styles.container}>
<TextInput
style={styles.input}
placeholder="Enter value A"
keyboardType="numeric"
value={A}
onChangeText={setA}
/>
<TextInput
style={styles.input}
placeholder="Enter value B"
keyboardType="numeric"
value={B}
onChangeText={setB}
/>
<TextInput
style={styles.input}
placeholder="Enter value C"
keyboardType="numeric"
value={C}
onChangeText={setC}
/>
<Button title="Sort" onPress={sortValues} color="#00796b" />
{sortedValues.length > 0 && (
<View>
<Text>Sorted Values: {sortedValues.join(', ')}</Text>
</View>
)}
</View>
);
}
const styles = StyleSheet.create({
container: {
justifyContent: 'center',
alignItems: 'center',
padding: 16,
},
input: {
height: 40,
borderColor: '#00796b',
borderWidth: 1,
marginBottom: 10,
paddingHorizontal: 8,
width: '80%',
textAlign: 'center',
},
});
