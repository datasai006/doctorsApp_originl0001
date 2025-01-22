import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ManageSlots = () => {
  const [date, setDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [slotModalVisible, setSlotModalVisible] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [newSlot, setNewSlot] = useState('');

  // Fetch slots for a specific date
  const fetchSlots = (selectedDate) => {
    // Replace with your API call to fetch slots
    const mockData = [
      { id: '1', time: '10:00 AM' },
      { id: '2', time: '11:30 AM' },
    ];
    setTimeSlots(mockData);
  };

  useEffect(() => {
    fetchSlots(date);
  }, [date]);

  // Handle date change
  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
      fetchSlots(selectedDate);
    }
  };

  // Add new time slot
  const handleAddSlot = () => {
    if (!newSlot.trim()) {
      Alert.alert('Error', 'Please enter a valid time slot.');
      return;
    }

    const newSlotData = { id: Date.now().toString(), time: newSlot };
    setTimeSlots((prev) => [...prev, newSlotData]);
    setNewSlot('');
    setSlotModalVisible(false);
    Alert.alert('Success', 'Time slot added successfully!');
  };

  // Delete a time slot
  const handleDeleteSlot = (id) => {
    setTimeSlots((prev) => prev.filter((slot) => slot.id !== id));
    Alert.alert('Success', 'Time slot deleted successfully!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Slots</Text>

      {/* Date Picker */}
      <TouchableOpacity
        style={styles.datePicker}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.dateText}>
          Selected Date: {date.toDateString()}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {/* Time Slots List */}
      <FlatList
        data={timeSlots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.slotItem}>
            <Text style={styles.slotText}>{item.time}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteSlot(item.id)}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.noSlotsText}>No time slots added.</Text>
        }
      />

      {/* Add Slot Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setSlotModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Add Time Slot</Text>
      </TouchableOpacity>

      {/* Add Slot Modal */}
      <Modal
        visible={slotModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setSlotModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Time Slot</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter time slot (e.g., 10:00 AM)"
              value={newSlot}
              onChangeText={setNewSlot}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleAddSlot}
              >
                <Text style={styles.modalButtonText}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#f44336' }]}
                onPress={() => setSlotModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  datePicker: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    elevation: 2,
    marginBottom: 16,
  },
  dateText: {
    fontSize: 16,
    color: '#424242',
  },
  slotItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2,
  },
  slotText: {
    fontSize: 16,
    color: '#424242',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  deleteText: {
    color: '#fff',
    fontSize: 14,
  },
  noSlotsText: {
    textAlign: 'center',
    color: '#757575',
    fontSize: 16,
    marginTop: 20,
  },
  addButton: {
    backgroundColor: '#4caf50',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#4caf50',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default ManageSlots;
