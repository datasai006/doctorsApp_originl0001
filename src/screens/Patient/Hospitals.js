import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import HospitalCard from '../../components/HospitalCard';

const Hospitals = () => {
  const [hospitals, setHospitals] = useState([
    { id: '1', name: 'City Hospital', location: 'New York' },
    { id: '2', name: 'General Hospital', location: 'Los Angeles' },
  ]);

  const handleSelect = (id) => {
    console.log(`Selected hospital ID: ${id}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={hospitals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HospitalCard hospital={item} onSelect={handleSelect} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Hospitals;
