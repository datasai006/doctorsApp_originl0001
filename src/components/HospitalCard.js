import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HospitalCard = ({ hospital, onSelect }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onSelect(hospital.id)}>
      <Text style={styles.name}>{hospital.name}</Text>
      <Text style={styles.location}>{hospital.location}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
});

export default HospitalCard;
