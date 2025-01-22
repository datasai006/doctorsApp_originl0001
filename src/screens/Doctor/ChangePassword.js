// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// const ChangePassword = ({ mobileNumber }) => {
//     const navigation = useNavigation(); 
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   // Handle password change logic
//   const handleChangePassword = () => {
//     if (!currentPassword || !newPassword || !confirmPassword) {
//       Alert.alert('Error', 'All fields are required.');
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       Alert.alert('Error', 'New password and confirm password do not match.');
//       return;
//     }

//     // Mock API Call or Validation
//     Alert.alert('Success', 'Your password has been changed successfully.');
//     navigation.navigate('Dashboard');
//     // Logic to call your backend API to update the password
//     // Example: send currentPassword, newPassword to the server for validation and update
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Change Password</Text>

//       <View style={styles.field}>
//         <Text style={styles.label}>Mobile Number</Text>
//         <TextInput
//           style={styles.input}
//           value={mobileNumber}
//           editable={false} // Disable editing
//         />
//       </View>

//       <View style={styles.field}>
//         <Text style={styles.label}>Current Password</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your current password"
//           secureTextEntry={true}
//           value={currentPassword}
//           onChangeText={setCurrentPassword}
//         />
//       </View>

//       <View style={styles.field}>
//         <Text style={styles.label}>New Password</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your new password"
//           secureTextEntry={true}
//           value={newPassword}
//           onChangeText={setNewPassword}
//         />
//       </View>

//       <View style={styles.field}>
//         <Text style={styles.label}>Confirm Password</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Confirm your new password"
//           secureTextEntry={true}
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//         />
//       </View>

//       <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
//         <Text style={styles.buttonText}>Update Password</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   field: {
//     marginBottom: 15,
//   },
//   label: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     fontSize: 16,
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default ChangePassword;


import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChangePassword = ({ mobileNumber }) => {
  const navigation = useNavigation();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle password change logic
  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'New password and confirm password do not match.');
      return;
    }

    // Mock API Call or Validation
    Alert.alert('Success', 'Your password has been changed successfully.');
    navigation.navigate('Dashboard');
    // Logic to call your backend API to update the password
    // Example: send currentPassword, newPassword to the server for validation and update
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Change Password</Text>

      <View style={styles.mobileContainer}>
        <Text style={styles.mobileLabel}>Mobile Number</Text>
        <Text style={styles.mobileNumber}>{mobileNumber}</Text>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Current Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your current password"
          secureTextEntry={true}
          value={currentPassword}
          onChangeText={setCurrentPassword}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your new password"
          secureTextEntry={true}
          value={newPassword}
          onChangeText={setNewPassword}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your new password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Update Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 30,
    textAlign: 'center',
  },
  mobileContainer: {
    backgroundColor: '#e8f0fe',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  mobileLabel: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  mobileNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
  },
  field: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChangePassword;
