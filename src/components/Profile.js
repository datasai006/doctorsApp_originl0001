import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // For storing session data

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [isEditable, setIsEditable] = useState(false);

  // Fetch profile data from backend or AsyncStorage
  const fetchProfileData = async () => {
    try {
      // Replace this with API call if you have one
      const storedData = await AsyncStorage.getItem('userProfile');
      const userData = storedData ? JSON.parse(storedData) : {};
      setProfile(userData);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleInputChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const handleSave = async () => {
    try {
      // Replace this with API call to save profile data
      await AsyncStorage.setItem('userProfile', JSON.stringify(profile));
      Alert.alert('Profile updated successfully!');
      setIsEditable(false);
    } catch (error) {
      Alert.alert('Error updating profile:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>

      {/* Name Field */}
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={[styles.input, isEditable ? styles.editable : styles.nonEditable]}
        value={profile.name}
        editable={isEditable}
        onChangeText={(text) => handleInputChange('name', text)}
      />

      {/* Email Field */}
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={[styles.input, isEditable ? styles.editable : styles.nonEditable]}
        value={profile.email}
        editable={isEditable}
        onChangeText={(text) => handleInputChange('email', text)}
        keyboardType="email-address"
      />

      {/* Phone Field */}
      <Text style={styles.label}>Phone:</Text>
      <TextInput
        style={[styles.input, isEditable ? styles.editable : styles.nonEditable]}
        value={profile.phone}
        editable={isEditable}
        onChangeText={(text) => handleInputChange('phone', text)}
        keyboardType="phone-pad"
      />

      {/* Address Field */}
      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={[styles.input, isEditable ? styles.editable : styles.nonEditable]}
        value={profile.address}
        editable={isEditable}
        onChangeText={(text) => handleInputChange('address', text)}
      />

      {/* Action Buttons */}
      {isEditable ? (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.editButton} onPress={() => setIsEditable(true)}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  editable: {
    backgroundColor: '#FFFFFF',
  },
  nonEditable: {
    backgroundColor: '#EAEAEA',
  },
  editButton: {
    backgroundColor: '#0078FF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#28A745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
