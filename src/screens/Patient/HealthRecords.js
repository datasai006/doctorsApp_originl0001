// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';
// import { Text, Button, Card } from 'react-native-paper';
// import * as DocumentPicker from 'expo-document-picker';

// const HealthRecords = ({ userId }) => {
//   const [appointments, setAppointments] = useState([]);
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   // Mock API call to fetch appointments
//   const fetchAppointments = async () => {
//     // Replace with your API call
//     const mockAppointments = [
//       { id: 1, date: '2025-01-20', doctor: 'Dr. Smith', hospital: 'City Hospital', status: 'completed' },
//       { id: 2, date: '2025-01-15', doctor: 'Dr. Emily', hospital: 'Green Clinic', status: 'completed' },
//     ];
//     setAppointments(mockAppointments.filter(app => app.status === 'completed'));
//   };



// const handleUploadDocuments = async (appointmentId) => {
//     try {
//       const result = await DocumentPicker.getDocumentAsync({
//         multiple: true,
//         type: '*/*', // Allow all file types
//       });
  
//       console.log('Document Picker Result:', result);
  
//       // Check if the user canceled
//       if (result.canceled) {
//         console.log('User canceled document selection.');
//         return;
//       }
  
//       // Extract files from the `assets` array
//       const selectedAssets = result.assets || [];
//       if (selectedAssets.length === 0) {
//         Alert.alert('Error', 'No files selected.');
//         return;
//       }
  
//       // Add the selected files to the state (assuming you're using `useState`)
//       const updatedFiles = selectedAssets.map(asset => ({
//         appointmentId,
//         name: asset.name,
//         uri: asset.uri,
//         type: asset.mimeType,
//         size: asset.size,
//       }));
  
//       console.log('Files for Upload:', updatedFiles);
  
//       // If using state to track selected files
//       setSelectedFiles(prevFiles => [...prevFiles, ...updatedFiles]);
  
//       Alert.alert('Success', `${updatedFiles.length} file(s) uploaded successfully!`);
//     } catch (error) {
//       console.error('Error during file upload:', error);
//       Alert.alert('Error', 'Failed to upload documents.');
//     }
//   };
  
//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const renderAppointment = ({ item }) => (
//     <Card style={styles.card}>
//       <Card.Content>
//         <Text style={styles.label}>Date:</Text>
//         <Text style={styles.value}>{item.date}</Text>
//         <Text style={styles.label}>Doctor:</Text>
//         <Text style={styles.value}>{item.doctor}</Text>
//         <Text style={styles.label}>Hospital:</Text>
//         <Text style={styles.value}>{item.hospital}</Text>
//         <Button
//           mode="outlined"
//           onPress={() => handleUploadDocuments(item.id)}
//           style={styles.uploadButton}
//           textColor="#00B4F6"
//         >
//           Upload Documents
//         </Button>
//       </Card.Content>
//     </Card>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Health Records</Text>
//       <FlatList
//         data={appointments}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderAppointment}
//         ListEmptyComponent={<Text style={styles.emptyText}>No completed appointments found.</Text>}
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// };

// export default HealthRecords;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#333',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginBottom: 15,
//     elevation: 3,
//     padding: 15,
//   },
//   label: {
//     fontSize: 14,
//     color: '#555',
//     fontWeight: 'bold',
//   },
//   value: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 10,
//   },
//   uploadButton: {
//     marginTop: 10,
//     borderColor: '#00B4F6',
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#888',
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
// });

// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';
// import { Text, Button, Card } from 'react-native-paper';
// import * as DocumentPicker from 'expo-document-picker';
// import * as ImagePicker from 'expo-image-picker';

// const HealthRecords = ({ userId }) => {
//   const [appointments, setAppointments] = useState([]);
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   // Mock API call to fetch appointments
//   const fetchAppointments = async () => {
//     // Replace with your API call
//     const mockAppointments = [
//       { id: 1, date: '2025-01-20', doctor: 'Dr. Smith', hospital: 'City Hospital', status: 'completed' },
//       { id: 2, date: '2025-01-15', doctor: 'Dr. Emily', hospital: 'Green Clinic', status: 'completed' },
//     ];
//     setAppointments(mockAppointments.filter(app => app.status === 'completed'));
//   };

//   // Handle upload action
//   const handleUploadDocuments = async (appointmentId) => {
//     Alert.alert(
//       'Upload Document',
//       'Choose a source:',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'Pick from Storage',
//           onPress: () => pickDocument(appointmentId),
//         },
//         {
//           text: 'Take a Photo',
//           onPress: () => takePhoto(appointmentId),
//         },
//       ],
//       { cancelable: true }
//     );
//   };

//   // Pick a document from storage
//   const pickDocument = async (appointmentId) => {
//     try {
//       const result = await DocumentPicker.getDocumentAsync({
//         type: '*/*', // Allow all file types
//         multiple: false,
//       });

//       if (result.type === 'cancel') {
//         console.log('User canceled document selection.');
//         return;
//       }

//       const file = {
//         appointmentId,
//         name: result.name,
//         uri: result.uri,
//         type: result.mimeType,
//         size: result.size,
//       };

//       setSelectedFiles(prevFiles => [...prevFiles, file]);
//       Alert.alert('Success', `File "${file.name}" uploaded successfully!`);
//       console.log('Picked Document:', file);
//     } catch (error) {
//       console.error('Error during document selection:', error);
//       Alert.alert('Error', 'Failed to select a document.');
//     }
//   };

//   // Take a photo using the camera
//   const takePhoto = async (appointmentId) => {
//     try {
//       const { status } = await ImagePicker.requestCameraPermissionsAsync();
//       if (status !== 'granted') {
//         Alert.alert('Permission Denied', 'Camera permission is required to take a photo.');
//         return;
//       }

//       const result = await ImagePicker.launchCameraAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         quality: 1, // Highest quality
//       });

//       if (result.canceled) {
//         console.log('User canceled camera operation.');
//         return;
//       }

//       const photo = {
//         appointmentId,
//         name: `Photo_${Date.now()}.jpg`,
//         uri: result.assets[0].uri,
//         type: 'image/jpeg',
//       };

//       setSelectedFiles(prevFiles => [...prevFiles, photo]);
//       Alert.alert('Success', `Photo uploaded successfully!`);
//       console.log('Captured Photo:', photo);
//     } catch (error) {
//       console.error('Error during photo capture:', error);
//       Alert.alert('Error', 'Failed to take a photo.');
//     }
//   };

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const renderAppointment = ({ item }) => (
//     <Card style={styles.card}>
//       <Card.Content>
//         <Text style={styles.label}>Date:</Text>
//         <Text style={styles.value}>{item.date}</Text>
//         <Text style={styles.label}>Doctor:</Text>
//         <Text style={styles.value}>{item.doctor}</Text>
//         <Text style={styles.label}>Hospital:</Text>
//         <Text style={styles.value}>{item.hospital}</Text>
//         <Button
//           mode="outlined"
//           onPress={() => handleUploadDocuments(item.id)}
//           style={styles.uploadButton}
//           textColor="#00B4F6"
//         >
//           Upload Documents
//         </Button>
//       </Card.Content>
//     </Card>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Health Records</Text>
//       <FlatList
//         data={appointments}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderAppointment}
//         ListEmptyComponent={<Text style={styles.emptyText}>No completed appointments found.</Text>}
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// };

// export default HealthRecords;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#333',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginBottom: 15,
//     elevation: 3,
//     padding: 15,
//   },
//   label: {
//     fontSize: 14,
//     color: '#555',
//     fontWeight: 'bold',
//   },
//   value: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 10,
//   },
//   uploadButton: {
//     marginTop: 10,
//     borderColor: '#00B4F6',
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#888',
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
// });

// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';
// import { Text, Button, Card } from 'react-native-paper';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as DocumentPicker from 'expo-document-picker';
// import * as ImagePicker from 'expo-image-picker';

// const HealthRecords = ({ userId }) => {
//   const [appointments, setAppointments] = useState([]);
//   const [uploadedDocuments, setUploadedDocuments] = useState({});

//   const STORAGE_KEY = `uploadedDocuments_${userId}`;

//   // Mock API call to fetch appointments
//   const fetchAppointments = async () => {
//     const mockAppointments = [
//       { id: 1, date: '2025-01-20', doctor: 'Dr. Smith', hospital: 'City Hospital', status: 'completed' },
//       { id: 2, date: '2025-01-15', doctor: 'Dr. Emily', hospital: 'Green Clinic', status: 'completed' },
//     ];
//     setAppointments(mockAppointments.filter((app) => app.status === 'completed'));
//   };

//   const saveDocumentsToStorage = async (data) => {
//     try {
//       await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
//       console.log('storage',data);
//     } catch (error) {
//       console.error('Failed to save documents to storage:', error);
//     }
//   };

//   const loadDocumentsFromStorage = async () => {
//     try {
//       const storedData = await AsyncStorage.getItem(STORAGE_KEY);
//       if (storedData) {
//         setUploadedDocuments(JSON.parse(storedData));
//       }
//     } catch (error) {
//       console.error('Failed to load documents from storage:', error);
//     }
//   };

//   const handleUploadDocuments = async (appointmentId) => {
//     try {
//       Alert.alert(
//         'Upload Documents',
//         'Choose an option',
//         [
//           { text: 'Cancel', style: 'cancel' },
//           {
//             text: 'Pick from Storage',
//             onPress: async () => {
//               const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });
//                 console.log('result',result);
//               if (result.type === 'success') {
//                 const newDocument = {
//                   id: Date.now(),
//                   appointmentId,
//                   name: result.name,
//                   uri: result.uri,
//                   type: result.mimeType || 'unknown',
//                 };

//                 const updatedDocs = {
//                   ...uploadedDocuments,
//                   [appointmentId]: [...(uploadedDocuments[appointmentId] || []), newDocument],
//                 };

//                 setUploadedDocuments(updatedDocs);
//                 saveDocumentsToStorage(updatedDocs);

//                 Alert.alert('Success', `${result.name} uploaded successfully!`);
//               }
//             },
//           },
//           {
//             text: 'Take a Photo',
//             onPress: async () => {
//               const { status } = await ImagePicker.requestCameraPermissionsAsync();
//               if (status !== 'granted') {
//                 Alert.alert('Permission Denied', 'Camera permissions are required to take a photo.');
//                 return;
//               }
//               const result = await ImagePicker.launchCameraAsync({
//                 mediaTypes: ImagePicker.MediaTypeOptions.Images,
//                 quality: 0.7,
//               });

//               if (!result.canceled) {
//                 const newPhoto = {
//                   id: Date.now(),
//                   appointmentId,
//                   name: `Photo_${Date.now()}.jpg`,
//                   uri: result.assets[0].uri,
//                   type: 'image/jpeg',
//                 };

//                 const updatedDocs = {
//                   ...uploadedDocuments,
//                   [appointmentId]: [...(uploadedDocuments[appointmentId] || []), newPhoto],
//                 };

//                 setUploadedDocuments(updatedDocs);
//                 saveDocumentsToStorage(updatedDocs);

//                 Alert.alert('Success', 'Photo uploaded successfully!');
//               }
//             },
//           },
//         ],
//         { cancelable: true }
//       );
//     } catch (error) {
//       console.error('Error during document upload:', error);
//       Alert.alert('Error', 'Failed to upload documents.');
//     }
//   };

//   useEffect(() => {
//     fetchAppointments();
//     loadDocumentsFromStorage();
//   }, []);

//   const renderAppointment = ({ item }) => (
//     <Card style={styles.card}>
//       <Card.Content>
//         <Text style={styles.label}>Date:</Text>
//         <Text style={styles.value}>{item.date}</Text>
//         <Text style={styles.label}>Doctor:</Text>
//         <Text style={styles.value}>{item.doctor}</Text>
//         <Text style={styles.label}>Hospital:</Text>
//         <Text style={styles.value}>{item.hospital}</Text>

//         {/* Show uploaded documents */}
//         {uploadedDocuments[item.id] && uploadedDocuments[item.id].length > 0 && (
//           <View style={styles.uploadedFilesContainer}>
//             <Text style={styles.label}>Uploaded Documents:</Text>
//             {uploadedDocuments[item.id].map((doc) => (
//               <TouchableOpacity
//                 key={doc.id}
//                 onPress={() => Alert.alert('File Info', `File: ${doc.name}`)}
//               >
//                 <Text style={styles.uploadedFile}>{doc.name}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}

//         <Button
//           mode="outlined"
//           onPress={() => handleUploadDocuments(item.id)}
//           style={styles.uploadButton}
//           textColor="#00B4F6"
//         >
//           Upload Documents
//         </Button>
//       </Card.Content>
//     </Card>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Health Records</Text>
//       <FlatList
//         data={appointments}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderAppointment}
//         ListEmptyComponent={<Text style={styles.emptyText}>No completed appointments found.</Text>}
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// };

// export default HealthRecords;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#333',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginBottom: 15,
//     elevation: 3,
//     padding: 15,
//   },
//   label: {
//     fontSize: 14,
//     color: '#555',
//     fontWeight: 'bold',
//   },
//   value: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 10,
//   },
//   uploadedFilesContainer: {
//     marginBottom: 10,
//   },
//   uploadedFile: {
//     fontSize: 14,
//     color: '#007BFF',
//     textDecorationLine: 'underline',
//     marginVertical: 2,
//   },
//   uploadButton: {
//     marginTop: 10,
//     borderColor: '#00B4F6',
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#888',
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
// });



// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';
// import { Text, Button, Card } from 'react-native-paper';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as DocumentPicker from 'expo-document-picker';
// import * as ImagePicker from 'expo-image-picker';

// const HealthRecords = ({ userId }) => {
//   const [appointments, setAppointments] = useState([]);
//   const [uploadedDocuments, setUploadedDocuments] = useState({});

//   const STORAGE_KEY = `uploadedDocuments_${userId}`;

//   // Mock API call to fetch appointments
//   const fetchAppointments = async () => {
//     const mockAppointments = [
//       { id: 1, date: '2025-01-20', doctor: 'Dr. Smith', hospital: 'City Hospital', status: 'completed' },
//       { id: 2, date: '2025-01-15', doctor: 'Dr. Emily', hospital: 'Green Clinic', status: 'completed' },
//     ];
//     setAppointments(mockAppointments.filter((app) => app.status === 'completed'));
//   };

//   const saveDocumentsToStorage = async (data) => {
//     try {
//       await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
//     } catch (error) {
//       console.error('Failed to save documents to storage:', error);
//     }
//   };

//   const loadDocumentsFromStorage = async () => {
//     try {
//       const storedData = await AsyncStorage.getItem(STORAGE_KEY);
//       if (storedData) {
//         setUploadedDocuments(JSON.parse(storedData));
//       }
//     } catch (error) {
//       console.error('Failed to load documents from storage:', error);
//     }
//   };

//   const handleUploadDocuments = async (appointmentId) => {
//     try {
//       Alert.alert(
//         'Upload Documents',
//         'Choose an option',
//         [
//           { text: 'Cancel', style: 'cancel' },
//           {
//             text: 'Pick from Storage',
//             onPress: async () => {
//               const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });
//               if (result.type === 'success') {
//                 const newDocument = {
//                   id: Date.now(),
//                   appointmentId,
//                   name: result.name,
//                   uri: result.uri,
//                   type: result.mimeType || 'unknown',
//                 };

//                 const updatedDocs = {
//                   ...uploadedDocuments,
//                   [appointmentId]: [...(uploadedDocuments[appointmentId] || []), newDocument],
//                 };

//                 setUploadedDocuments(updatedDocs);
//                 saveDocumentsToStorage(updatedDocs);

//                 Alert.alert('Success', `${result.name} uploaded successfully!`);
//               }
//             },
//           },
//           {
//             text: 'Take a Photo',
//             onPress: async () => {
//               const { status } = await ImagePicker.requestCameraPermissionsAsync();
//               if (status !== 'granted') {
//                 Alert.alert('Permission Denied', 'Camera permissions are required to take a photo.');
//                 return;
//               }
//               const result = await ImagePicker.launchCameraAsync({
//                 mediaTypes: ImagePicker.MediaTypeOptions.Images,
//                 quality: 0.7,
//               });

//               if (!result.canceled) {
//                 const newPhoto = {
//                   id: Date.now(),
//                   appointmentId,
//                   name: `Photo_${Date.now()}.jpg`,
//                   uri: result.assets[0].uri,
//                   type: 'image/jpeg',
//                 };

//                 const updatedDocs = {
//                   ...uploadedDocuments,
//                   [appointmentId]: [...(uploadedDocuments[appointmentId] || []), newPhoto],
//                 };

//                 setUploadedDocuments(updatedDocs);
//                 saveDocumentsToStorage(updatedDocs);

//                 Alert.alert('Success', 'Photo uploaded successfully!');
//               }
//             },
//           },
//         ],
//         { cancelable: true }
//       );
//     } catch (error) {
//       console.error('Error during document upload:', error);
//       Alert.alert('Error', 'Failed to upload documents.');
//     }
//   };

//   useEffect(() => {
//     fetchAppointments();
//     loadDocumentsFromStorage();
//   }, []);

//   const renderAppointment = ({ item }) => (
//     <Card style={styles.card}>
//       <Card.Content>
//         <Text style={styles.label}>Date:</Text>
//         <Text style={styles.value}>{item.date}</Text>
//         <Text style={styles.label}>Doctor:</Text>
//         <Text style={styles.value}>{item.doctor}</Text>
//         <Text style={styles.label}>Hospital:</Text>
//         <Text style={styles.value}>{item.hospital}</Text>

//         {/* Show uploaded documents */}
//         {uploadedDocuments[item.id] && uploadedDocuments[item.id].length > 0 && (
//           <View style={styles.uploadedFilesContainer}>
//             <Text style={styles.label}>Uploaded Documents:</Text>
//             {uploadedDocuments[item.id].map((doc) => (
//               <TouchableOpacity
//                 key={doc.id}
//                 onPress={() => Alert.alert('File Info', `File: ${doc.name}`)}
//               >
//                 <Text style={styles.uploadedFile}>{doc.name}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}

//         <Button
//           mode="outlined"
//           onPress={() => handleUploadDocuments(item.id)}
//           style={styles.uploadButton}
//           textColor="#00B4F6"
//         >
//           Upload Documents
//         </Button>
//       </Card.Content>
//     </Card>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Health Records</Text>
//       <FlatList
//         data={appointments}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderAppointment}
//         ListEmptyComponent={<Text style={styles.emptyText}>No completed appointments found.</Text>}
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// };

// export default HealthRecords;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#333',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginBottom: 15,
//     elevation: 3,
//     padding: 15,
//   },
//   label: {
//     fontSize: 14,
//     color: '#555',
//     fontWeight: 'bold',
//   },
//   value: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 10,
//   },
//   uploadedFilesContainer: {
//     marginBottom: 10,
//   },
//   uploadedFile: {
//     fontSize: 14,
//     color: '#007BFF',
//     textDecorationLine: 'underline',
//     marginVertical: 2,
//   },
//   uploadButton: {
//     marginTop: 10,
//     borderColor: '#00B4F6',
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#888',
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
// });


// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, FlatList, Alert, TouchableOpacity, Modal, Pressable } from 'react-native';
// import { Text, Button, Card } from 'react-native-paper';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as DocumentPicker from 'expo-document-picker';
// import * as ImagePicker from 'expo-image-picker';

// const HealthRecords = ({ userId }) => {
//   const [appointments, setAppointments] = useState([]);
//   const [uploadedDocuments, setUploadedDocuments] = useState({});
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

//   const STORAGE_KEY = `uploadedDocuments_${userId}`;

//   // Mock API call to fetch appointments
//   const fetchAppointments = async () => {
//     const mockAppointments = [
//       { id: 1, date: '2025-01-20', doctor: 'Dr. Smith', hospital: 'City Hospital', status: 'completed' },
//       { id: 2, date: '2025-01-15', doctor: 'Dr. Emily', hospital: 'Green Clinic', status: 'completed' },
//     ];
//     setAppointments(mockAppointments.filter((app) => app.status === 'completed'));
//   };

//   const saveDocumentsToStorage = async (data) => {
//     try {
//       await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
//     } catch (error) {
//       console.error('Failed to save documents to storage:', error);
//     }
//   };

//   const loadDocumentsFromStorage = async () => {
//     try {
//       const storedData = await AsyncStorage.getItem(STORAGE_KEY);
//       if (storedData) {
//         setUploadedDocuments(JSON.parse(storedData));
//       }
//     } catch (error) {
//       console.error('Failed to load documents from storage:', error);
//     }
//   };

//   const handleUploadDocuments = async (option) => {
//     try {
//       if (option === 'storage') {
//         const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });
//         if (result.type === 'success') {
//           const newDocument = {
//             id: Date.now(),
//             appointmentId: selectedAppointmentId,
//             name: result.name,
//             uri: result.uri,
//             type: result.mimeType || 'unknown',
//           };

//           const updatedDocs = {
//             ...uploadedDocuments,
//             [selectedAppointmentId]: [...(uploadedDocuments[selectedAppointmentId] || []), newDocument],
//           };

//           setUploadedDocuments(updatedDocs);
//           saveDocumentsToStorage(updatedDocs);

//           Alert.alert('Success', `${result.name} uploaded successfully!`);
//           setModalVisible(false);
//         }
//       } else if (option === 'camera') {
//         const { status } = await ImagePicker.requestCameraPermissionsAsync();
//         if (status !== 'granted') {
//           Alert.alert('Permission Denied', 'Camera permissions are required to take a photo.');
//           return;
//         }
//         const result = await ImagePicker.launchCameraAsync({
//           mediaTypes: ImagePicker.MediaTypeOptions.Images,
//           quality: 0.7,
//         });

//         if (!result.canceled) {
//           const newPhoto = {
//             id: Date.now(),
//             appointmentId: selectedAppointmentId,
//             name: `Photo_${Date.now()}.jpg`,
//             uri: result.assets[0].uri,
//             type: 'image/jpeg',
//           };

//           const updatedDocs = {
//             ...uploadedDocuments,
//             [selectedAppointmentId]: [...(uploadedDocuments[selectedAppointmentId] || []), newPhoto],
//           };

//           setUploadedDocuments(updatedDocs);
//           saveDocumentsToStorage(updatedDocs);

//           Alert.alert('Success', 'Photo uploaded successfully!');
//           setModalVisible(false);
//         }
//       }
//     } catch (error) {
//       console.error('Error during document upload:', error);
//       Alert.alert('Error', 'Failed to upload documents.');
//       setModalVisible(false);
//     }
//   };

//   useEffect(() => {
//     fetchAppointments();
//     loadDocumentsFromStorage();
//   }, []);

//   const renderAppointment = ({ item }) => (
//     <Card style={styles.card}>
//       <Card.Content>
//         <Text style={styles.label}>Date:</Text>
//         <Text style={styles.value}>{item.date}</Text>
//         <Text style={styles.label}>Doctor:</Text>
//         <Text style={styles.value}>{item.doctor}</Text>
//         <Text style={styles.label}>Hospital:</Text>
//         <Text style={styles.value}>{item.hospital}</Text>

//         {/* Show uploaded documents */}
//         {uploadedDocuments[item.id] && uploadedDocuments[item.id].length > 0 && (
//           <View style={styles.uploadedFilesContainer}>
//             <Text style={styles.label}>Uploaded Documents:</Text>
//             {uploadedDocuments[item.id].map((doc) => (
//               <TouchableOpacity
//                 key={doc.id}
//                 onPress={() => Alert.alert('File Info', `File: ${doc.name}`)}
//               >
//                 <Text style={styles.uploadedFile}>{doc.name}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         )}

//         <Button
//           mode="outlined"
//           onPress={() => {
//             setSelectedAppointmentId(item.id);
//             setModalVisible(true);
//           }}
//           style={styles.uploadButton}
//           textColor="#00B4F6"
//         >
//           Upload Documents
//         </Button>
//       </Card.Content>
//     </Card>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Health Records</Text>
//       <FlatList
//         data={appointments}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderAppointment}
//         ListEmptyComponent={<Text style={styles.emptyText}>No completed appointments found.</Text>}
//         contentContainerStyle={styles.listContainer}
//       />
//       {/* Upload Options Modal */}
//       <Modal visible={modalVisible} transparent={true} animationType="slide">
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Upload Documents</Text>
//             <Pressable
//               style={[styles.modalButton, { backgroundColor: '#4CAF50' }]}
//               onPress={() => handleUploadDocuments('storage')}
//             >
//               <Text style={styles.modalButtonText}>Pick from Storage</Text>
//             </Pressable>
//             <Pressable
//               style={[styles.modalButton, { backgroundColor: '#2196F3' }]}
//               onPress={() => handleUploadDocuments('camera')}
//             >
//               <Text style={styles.modalButtonText}>Take a Photo</Text>
//             </Pressable>
//             <Pressable
//               style={[styles.modalButton, { backgroundColor: '#f44336' }]}
//               onPress={() => setModalVisible(false)}
//             >
//               <Text style={styles.modalButtonText}>Cancel</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default HealthRecords;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#333',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginBottom: 15,
//     elevation: 3,
//     padding: 15,
//   },
//   label: {
//     fontSize: 14,
//     color: '#555',
//     fontWeight: 'bold',
//   },
//   value: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 10,
//   },
//   uploadedFilesContainer: {
//     marginBottom: 10,
//   },
//   uploadedFile: {
//     fontSize: 14,
//     color: '#007BFF',
//     textDecorationLine: 'underline',
//     marginVertical: 2,
//   },
//   uploadButton: {
//     marginTop: 10,
//     borderColor: '#00B4F6',
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#888',
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     width: '80%',
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   modalButton: {
//     padding: 15,
//     borderRadius: 8,
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   modalButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Alert, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';

const HealthRecords = ({ userId }) => {
  const [appointments, setAppointments] = useState([]);
  const [uploadedDocuments, setUploadedDocuments] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  const STORAGE_KEY = `uploadedDocuments_${userId}`;

  // Mock API call to fetch appointments
  const fetchAppointments = async () => {
    const mockAppointments = [
      { id: 1, date: '2025-01-20', doctor: 'Dr. Smith', hospital: 'City Hospital', status: 'completed' },
      { id: 2, date: '2025-01-15', doctor: 'Dr. Emily', hospital: 'Green Clinic', status: 'completed' },
    ];
    setAppointments(mockAppointments.filter((app) => app.status === 'completed'));
  };

  const saveDocumentsToStorage = async (data) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save documents to storage:', error);
    }
  };

  const loadDocumentsFromStorage = async () => {
    try {
      const storedData = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedData) {
        setUploadedDocuments(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Failed to load documents from storage:', error);
    }
  };

  const handleUploadDocuments = async (option) => {
    try {
      if (option === 'storage') {
        console.log("Opening document picker...");
  
        const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });
  
        // Debugging - Check the result
        console.log('Document picker result:', result);
  
        if (result.type === 'success') {
          // Access the document info from the assets array
          const doc = result.assets[0];
  
          // Decode the document name to make it more readable if necessary
          const decodedName = decodeURIComponent(doc.name);
  
          const newDocument = {
            id: Date.now(),
            appointmentId: selectedAppointmentId,
            name: decodedName,
            uri: doc.uri,
            type: doc.mimeType || 'unknown',
          };
  
          const updatedDocs = {
            ...uploadedDocuments,
            [selectedAppointmentId]: [
              ...(uploadedDocuments[selectedAppointmentId] || []),
              newDocument,
            ],
          };
  
          setUploadedDocuments(updatedDocs);
          saveDocumentsToStorage(updatedDocs);
  
          Alert.alert('Success', `${decodedName} uploaded successfully!`);
          setModalVisible(false);
        } else {
          // Handle the case where no document is selected
          Alert.alert('No document selected', 'Please pick a document from your storage.');
          setModalVisible(false);
        }
      } else if (option === 'camera') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission Denied', 'Camera permissions are required to take a photo.');
          return;
        }
        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 0.7,
        });
  
        if (!result.canceled) {
          const newPhoto = {
            id: Date.now(),
            appointmentId: selectedAppointmentId,
            name: `Photo_${Date.now()}.jpg`,
            uri: result.assets[0].uri,
            type: 'image/jpeg',
          };
  
          const updatedDocs = {
            ...uploadedDocuments,
            [selectedAppointmentId]: [
              ...(uploadedDocuments[selectedAppointmentId] || []),
              newPhoto,
            ],
          };
  
          setUploadedDocuments(updatedDocs);
          saveDocumentsToStorage(updatedDocs);
  
          Alert.alert('Success', 'Photo uploaded successfully!');
          setModalVisible(false);
        }
      }
    } catch (error) {
      console.error('Error during document upload:', error);
      Alert.alert('Error', 'Failed to upload documents.');
      setModalVisible(false);
    }
  };
  


  useEffect(() => {
    fetchAppointments();
    loadDocumentsFromStorage();
  }, []);

  const renderAppointment = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{item.date}</Text>
        <Text style={styles.label}>Doctor:</Text>
        <Text style={styles.value}>{item.doctor}</Text>
        <Text style={styles.label}>Hospital:</Text>
        <Text style={styles.value}>{item.hospital}</Text>

        {/* Show uploaded documents */}
        {uploadedDocuments[item.id] && uploadedDocuments[item.id].length > 0 && (
          <View style={styles.uploadedFilesContainer}>
            <Text style={styles.label}>Uploaded Documents:</Text>
            {uploadedDocuments[item.id].map((doc) => (
              <TouchableOpacity
                key={doc.id}
                onPress={() => Alert.alert('File Info', `File: ${doc.name}`)}
              >
                <Text style={styles.uploadedFile}>{doc.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <Button
          mode="outlined"
          onPress={() => {
            setSelectedAppointmentId(item.id);
            setModalVisible(true);
          }}
          style={styles.uploadButton}
          textColor="#00B4F6"
        >
          Upload Documents
        </Button>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Health Records</Text>
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAppointment}
        ListEmptyComponent={<Text style={styles.emptyText}>No completed appointments found.</Text>}
        contentContainerStyle={styles.listContainer}
      />
      {/* Upload Options Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Upload Documents</Text>
            <Pressable
              style={[styles.modalButton, { backgroundColor: '#4CAF50' }]}
              onPress={() => handleUploadDocuments('storage')}
            >
              <Text style={styles.modalButtonText}>Pick from Storage</Text>
            </Pressable>
            <Pressable
              style={[styles.modalButton, { backgroundColor: '#2196F3' }]}
              onPress={() => handleUploadDocuments('camera')}
            >
              <Text style={styles.modalButtonText}>Take a Photo</Text>
            </Pressable>
            <Pressable
              style={[styles.modalButton, { backgroundColor: '#f44336' }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HealthRecords;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    padding: 15,
  },
  label: {
    fontSize: 14,
    color: '#555',
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  uploadedFilesContainer: {
    marginBottom: 10,
  },
  uploadedFile: {
    fontSize: 14,
    color: '#007BFF',
    textDecorationLine: 'underline',
    marginVertical: 2,
  },
  uploadButton: {
    marginTop: 10,
    borderColor: '#00B4F6',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
