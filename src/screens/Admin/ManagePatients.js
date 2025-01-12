import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ManagePatients = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Manage Patients</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ManagePatients;
