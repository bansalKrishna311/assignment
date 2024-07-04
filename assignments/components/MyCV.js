import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

export default function MyCV() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: '#f5f5f5' }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          My CV
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Name:</Text>
        <Text style={styles.sectionContent}>Krishna Bansal</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Date of Birth:</Text>
        <Text style={styles.sectionContent}>Jan 28th, 2004</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Family Details:</Text>
        <Text style={styles.sectionContent}>
          Father: Mr. Sandeep Bansal{'\n'}
          Mother: Mrs. Sangeeta Bansal{'\n'}
          Siblings: 1 Sister
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Academic Details:</Text>
        <Text style={styles.sectionContent}>
          12th: Shss, Bicholim-Goa{'\n'}
          Graduation: SVIET{'\n'}
          Major: Computer Science
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Hobbies:</Text>
        <Text style={styles.sectionContent}>
          - Martial AARTS{'\n'}
          - Swimming{'\n'}
          - Traveling{'\n'}
          - Coding
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#38C3FF',
    padding: 7,
    borderRadius: 5,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  sectionContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#38C3FF',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 20,
    color: '#004d40',
  },
});
