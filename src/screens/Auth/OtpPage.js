// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert ,Image} from 'react-native';
// import Logo from '../../../assets/images/logo.png';
// const OtpPage = ({ route, navigation }) => {
//   const { mobile } = route.params; // Get the mobile number passed from the ForgotPassword screen
//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');

//   const validateOtp = () => {
//     // Validate OTP (should be 6 digits)
//     if (otp.length !== 6 || isNaN(otp)) {
//       setError('Please enter a valid 6-digit OTP');
//       return false;
//     }
//     setError('');
//     return true;
//   };

//   const handleVerifyOtp = () => {
//     if (validateOtp()) {
//       console.log('Verify OTP for:', mobile, 'OTP:', otp);
//       // Simulate OTP verification (you can replace this with your actual API call)
//       Alert.alert('OTP Verified', `OTP for ${mobile} is correct`);

//       // Navigate to the new password screen
//       navigation.navigate('NewPasswordPage', { mobile });
//     }
//   };

//   return (
//     <View style={styles.container}>
//        <Image source={Logo} style={styles.logo} />
//       <Text style={styles.title}>Enter OTP</Text>
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter OTP"
//         keyboardType="numeric"
//         value={otp}
//         onChangeText={setOtp}
//       />
//       <TouchableOpacity
//         style={[styles.button, !otp && { backgroundColor: '#ccc' }]}
//         onPress={handleVerifyOtp}
//         disabled={!otp}
//       >
//         <Text style={styles.buttonText}>Verify OTP</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.goBack()}>
//         <Text style={styles.link}>Back to Forgot Password</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
//   logo: { width: 180, height: 100, marginBottom: 20 }, 
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   error: { color: 'red', marginBottom: 10 },
//   input: { width: '100%', padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 15 },
//   button: { backgroundColor: '#6200ee', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center' },
//   buttonText: { color: '#fff', fontWeight: 'bold' },
//   link: { color: '#6200ee', marginTop: 10 },
// });

// export default OtpPage;


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import Logo from '../../../assets/images/logo.png';

const OtpPage = ({ route, navigation }) => {
  const { mobile } = route.params; // Get the mobile number passed from the ForgotPassword screen
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(30); // 1 minutes timer in seconds
  const [canResend, setCanResend] = useState(false);

  // Validate OTP (should be 6 digits)
  const validateOtp = () => {
    if (otp.length !== 6 || isNaN(otp)) {
      setError('Please enter a valid 6-digit OTP');
      return false;
    }
    setError('');
    return true;
  };

  const handleVerifyOtp = () => {
    if (validateOtp()) {
      console.log('Verify OTP for:', mobile, 'OTP:', otp);
      // Simulate OTP verification (you can replace this with your actual API call)
      Alert.alert('OTP Verified', `OTP for ${mobile} is correct`);

      // Navigate to the new password screen
      navigation.navigate('NewPasswordPage', { mobile });
    }
  };

  const handleResendOtp = () => {
    // Simulate OTP resend (you can replace this with your actual API call)
    Alert.alert('OTP Resent', `A new OTP has been sent to ${mobile}`);
    setTimer(120); // Reset timer for 2 minutes
    setCanResend(false); // Disable resend button until timer completes
  };

  useEffect(() => {
    // Timer countdown logic
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);

      return () => clearInterval(interval); // Cleanup on component unmount or when timer reaches 0
    } else {
      setCanResend(true); // Enable resend OTP after 2 minutes
    }
  }, [timer]);

  // Format timer to MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Enter OTP</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity
        style={[styles.button, !otp && { backgroundColor: '#ccc' }]}
        onPress={handleVerifyOtp}
        disabled={!otp}
      >
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>

      <Text style={styles.timer}>{formatTime(timer)}</Text>

      {canResend ? (
        <TouchableOpacity style={styles.resendButton} onPress={handleResendOtp}>
          <Text style={styles.buttonText}>Resend OTP</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.link}>You can resend OTP after {formatTime(timer)}</Text>
      )}

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Back to Forgot Password</Text>
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
  timer: { marginTop: 20, fontSize: 16, color: 'gray' },
  resendButton: { backgroundColor: '#6200ee', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center', marginTop: 10 },
  link: { color: '#6200ee', marginTop: 10 },
});

export default OtpPage;
