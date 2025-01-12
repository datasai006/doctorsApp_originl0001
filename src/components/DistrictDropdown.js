import React from 'react';
import { View, Picker, StyleSheet } from 'react-native';

const DistrictDropdown = ({ districts, selectedDistrict, onDistrictChange }) => {
  return (
    <View style={styles.container}>
      <Picker selectedValue={selectedDistrict} onValueChange={onDistrictChange}>
        {districts.map((district) => (
          <Picker.Item key={district.id} label={district.name} value={district.id} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 5,
  },
});

export default DistrictDropdown;
