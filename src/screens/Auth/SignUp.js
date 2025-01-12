// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// const SignUp = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [address, setAddress] = useState('');
//   const [state, setState] = useState('');
//   const [district, setDistrict] = useState('');

//   const handleSignUp = () => {
//     // Add registration logic here
//     console.log({ name, mobile, address, state, district });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         keyboardType="phone-pad"
//         value={mobile}
//         onChangeText={setMobile}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Address"
//         value={address}
//         onChangeText={setAddress}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="State"
//         value={state}
//         onChangeText={setState}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="District"
//         value={district}
//         onChangeText={setDistrict}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.link}>Already have an account? Login</Text>
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

// export default SignUp;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import Logo from '../../../assets/images/logo.png';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [error, setError] = useState('');

  const validateInputs = () => {
    if (!name.trim()) {
      setError('Name cannot be empty');
      return false;
    }
    if (mobile.length !== 10 || isNaN(mobile)) {
      setError('Please enter a valid 10-digit mobile number');
      return false;
    }
    if (!address.trim()) {
      setError('Address cannot be empty');
      return false;
    }
    if (!state.trim()) {
      setError('State cannot be empty');
      return false;
    }
    if (!district.trim()) {
      setError('District cannot be empty');
      return false;
    }
    setError('');
    return true;
  };

  const handleSignUp = () => {
    if (validateInputs()) {
      console.log({ name, mobile, address, state, district });
      // Perform registration logic here
      Alert.alert('Registration Successful', `Welcome, ${name}`);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Sign Up</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={setMobile}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
      />
      <TextInput
        style={styles.input}
        placeholder="District"
        value={district}
        onChangeText={setDistrict}
      />
      <TouchableOpacity
        style={[styles.button, !(name && mobile && address && state && district) && styles.buttonDisabled]}
        onPress={handleSignUp}
        disabled={!(name && mobile && address && state && district)}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { width: 180, height: 100, marginBottom: 20 },  // Adjust the size as needed
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  error: { color: 'red', marginBottom: 10 },
  input: { width: '100%', padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 15 },
  button: { backgroundColor: '#6200ee', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center' },
  buttonDisabled: { backgroundColor: '#ccc' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  link: { color: '#6200ee', marginTop: 10 },
});

export default SignUp;
