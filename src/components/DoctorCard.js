import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DoctorCard = ({ doctor, onSelect }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onSelect(doctor.id)}>
      <Text style={styles.name}>{doctor.name}</Text>
      <Text style={styles.specialty}>{doctor.specialty}</Text>
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
  specialty: {
    fontSize: 14,
    color: '#666',
  },
});

export default DoctorCard;
