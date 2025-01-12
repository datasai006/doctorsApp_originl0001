import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AppointmentForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: '', date: '', time: '' });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={form.name} onChangeText={(value) => handleChange('name', value)} />
      <Text style={styles.label}>Date</Text>
      <TextInput style={styles.input} value={form.date} onChangeText={(value) => handleChange('date', value)} />
      <Text style={styles.label}>Time</Text>
      <TextInput style={styles.input} value={form.time} onChangeText={(value) => handleChange('time', value)} />
      <Button title="Book Appointment" onPress={() => onSubmit(form)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginVertical: 5,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
});

export default AppointmentForm;
