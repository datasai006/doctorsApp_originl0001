import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Sidebar = ({ role, navigation }) => {
  const menus = {
    admin: ['Dashboard', 'Manage Doctors', 'Manage Patients', 'Manage Hospitals', 'Reports'],
    doctor: ['Dashboard', 'Appointments', 'Schedule', 'Profile'],
    patient: ['Dashboard', 'Hospitals', 'Book Appointment', 'Appointments'],
  };

  return (
    <View style={styles.container}>
      {menus[role].map((menu, index) => (
        <TouchableOpacity key={index} style={styles.menuItem} onPress={() => navigation.navigate(menu)}>
          <Text style={styles.menuText}>{menu}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  menuItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Sidebar;
