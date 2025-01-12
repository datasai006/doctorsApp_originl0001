import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Appointments = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Patient Appointments</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default Appointments;
