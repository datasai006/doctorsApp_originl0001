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

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
// import Logo from '../../../assets/images/logo.png';

// const SignUp = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [address, setAddress] = useState('');
//   const [state, setState] = useState('');
//   const [district, setDistrict] = useState('');
//   const [error, setError] = useState('');

//   const validateInputs = () => {
//     if (!name.trim()) {
//       setError('Name cannot be empty');
//       return false;
//     }
//     if (mobile.length !== 10 || isNaN(mobile)) {
//       setError('Please enter a valid 10-digit mobile number');
//       return false;
//     }
//     if (!address.trim()) {
//       setError('Address cannot be empty');
//       return false;
//     }
//     if (!state.trim()) {
//       setError('State cannot be empty');
//       return false;
//     }
//     if (!district.trim()) {
//       setError('District cannot be empty');
//       return false;
//     }
//     setError('');
//     return true;
//   };

//   const handleSignUp = () => {
//     if (validateInputs()) {
//       console.log({ name, mobile, address, state, district });
//       // Perform registration logic here
//       Alert.alert('Registration Successful', `Welcome, ${name}`);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={Logo} style={styles.logo} />
//       <Text style={styles.title}>Sign Up</Text>
//       {error ? <Text style={styles.error}>{error}</Text> : null}
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
//       <TouchableOpacity
//         style={[styles.button, !(name && mobile && address && state && district) && styles.buttonDisabled]}
//         onPress={handleSignUp}
//         disabled={!(name && mobile && address && state && district)}
//       >
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
//   logo: { width: 180, height: 100, marginBottom: 20 },  // Adjust the size as needed
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   error: { color: 'red', marginBottom: 10 },
//   input: { width: '100%', padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 15 },
//   button: { backgroundColor: '#6200ee', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center' },
//   buttonDisabled: { backgroundColor: '#ccc' },
//   buttonText: { color: '#fff', fontWeight: 'bold' },
//   link: { color: '#6200ee', marginTop: 10 },
// });

// // export default SignUp;


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import Logo from '../../../assets/images/logo.png';

// const SignUp = ({ navigation }) => {
//   const [formFields, setFormFields] = useState([
//     { name: 'name', label: 'Name', type: 'text', value: '', required: true },
//     { name: 'age', label: 'Age', type: 'text', value: '', required: true },
//     {
//       name: 'gender',
//       label: 'Gender',
//       type: 'dropdown',
//       value: '',
//       options: ['Male', 'Female', 'Other'],
//       required: true,
//     },
//     { name: 'village', label: 'Village', type: 'text', value: '', required: true },
//     { name: 'mandal', label: 'Mandal', type: 'text', value: '', required: true },
//     { name: 'district', label: 'District', type: 'text', value: '', required: true },
//     { name: 'state', label: 'State', type: 'text', value: '', required: true },
//     { name: 'country', label: 'Country', type: 'text', value: '', required: true },
//     { name: 'mobile', label: 'Mobile Number', type: 'text', value: '', required: true },
//     {
//       name: 'bloodGroup',
//       label: 'Blood Group',
//       type: 'dropdown',
//       value: '',
//       options: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
//       required: true,
//     },
//     { name: 'password', label: 'Password', type: 'password', value: '', required: true },
//   ]);
//   const [error, setError] = useState('');

//   const validateInputs = () => {
//     for (const field of formFields) {
//       if (field.required && !field.value.trim()) {
//         setError(`${field.label} cannot be empty`);
//         return false;
//       }
//       if (field.name === 'mobile' && (field.value.length !== 10 || isNaN(field.value))) {
//         setError('Please enter a valid 10-digit mobile number');
//         return false;
//       }
//     }
//     setError('');
//     return true;
//   };

//   const handleSignUp = () => {
//     if (validateInputs()) {
//       const data = formFields.reduce((acc, field) => {
//         acc[field.name] = field.value;
//         return acc;
//       }, {});
  
//       // Show an alert and navigate to the login screen
//       Alert.alert(
//         'Registration Successful',
//         `Welcome, ${data.name}`,
//         [
//           {
//             text: 'OK',
//             onPress: () => navigation.navigate('Login'), // Navigate to the Login screen
//           },
//         ]
//       );
//     }
//   };
  

//   const handleInputChange = (name, value) => {
//     setFormFields((prevFields) =>
//       prevFields.map((field) => (field.name === name ? { ...field, value } : field))
//     );
//   };

//   return (
//     <KeyboardAvoidingView style={styles.container} behavior="padding">
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <Image source={Logo} style={styles.logo} />
//         {formFields.map((field) => (
//           <View key={field.name} style={styles.inputGroup}>
//             <Text style={styles.label}>{field.label}</Text>
//             {field.type === 'dropdown' ? (
//               <Picker
//                 selectedValue={field.value}
//                 onValueChange={(value) => handleInputChange(field.name, value)}
//                 style={styles.input}
//               >
//                 <Picker.Item label={`Select ${field.label}`} value="" />
//                 {field.options.map((option) => (
//                   <Picker.Item label={option} value={option} key={option} />
//                 ))}
//               </Picker>
//             ) : (
//               <TextInput
//                 style={styles.input}
//                 secureTextEntry={field.type === 'password'}
//                 onChangeText={(value) => handleInputChange(field.name, value)}
//                 value={field.value}
//               />
//             )}
//           </View>
//         ))}
//         {error ? <Text style={styles.error}>{error}</Text> : null}
//         <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//           <Text style={styles.buttonText}>Sign Up</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#fff' },
//   scrollContainer: { alignItems: 'center' },
//   logo: {  width: 200,
//     height: 200,
//     marginBottom: 10,
//     resizeMode: 'contain'}, 
//   inputGroup: { marginBottom: 15, width: '100%' },
//   label: { fontSize: 16, marginBottom: 5 },
//   input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10 },
//   button: { backgroundColor: '#007bff', padding: 15, borderRadius: 5 },
//   buttonText: { color: '#fff', textAlign: 'center', fontSize: 16 },
//   error: { color: 'red', marginBottom: 10 },
// });

// export default SignUp;


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, FlatList, KeyboardAvoidingView } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import Logo from '../../../assets/images/logo.png';

// const SignUp = ({ navigation }) => {
//   const [formFields, setFormFields] = useState([
//     { name: 'name', label: 'Name', type: 'text', value: '', required: true },
//     { name: 'age', label: 'Age', type: 'text', value: '', required: true },
//     {
//       name: 'gender',
//       label: 'Gender',
//       type: 'dropdown',
//       value: '',
//       options: ['Male', 'Female', 'Other'],
//       required: true,
//     },
//     { name: 'village', label: 'Village', type: 'text', value: '', required: true },
//     { name: 'mandal', label: 'Mandal', type: 'text', value: '', required: true },
//     { name: 'district', label: 'District', type: 'text', value: '', required: true },
//     { name: 'state', label: 'State', type: 'text', value: '', required: true },
//     { name: 'country', label: 'Country', type: 'text', value: '', required: true },
//     { name: 'mobile', label: 'Mobile Number', type: 'text', value: '', required: true },
//     {
//       name: 'bloodGroup',
//       label: 'Blood Group',
//       type: 'dropdown',
//       value: '',
//       options: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
//       required: true,
//     },
//     { name: 'password', label: 'Password', type: 'password', value: '', required: true },
//   ]);
//   const [error, setError] = useState('');

//   const validateInputs = () => {
//     for (const field of formFields) {
//       if (field.required && !field.value.trim()) {
//         setError(`${field.label} cannot be empty`);
//         return false;
//       }
//       if (field.name === 'mobile' && (field.value.length !== 10 || isNaN(field.value))) {
//         setError('Please enter a valid 10-digit mobile number');
//         return false;
//       }
//     }
//     setError('');
//     return true;
//   };

//   const handleSignUp = () => {
//     if (validateInputs()) {
//       const data = formFields.reduce((acc, field) => {
//         acc[field.name] = field.value;
//         return acc;
//       }, {});

//       Alert.alert(
//         'Registration Successful',
//         `Welcome, ${data.name}`,
//         [
//           {
//             text: 'OK',
//             onPress: () => navigation.navigate('Login'),
//           },
//         ]
//       );
//     }
//   };

//   const handleInputChange = (name, value) => {
//     setFormFields((prevFields) =>
//       prevFields.map((field) => (field.name === name ? { ...field, value } : field))
//     );
//   };

//   const renderFormField = ({ item: field }) => (
//     <View key={field.name} style={styles.inputGroup}>
//       <Text style={styles.label}>{field.label}</Text>
//       {field.type === 'dropdown' ? (
//         <Picker
//           selectedValue={field.value}
//           onValueChange={(value) => handleInputChange(field.name, value)}
//           style={styles.input}
//         >
//           <Picker.Item label={`Select ${field.label}`} value="" />
//           {field.options.map((option) => (
//             <Picker.Item label={option} value={option} key={option} />
//           ))}
//         </Picker>
//       ) : (
//         <TextInput
//           style={styles.input}
//           secureTextEntry={field.type === 'password'}
//           onChangeText={(value) => handleInputChange(field.name, value)}
//           value={field.value}
//         />
//       )}
//     </View>
//   );

//   return (
//     <KeyboardAvoidingView style={styles.container} behavior="padding">
//       <FlatList
//         ListHeaderComponent={<Image source={Logo} style={styles.logo} />}
//         data={formFields}
//         renderItem={renderFormField}
//         keyExtractor={(field) => field.name}
//         ListFooterComponent={
//           <>
//             {error ? <Text style={styles.error}>{error}</Text> : null}
//             <TouchableOpacity style={styles.button} onPress={handleSignUp}>
//               <Text style={styles.buttonText}>Sign Up</Text>
//             </TouchableOpacity>
//           </>
//         }
//       />
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#fff' },
//   logo: { width: 200, height: 200, alignSelf:'center' , marginBottom: 10, resizeMode: 'contain' },
//   inputGroup: { marginBottom: 15, width: '100%' },
//   label: { fontSize: 16, marginBottom: 5 },
//   input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10 },
//   button: { backgroundColor: '#007bff', padding: 15, borderRadius: 5 ,marginBottom:5 },
//   buttonText: { color: '#fff', textAlign: 'center', fontSize: 16 },
//   error: { color: 'red', marginBottom: 10 },
// });

// export default SignUp;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SignUp = ({ navigation }) => {
  const [formFields, setFormFields] = useState([
    { name: 'name', label: 'Name', type: 'text', value: '', required: true },
    { name: 'age', label: 'Age', type: 'text', value: '', required: true },
    {
      name: 'gender',
      label: 'Gender',
      type: 'dropdown',
      value: '',
      options: ['Male', 'Female', 'Other'],
      required: true,
    },
    { name: 'village', label: 'Village', type: 'text', value: '', required: true },
    { name: 'mandal', label: 'Mandal', type: 'text', value: '', required: true },
    { name: 'district', label: 'District', type: 'text', value: '', required: true },
    { name: 'state', label: 'State', type: 'text', value: '', required: true },
    { name: 'country', label: 'Country', type: 'text', value: '', required: true },
    { name: 'mobile', label: 'Mobile Number', type: 'text', value: '', required: true },
    {
      name: 'bloodGroup',
      label: 'Blood Group',
      type: 'dropdown',
      value: '',
      options: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
      required: true,
    },
    { name: 'password', label: 'Password', type: 'password', value: '', required: true },
  ]);
  const [error, setError] = useState('');

  const validateInputs = () => {
    for (const field of formFields) {
      if (field.required && !field.value.trim()) {
        setError(`${field.label} cannot be empty`);
        return false;
      }
      if (field.name === 'mobile' && (field.value.length !== 10 || isNaN(field.value))) {
        setError('Please enter a valid 10-digit mobile number');
        return false;
      }
    }
    setError('');
    return true;
  };

  const handleSignUp = () => {
    if (validateInputs()) {
      const data = formFields.reduce((acc, field) => {
        acc[field.name] = field.value;
        return acc;
      }, {});

      Alert.alert(
        'Registration Successful',
        `Welcome, ${data.name}`,
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'),
          },
        ]
      );
    }
  };

  const handleInputChange = (name, value) => {
    setFormFields((prevFields) =>
      prevFields.map((field) => (field.name === name ? { ...field, value } : field))
    );
  };

  const renderFormField = ({ item: field }) => (
    <View key={field.name} style={styles.inputGroup}>
      <Text style={styles.label}>{field.label}</Text>
      {field.type === 'dropdown' ? (
        <Picker
          selectedValue={field.value}
          onValueChange={(value) => handleInputChange(field.name, value)}
          style={styles.input}
        >
          <Picker.Item label={`Select ${field.label}`} value="" />
          {field.options.map((option) => (
            <Picker.Item label={option} value={option} key={option} />
          ))}
        </Picker>
      ) : (
        <TextInput
          style={styles.input}
          secureTextEntry={field.type === 'password'}
          onChangeText={(value) => handleInputChange(field.name, value)}
          value={field.value}
        />
      )}
    </View>
  );

  return (
    <FlatList
      ListHeaderComponent={
        <Text style={styles.headerText}>Sign Up Here</Text>
      }
      data={formFields}
      renderItem={renderFormField}
      keyExtractor={(field) => field.name}
      ListFooterComponent={
        <>
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </>
      }
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  inputGroup: { marginBottom: 15, width: '100%' },
  label: { fontSize: 16, marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10 },
  button: { backgroundColor: '#007bff', padding: 15, borderRadius: 5, marginBottom: 5 },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 16 },
  error: { color: 'red', marginBottom: 10 },
});

export default SignUp;
