import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CounterApp() {
    const [count, setCount] = useState(0);
    const increment = () => {
    setCount(count+1);
    }
    const decrement = () => {
    setCount(count - 1);
    }
    return (
    <View style={styles.container}>
    <Text style={styles.title}>Counter App</Text>
    <Text style={styles.count}>{count}</Text>
    <View style={styles.buttonContainer}>
    <Button title="+" onPress={increment} color="#00796b" />
    <Button title="-" onPress={decrement} color="#00796b" />
    </View>
    </View>
    );
    }
    const styles = StyleSheet.create({
    container: {
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    },
    count: {fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 20,
        },
        buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%',
        },
        });
        