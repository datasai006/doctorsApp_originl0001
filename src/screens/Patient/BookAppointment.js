import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppointmentForm from '../../components/AppointmentForm';

const BookAppointment = () => {
  const handleSubmit = (form) => {
    console.log('Appointment Form Submitted', form);
  };

  return (
    <View style={styles.container}>
      <AppointmentForm onSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default BookAppointment;
