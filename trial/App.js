import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  // Auth state listener
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(authUser => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);

  // Fetch users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const snapshot = await firestore().collection('user').get();
        let usersList = snapshot.docs.map(doc => doc.data());

        // Sort users by ID
        usersList = usersList.sort((a, b) => a.id - b.id);

        setUsers(usersList);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };
    fetchUsers();
  }, []);

  // Sign in anonymously
  const signInAnonymously = async () => {
    try {
      await auth().signInAnonymously();
    } catch (error) {
      console.error('Failed to sign in anonymously:', error);
    }
  };

  // Add user to Firestore
  const addUser = async () => {
    if (name.trim() === '' || age.trim() === '' || email.trim() === '') {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    try {
      const newUser = {
        id: users.length + 1, // Simple ID generation
        name: name.trim(),
        age: parseInt(age),
        email: email.trim(),
      };

      await firestore().collection('user').add(newUser);
      
      setUsers([...users, newUser]); // Update local state
      setName(''); // Reset input fields
      setAge('');
      setEmail('');
    } catch (error) {
      console.error('Failed to add user:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Management</Text>

      <View style={styles.inputSection}>
        <Text style={styles.subHeader}>Add a New User</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.addButton} onPress={addUser} activeOpacity={0.8}>
          <Text style={styles.addButtonText}>Add User</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listSection}>
        <Text style={styles.subHeader}>Current Users</Text>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
          {users.length > 0 ? (
            users.map((user, index) => (
              <View key={index} style={styles.userCard}>
                <Text style={styles.userText}><Text style={styles.label}>ID:</Text> {user.id}</Text>
                <Text style={styles.userText}><Text style={styles.label}>Name:</Text> {user.name}</Text>
                <Text style={styles.userText}><Text style={styles.label}>Age:</Text> {user.age}</Text>
                <Text style={styles.userText}><Text style={styles.label}>Email:</Text> {user.email}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noUsersText}>No users found</Text>
          )}
        </ScrollView>
      </View>

      <View style={styles.authContainer}>
        {user ? (
          <Text style={styles.userInfo}>Signed in anonymously</Text>
        ) : (
          <TouchableOpacity style={styles.signInButton} onPress={signInAnonymously} activeOpacity={0.8}>
            <Text style={styles.signInButtonText}>Sign In Anonymously</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f7',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  listSection: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  subHeader: {
    fontSize: 24,
    fontWeight: '600',
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  userCard: {
    backgroundColor: '#e9ecef',
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  userText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  label: {
    fontWeight: 'bold',
    color: '#007BFF',
  },
  noUsersText: {
    fontSize: 18,
    color: '#777',
    marginTop: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderColor: '#ced4da',
    borderWidth: 1,
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#28a745',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#28a745',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  addButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  authContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 35,
    elevation: 4,
    shadowColor: '#007BFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  signInButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007BFF',
  },
});

export default App;
