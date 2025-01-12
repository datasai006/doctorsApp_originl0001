import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Appointments = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [appointments, setAppointments] = useState([
    {
      id: '1',
      doctor: 'Dr. John Doe',
      patient: 'Jane Smith',
      date: '2025-01-12',
      time: '10:00 AM',
      status: 'Confirmed',
    },
    {
      id: '2',
      doctor: 'Dr. Alice Brown',
      patient: 'Michael Johnson',
      date: '2025-01-13',
      time: '11:30 AM',
      status: 'Pending',
    },
    {
      id: '3',
      doctor: 'Dr. Peter Parker',
      patient: 'Sarah Brown',
      date: '2025-01-14',
      time: '02:00 PM',
      status: 'Cancelled',
    },
  ]);

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    appointment.patient.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteAppointment = (id) => {
    Alert.alert(
      'Delete Appointment',
      'Are you sure you want to delete this appointment?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setAppointments((prev) => prev.filter((appt) => appt.id !== id));
          },
        },
      ]
    );
  };

  const handleAddAppointment = () => {
    Alert.alert(
      'Add Appointment',
      'This will navigate to an Add Appointment form (placeholder).'
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doctor Appointments</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search by Doctor or Patient"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Appointment List */}
      <FlatList
        data={filteredAppointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.appointmentCard}>
            <View style={styles.cardContent}>
              <Text style={styles.doctorText}>Doctor: {item.doctor}</Text>
              <Text style={styles.patientText}>Patient: {item.patient}</Text>
              <Text style={styles.dateText}>
                Date: {item.date} | Time: {item.time}
              </Text>
              <Text style={styles.statusText}>Status: {item.status}</Text>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteAppointment(item.id)}
            >
              <FontAwesome5 name="trash" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.noAppointmentsText}>No appointments found.</Text>
        }
      />

      {/* Add Appointment Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddAppointment}>
        <FontAwesome5 name="calendar-plus" size={20} color="#fff" />
        <Text style={styles.addButtonText}>Add Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4caf50',
    textAlign: 'center',
    marginBottom: 16,
  },
  searchBar: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 16,
    elevation: 2,
  },
  appointmentCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    elevation: 3,
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
  },
  doctorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  patientText: {
    fontSize: 14,
    color: '#424242',
  },
  dateText: {
    fontSize: 14,
    color: '#424242',
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    borderRadius: 8,
    padding: 10,
  },
  noAppointmentsText: {
    textAlign: 'center',
    color: '#757575',
    fontSize: 16,
    marginTop: 20,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4caf50',
    borderRadius: 8,
    padding: 14,
    marginTop: 16,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
});

export default Appointments;
