import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to the App!</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Featured Content</Text>
          <Text style={styles.cardText}>
            This is your home screen where you can see all the latest updates and featured content.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quick Actions</Text>
          <Text style={styles.cardText}>
            • View your profile{'\n'}
            • Adjust settings{'\n'}
            • Explore more features
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recent Activity</Text>
          <Text style={styles.cardText}>
            Check out your recent activity and stay up to date with everything happening in the app.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 40,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2196F3',
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
