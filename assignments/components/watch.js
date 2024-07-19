import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
export default function Watch() {
const [currentTime, setCurrentTime] = useState(new Date());
const [stopwatchTime, setStopwatchTime] = useState(0);
const [isRunning, setIsRunning] = useState(false);
const intervalRef = useRef(null);
useEffect(() => {
const timer = setInterval(() => {
setCurrentTime(new Date());
}, 1000);
return () => clearInterval(timer);
}, []);
useEffect(() => {
if (isRunning) {
intervalRef.current = setInterval(() => {
setStopwatchTime(prevTime => prevTime + 1);
}, 1000);
} else if (!isRunning && intervalRef.current) {
clearInterval(intervalRef.current);
}
return () => clearInterval(intervalRef.current);
}, [isRunning]);
const formatTime = time => {

const getSeconds = `0${time % 60}`.slice(-2);
const minutes = Math.floor(time / 60);
const getMinutes = `0${minutes % 60}`.slice(-2);
const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
return (
<View style={styles.container}>
<Text style={styles.header}>Watch</Text>
<Text style={styles.time}>{currentTime.toLocaleTimeString()}</Text>
<Text style={styles.header}>Stopwatch</Text>
<Text style={styles.time}>{formatTime(stopwatchTime)}</Text>
<View style={styles.buttonContainer}>
<Button
title={isRunning ? 'Stop' : 'Start'}
onPress={() => setIsRunning(!isRunning)}
/>
<Button title="Reset" onPress={() => setStopwatchTime(0)} />
</View>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#fff',
},
header: {
fontSize: 30,
margin: 20,
},
time: {
fontSize: 40,
marginBottom: 40,
},
buttonContainer: {
flexDirection: 'row',

justifyContent: 'space-between',
width: '60%',
},
});