import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

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
        const usersList = snapshot.docs.map(doc => doc.data());
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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Firebase Integration Example</Text>
      <Text style={styles.subHeader}>Users:</Text>
      
      <ScrollView style={styles.scrollView}>
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

      <View style={styles.authContainer}>
        {user ? (
          <Text style={styles.userInfo}>Signed in anonymously</Text>
        ) : (
          <TouchableOpacity style={styles.signInButton} onPress={signInAnonymously}>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f0f2',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#555',
    marginTop: 20,
    marginBottom: 10,
  },
  scrollView: {
    width: '100%',
  },
  userCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
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
    fontSize: 16,
    color: '#777',
    marginTop: 20,
  },
  authContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 25,
    elevation: 2,
  },
  signInButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007BFF',
  },
});

export default App;
