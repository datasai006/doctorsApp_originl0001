import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getHospitals, addHospital, deleteHospital } from '../../utils/api'; // Mock API functions

const ManageHospital = () => {
  const [hospitals, setHospitals] = useState([]);
  const [newHospital, setNewHospital] = useState({ name: '', location: '' });

  useEffect(() => {
    fetchHospitals();
  }, []);

  const fetchHospitals = async () => {
    const data = await getHospitals();
    setHospitals(data);
  };

  const handleAddHospital = async () => {
    if (newHospital.name && newHospital.location) {
      await addHospital(newHospital);
      fetchHospitals();
      setNewHospital({ name: '', location: '' });
    } else {
      alert('Please fill all fields!');
    }
  };

  const handleDeleteHospital = async (id) => {
    await deleteHospital(id);
    fetchHospitals();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Hospitals</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Hospital Name"
          value={newHospital.name}
          onChangeText={(text) => setNewHospital({ ...newHospital, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={newHospital.location}
          onChangeText={(text) => setNewHospital({ ...newHospital, location: text })}
        />
        <Button title="Add Hospital" onPress={handleAddHospital} />
      </View>
      <FlatList
        data={hospitals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.hospitalCard}>
            <Text>{item.name}</Text>
            <Text>{item.location}</Text>
            <TouchableOpacity onPress={() => handleDeleteHospital(item.id)} style={styles.deleteButton}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  hospitalCard: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  deleteText: {
    color: '#fff',
  },
});

export default ManageHospital;
