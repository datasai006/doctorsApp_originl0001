// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// const Login = ({ navigation }) => {
//   const [mobile, setMobile] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Add authentication logic here
//     console.log('Mobile:', mobile, 'Password:', password);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         keyboardType="phone-pad"
//         value={mobile}
//         onChangeText={setMobile}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//         <Text style={styles.link}>Don't have an account? Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
//         <Text style={styles.link}>Forgot Password?</Text>
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

// export default Login;

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
// import Logo from '../../../assets/images/logo.png';

// const Login = ({ navigation }) => {
//   const [mobile, setMobile] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const validateInputs = () => {
//     if (mobile.length !== 10 || isNaN(mobile)) {
//       setError('Please enter a valid 10-digit mobile number');
//       return false;
//     }
//     if (!password) {
//       setError('Password cannot be empty');
//       return false;
//     }
//     setError('');
//     return true;
//   };

//   const handleLogin = () => {
//     if (validateInputs()) {
//       console.log('Mobile:', mobile, 'Password:', password);
//       // Perform authentication logic here
//       Alert.alert('Login Successful', `Welcome, user ${mobile}`);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={Logo} style={styles.logo} />
//       <Text style={styles.title}>Login</Text>
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         keyboardType="phone-pad"
//         value={mobile}
//         onChangeText={setMobile}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <TouchableOpacity
//         style={[styles.button, !(mobile && password) && styles.buttonDisabled]}
//         onPress={handleLogin}
//         disabled={!(mobile && password)}
//       >
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//         <Text style={styles.link}>Don't have an account? Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
//         <Text style={styles.link}>Forgot Password?</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
//   logo: { width: 180, height: 100, marginBottom: 20 },  // Adjust the width and height as needed
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   error: { color: 'red', marginBottom: 10 },
//   input: { width: '100%', padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 15 },
//   button: { backgroundColor: '#6200ee', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center' },
//   buttonDisabled: { backgroundColor: '#ccc' },
//   buttonText: { color: '#fff', fontWeight: 'bold' },
//   link: { color: '#6200ee', marginTop: 10 },
// });

// export default Login;


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import Logo from '../../../assets/images/logo.png';

const Login = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateInputs = () => {
    if (mobile.length !== 10 || isNaN(mobile)) {
      setError('Please enter a valid 10-digit mobile number');
      return false;
    }
    if (!password) {
      setError('Password cannot be empty');
      return false;
    }
    setError('');
    return true;
  };

  const handleLogin = () => {
    if (validateInputs()) {
      console.log('Mobile:', mobile, 'Password:', password);
      
      Alert.alert('Login Successful', `Welcome, user ${mobile}`);
      navigation.navigate('Dashboard'); 
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={setMobile}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={[styles.button, !(mobile && password) && styles.buttonDisabled]}
        onPress={handleLogin}
        disabled={!(mobile && password)}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { width: 180, height: 100, marginBottom: 20 }, // Adjust the width and height as needed
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  error: { color: 'red', marginBottom: 10 },
  input: { width: '100%', padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 15 },
  button: { backgroundColor: '#6200ee', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center' },
  buttonDisabled: { backgroundColor: '#ccc' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  link: { color: '#6200ee', marginTop: 10 },
});

export default Login;
