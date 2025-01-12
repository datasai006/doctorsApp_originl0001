import React from 'react';
import { View, Picker, StyleSheet } from 'react-native';

const StateDropdown = ({ states, selectedState, onStateChange }) => {
  return (
    <View style={styles.container}>
      <Picker selectedValue={selectedState} onValueChange={onStateChange}>
        {states.map((state) => (
          <Picker.Item key={state.id} label={state.name} value={state.id} />
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

export default StateDropdown;
