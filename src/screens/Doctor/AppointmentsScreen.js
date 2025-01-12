import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const AppointmentsScreen = () => {
    const navigation = useNavigation();
  const [appointments, setAppointments] = useState([
    {
      id: '1',
      doctor: 'Dr. John Doe',
      patient: 'Jane Smith',
      date: '2025-01-12',
      time: '10:00 AM',
      status: 'Pending',
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
      status: 'Pending',
    },
  ]);

  const handleApprove = (id) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === id ? { ...appt, status: 'Approved' } : appt
      )
    );
  };

  const handleReject = (id) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === id ? { ...appt, status: 'Rejected' } : appt
      )
    );
  };

  const handleTransfer = (id) => {
    Alert.alert(
      'Transfer Appointment',
      'This will navigate to a Transfer Appointment form (placeholder).'
    );
  };

  const renderAppointment = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Doctor: {item.doctor}</Text>
        <Text style={styles.cardSubtitle}>Patient: {item.patient}</Text>
        <Text style={styles.cardSubtitle}>
          Date: {item.date} | Time: {item.time}
        </Text>
        <Text style={[styles.status, getStatusStyle(item.status)]}>
          Status: {item.status}
        </Text>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={[styles.button, styles.approveButton]}
          onPress={() => handleApprove(item.id)}
        >
          <Text style={styles.buttonText}>Approve</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.rejectButton]}
          onPress={() => handleReject(item.id)}
        >
          <Text style={styles.buttonText}>Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.transferButton]}
          onPress={() => handleTransfer(item.id)}
        >
          <Text style={styles.buttonText}>Transfer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Approved':
        return { color: '#4caf50' };
      case 'Rejected':
        return { color: '#f44336' };
      default:
        return { color: '#ff9800' };
    }
  };

  return (
    <View style={styles.container}>
    {/* Back Arrow Header */}
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Appointments</Text>
    </View>

    {/* Appointment List */}
    <FlatList
      data={appointments}
      keyExtractor={(item) => item.id}
      renderItem={renderAppointment}
      ListEmptyComponent={
        <Text style={styles.emptyText}>No appointments available.</Text>
      }
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f57c00',
    textAlign: 'center',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
  },
  cardContent: {
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#424242',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  approveButton: {
    backgroundColor: '#4caf50',
  },
  rejectButton: {
    backgroundColor: '#f44336',
  },
  transferButton: {
    backgroundColor: '#2196f3',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default AppointmentsScreen;
