import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ManageDoctors = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Manage Doctors</Text>
      <Button title="Add Doctor" onPress={() => console.log('Add Doctor')} />
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

export default ManageDoctors;
