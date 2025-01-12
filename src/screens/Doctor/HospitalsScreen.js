import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HospitalsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hospitals</Text>
      <Text style={styles.content}>Here you can manage hospital information.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#03a9f4',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    color: '#424242',
  },
});

export default HospitalsScreen;
