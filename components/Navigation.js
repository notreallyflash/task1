import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Navigation({ currentScreen, onNavigate }) {
  const screens = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <View style={styles.container}>
      {screens.map((screen) => (
        <TouchableOpacity
          key={screen.id}
          style={[
            styles.navItem,
            currentScreen === screen.id && styles.navItemActive,
          ]}
          onPress={() => onNavigate(screen.id)}
        >
          <Text style={styles.icon}>{screen.icon}</Text>
          <Text
            style={[
              styles.label,
              currentScreen === screen.id && styles.labelActive,
            ]}
          >
            {screen.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingBottom: 20,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navItemActive: {
    borderTopWidth: 2,
    borderTopColor: '#2196F3',
  },
  icon: {
    fontSize: 24,
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: '#666',
  },
  labelActive: {
    color: '#2196F3',
    fontWeight: '600',
  },
});
