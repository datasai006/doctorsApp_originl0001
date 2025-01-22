// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// const ForgotPassword = ({ navigation }) => {
//   const [mobile, setMobile] = useState('');

//   const handleForgotPassword = () => {
//     // Add forgot password logic here
//     console.log('Reset Password for:', mobile);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Forgot Password</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Mobile Number"
//         keyboardType="phone-pad"
//         value={mobile}
//         onChangeText={setMobile}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
//         <Text style={styles.buttonText}>Reset Password</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.link}>Back to Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   input: { width: '100%', padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 15 },
//   button: { backgroundColor: '#6200ee', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center' },
//   buttonText: { color: '#fff', fontWeight: 'bold' },
//   link: { color: '#6200ee', marginTop: 10 },
// });

// export default ForgotPassword;


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// const ForgotPassword = ({ navigation }) => {
//   const [mobile, setMobile] = useState('');
//   const [error, setError] = useState('');

//   const validateMobile = () => {
//     // Validate the mobile number (must be 10 digits)
//     if (mobile.length !== 10 || isNaN(mobile)) {
//       setError('Please enter a valid 10-digit mobile number');
//       return false;
//     }
//     setError('');
//     return true;
//   };

//   const handleForgotPassword = () => {
//     if (validateMobile()) {
//       console.log('Reset Password for:', mobile);
//       // Simulate a password reset (you can replace this with your actual API call)
//       Alert.alert('Password Reset', `A reset link has been sent to ${mobile}`);
//       // Add actual API call logic here
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Forgot Password</Text>
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Mobile Number"
//         keyboardType="phone-pad"
//         value={mobile}
//         onChangeText={setMobile}
//       />
//       <TouchableOpacity
//         style={[styles.button, !mobile && { backgroundColor: '#ccc' }]}
//         onPress={handleForgotPassword}
//         disabled={!mobile}
//       >
//         <Text style={styles.buttonText}>Reset Password</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.link}>Back to Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   error: { color: 'red', marginBottom: 10 },
//   input: { width: '100%', padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 15 },
//   button: { backgroundColor: '#6200ee', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center' },
//   buttonText: { color: '#fff', fontWeight: 'bold' },
//   link: { color: '#6200ee', marginTop: 10 },
// });

// export default ForgotPassword;


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,Image } from 'react-native';
import Logo from '../../../assets/images/logo.png';
const ForgotPassword = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  const validateMobile = () => {
    // Validate the mobile number (must be 10 digits)
    if (mobile.length !== 10 || isNaN(mobile)) {
      setError('Please enter a valid 10-digit mobile number');
      return false;
    }
    setError('');
    return true;
  };

  const handleForgotPassword = () => {
    if (validateMobile()) {
      console.log('Reset Password for:', mobile);
      // Simulate sending OTP (you can replace this with your actual API call)
      Alert.alert('OTP Sent', `An OTP has been sent to ${mobile}`);
      
      // Navigate to OTP page
      navigation.navigate('OTP', { mobile });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Forgot Password</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Number"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={setMobile}
      />
      <TouchableOpacity
        style={[styles.button, !mobile && { backgroundColor: '#ccc' }]}
        onPress={handleForgotPassword}
        disabled={!mobile}
      >
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { width: 180, height: 100, marginBottom: 20 }, 
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  error: { color: 'red', marginBottom: 10 },
  input: { width: '100%', padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 15 },
  button: { backgroundColor: '#6200ee', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  link: { color: '#6200ee', marginTop: 10 },
});

export default ForgotPassword;
