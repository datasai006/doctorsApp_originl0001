import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  Avatar,
  Button,
  TextInput,
  Card,
  IconButton,
  useTheme,
} from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const ProfileManagement = () => {
  const theme = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    mobileNumber: '1234567890',
    image: 'https://via.placeholder.com/150', // Default image
    companyId: 'COMP12345',
    address: '123 Main Street',
    workingArea: 'Software Development',
  });

  const [updatedProfile, setUpdatedProfile] = useState({ ...profile });

  const handleEditToggle = () => {
    if (isEditing) {
      setUpdatedProfile(profile); // Reset changes if cancelled
    }
    setIsEditing(!isEditing);
  };

  const handleUpdateProfile = async () => {
    if (!updatedProfile.name.trim() || !updatedProfile.mobileNumber.trim()) {
      Alert.alert('Validation Error', 'Name and Mobile Number are required.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', updatedProfile.name);
      formData.append('mobileNumber', updatedProfile.mobileNumber);
      formData.append('companyId', updatedProfile.companyId);
      formData.append('address', updatedProfile.address);
      formData.append('workingArea', updatedProfile.workingArea);

      if (updatedProfile.image && updatedProfile.image !== profile.image) {
        const file = {
          uri: updatedProfile.image,
          name: 'profile.jpg',
          type: 'image/jpeg',
        };
        formData.append('image', file);
      }

      const response = await axios.put('https://your-backend-url/profile', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 200) {
        setProfile(updatedProfile);
        Alert.alert('Success', 'Profile updated successfully!');
        setIsEditing(false);
      } else {
        Alert.alert('Error', 'Failed to update profile. Please try again.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'Failed to update profile. Please try again.');
    }
  };

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setUpdatedProfile({ ...updatedProfile, image: result.assets[0].uri });
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Card style={styles.card}>
        <View style={styles.avatarContainer}>
          <Avatar.Image
            size={120}
            source={{ uri: isEditing ? updatedProfile.image : profile.image }}
          />
          {isEditing && (
            <IconButton
              icon="camera"
              size={24}
              style={styles.avatarEditButton}
              onPress={handlePickImage}
            />
          )}
        </View>
        <IconButton
          icon={isEditing ? 'close' : 'pencil'}
          size={24}
          onPress={handleEditToggle}
          style={styles.editIcon}
        />
      </Card>

      <Card style={styles.formCard}>
        <Card.Content>
          <TextInput
            label="Name"
            mode="outlined"
            value={isEditing ? updatedProfile.name : profile.name}
            onChangeText={(text) => setUpdatedProfile({ ...updatedProfile, name: text })}
            editable={isEditing}
            style={styles.input}
          />
          <TextInput
            label="Mobile Number"
            mode="outlined"
            keyboardType="numeric"
            value={isEditing ? updatedProfile.mobileNumber : profile.mobileNumber}
            onChangeText={(text) => setUpdatedProfile({ ...updatedProfile, mobileNumber: text })}
            editable={isEditing}
            style={styles.input}
          />
          <TextInput
            label="Company ID"
            mode="outlined"
            value={profile.companyId}
            editable={false}
            style={[styles.input, styles.readOnlyInput]}
          />
          <TextInput
            label="Address"
            mode="outlined"
            value={isEditing ? updatedProfile.address : profile.address}
            onChangeText={(text) => setUpdatedProfile({ ...updatedProfile, address: text })}
            editable={isEditing}
            style={styles.input}
          />
          <TextInput
            label="Working Area"
            mode="outlined"
            value={isEditing ? updatedProfile.workingArea : profile.workingArea}
            onChangeText={(text) => setUpdatedProfile({ ...updatedProfile, workingArea: text })}
            editable={isEditing}
            style={styles.input}
          />
          {isEditing && (
            <Button
              mode="contained"
              onPress={handleUpdateProfile}
              style={styles.updateButton}
            >
              Update Profile
            </Button>
          )}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 20,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatarEditButton: {
    position: 'absolute',
    bottom: 0,
    right: -10,
    backgroundColor: '#6200ee',
  },
  editIcon: {
    marginTop: 10,
    alignSelf: 'center',
  },
  formCard: {
    paddingVertical: 20,
  },
  input: {
    marginBottom: 15,
  },
  readOnlyInput: {
    backgroundColor: '#f0f0f0',
  },
  updateButton: {
    marginTop: 15,
  },
});

export default ProfileManagement;
