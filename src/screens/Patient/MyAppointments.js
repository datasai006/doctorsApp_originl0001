// import React, { useState } from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import { Card, Button, Avatar } from 'react-native-paper';

// const MyAppointments = () => {
//   // Static data for appointments
//   const [appointments] = useState([
//     {
//       id: 1,
//       doctor_name: 'John Doe',
//       date: '2025-01-21',
//       hospital_name: 'City Hospital',
//       status: 'Approved',
//     },
//     {
//       id: 2,
//       doctor_name: 'Jane Smith',
//       date: '2025-01-22',
//       hospital_name: 'Green Valley Clinic',
//       status: 'Approved',
//     },
//     {
//       id: 3,
//       doctor_name: 'Emily Johnson',
//       date: '2025-01-23',
//       hospital_name: 'Sunrise Medical Center',
//       status: 'Processing..',
//     },
//   ]);

//   const renderAppointment = ({ item }) => (
//     <Card style={styles.card}>
//       <Card.Title
//         title={`Dr. ${item.doctor_name}`}
//         subtitle={item.hospital_name}
//         left={(props) => <Avatar.Icon {...props} icon="account" />}
//       />
//       <Card.Content>
//         <Text style={styles.text}>Appointment ID: {item.id}</Text>
//         <Text style={styles.text}>Date: {item.date}</Text>
//       </Card.Content>
//       <Card.Actions>
//         <Button
//           mode="contained"
//           style={item.status === 'Approved' ? styles.approvedButton : styles.pendingButton}
//         >
//           {item.status}
//         </Button>
//       </Card.Actions>
//     </Card>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>My Appointments</Text>
//       {appointments.length === 0 ? (
//         <Text style={styles.noAppointments}>No appointments found.</Text>
//       ) : (
//         <FlatList
//           data={appointments}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderAppointment}
//         />
//       )}
//     </View>
//   );
// };

// export default MyAppointments;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#6200ee',
//     textAlign: 'center',
//   },
//   card: {
//     marginVertical: 10,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 4,
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 5,
//     color: '#333',
//   },
//   approvedButton: {
//     backgroundColor: '#4caf50',
//     color: '#fff',
//     paddingHorizontal: 10,
//   },
//   pendingButton: {
//     backgroundColor: '#ff9800',
//     color: '#fff',
//     paddingHorizontal: 10,
//   },
//   noAppointments: {
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#888',
//     marginTop: 20,
//   },
// // });
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
// import { Card, Button, Avatar } from 'react-native-paper';

// const MyAppointments = () => {
//   // Static data for appointments
//   const [appointments] = useState([
//     {
//       id: 1,
//       doctor_name: 'John Doe',
//       date: '2025-01-21',
//       hospital_name: 'City Hospital',
//       status: 'Approved',
//     },
//     {
//       id: 2,
//       doctor_name: 'Jane Smith',
//       date: '2025-01-22',
//       hospital_name: 'Green Valley Clinic',
//       status: 'Approved',
//     },
//     {
//       id: 3,
//       doctor_name: 'Emily Johnson',
//       date: '2025-01-23',
//       hospital_name: 'Sunrise Medical Center',
//       status: 'Processing...',
//     },
//   ]);

//   // State for search text and filtered appointments
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredAppointments, setFilteredAppointments] = useState(appointments);

//   // Handle search input change and filter appointments
//   const handleSearch = (query) => {
//     setSearchQuery(query);

//     // Filter appointments based on search query (case-insensitive search)
//     const filteredData = appointments.filter(
//       (appointment) =>
//         appointment.doctor_name.toLowerCase().includes(query.toLowerCase()) ||
//         appointment.hospital_name.toLowerCase().includes(query.toLowerCase()) ||
//         appointment.status.toLowerCase().includes(query.toLowerCase())
//     );

//     setFilteredAppointments(filteredData);
//   };

//   // Sort appointments by date in descending order (latest first)
//   const sortedAppointments = filteredAppointments.sort((a, b) => new Date(b.date) - new Date(a.date));

//   const renderAppointment = ({ item }) => (
//     <Card style={styles.card}>
//       <Card.Title
//         title={`Dr. ${item.doctor_name}`}
//         subtitle={item.hospital_name}
//         left={(props) => <Avatar.Icon {...props} icon="account" />}
//       />
//       <Card.Content>
//         <Text style={styles.text}>Appointment ID: {item.id}</Text>
//         <Text style={styles.text}>Date: {item.date}</Text>
//       </Card.Content>
//       <Card.Actions>
//         <Button
//           mode="contained"
//           style={item.status === 'Approved' ? styles.approvedButton : styles.pendingButton}
//         >
//           {item.status}
//         </Button>
//       </Card.Actions>
//     </Card>
//   );

//   return (
//     <View style={styles.container}>
//       {/* <Text style={styles.title}>My Appointments</Text> */}

//       {/* Search Bar */}
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search by Doctor, Hospital, or Status"
//         value={searchQuery}
//         onChangeText={handleSearch}
//       />

//       {filteredAppointments.length === 0 ? (
//         <Text style={styles.noAppointments}>No appointments found.</Text>
//       ) : (
//         <FlatList
//           data={sortedAppointments}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderAppointment}
//         />
//       )}
//     </View>
//   );
// };

// export default MyAppointments;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //     color: '#6200ee',
// //     textAlign: 'center',
// //   },
//   searchBar: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingLeft: 10,
//     marginBottom: 20,
//   },
//   card: {
//     marginVertical: 10,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 4,
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 5,
//     color: '#333',
//   },
//   approvedButton: {
//     backgroundColor: '#4caf50',
//     color: '#fff',
//     paddingHorizontal: 10,
//   },
//   pendingButton: {
//     backgroundColor: '#ff9800',
//     color: '#fff',
//     paddingHorizontal: 10,
//   },
//   noAppointments: {
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#888',
//     marginTop: 20,
//   },
// });


import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import { Card, Button, Avatar, Text } from 'react-native-paper';

const MyAppointments = () => {
  const [appointments] = useState([
    {
      id: 1,
      doctor_name: 'John Doe',
      date: '2025-01-21',
      hospital_name: 'City Hospital',
      status: 'Approved',
    },
    {
      id: 2,
      doctor_name: 'Jane Smith',
      date: '2025-01-22',
      hospital_name: 'Green Valley Clinic',
      status: 'Approved',
    },
    {
      id: 3,
      doctor_name: 'Emily Johnson',
      date: '2025-01-23',
      hospital_name: 'Sunrise Medical Center',
      status: 'Processing...',
    },
    {
        id: 4,
        doctor_name: 'Jane Smith',
        date: '2025-01-22',
        hospital_name: 'Green Valley Clinic',
        status: 'Approved',
      },
      {
        id: 5,
        doctor_name: 'Emily Johnson',
        date: '2025-01-23',
        hospital_name: 'Sunrise Medical Center',
        status: 'Processing...',
      },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAppointments, setFilteredAppointments] = useState(appointments);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredData = appointments.filter(
      (appointment) =>
        appointment.doctor_name.toLowerCase().includes(query.toLowerCase()) ||
        appointment.hospital_name.toLowerCase().includes(query.toLowerCase()) ||
        appointment.status.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAppointments(filteredData);
  };

  const sortedAppointments = filteredAppointments.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const renderAppointment = ({ item }) => (
    <Card mode="elevated" style={styles.card}>
      <Card.Title
        title={`Dr. ${item.doctor_name}`}
        subtitle={item.hospital_name}
        left={(props) => (
          <Avatar.Icon
            {...props}
            icon="account-circle"
            style={{ backgroundColor: '#00B4F6' }}
          />
        )}
      />
      <Card.Content>
        <Text variant="bodyMedium" style={styles.text}>
          Appointment ID: {item.id}
        </Text>
        <Text variant="bodyMedium" style={styles.text}>
          Date: {item.date}
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button
          mode="contained-tonal"
          style={item.status === 'Approved' ? styles.approvedButton : styles.pendingButton}
        >
          {item.status}
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by Doctor, Hospital, or Status"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {filteredAppointments.length === 0 ? (
        <Text variant="bodyMedium" style={styles.noAppointments}>
          No appointments found.
        </Text>
      ) : (
        <FlatList
          data={sortedAppointments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderAppointment}
        />
      )}
    </View>
  );
};

export default MyAppointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  searchBar: {
    height: 50,
    borderColor: '#00B4F6',
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
    fontSize: 16,
  },
  card: {
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
    color: '#333333',
  },
  approvedButton: {
    backgroundColor: '#4caf50',
    color: '#fff',
    borderRadius: 5,
  },
  pendingButton: {
    backgroundColor: '#ff9800',
    color: '#fff',
    borderRadius: 5,
  },
  noAppointments: {
    textAlign: 'center',
    fontSize: 18,
    color: '#888',
    marginTop: 20,
  },
});

// import React, { useState } from 'react';
// import { View, StyleSheet, FlatList, TextInput, Alert } from 'react-native';
// import { Card, Button, Avatar, Text } from 'react-native-paper';
// import * as FileSystem from 'expo-file-system';
// import * as DocumentPicker from 'expo-document-picker';

// const MyAppointments = () => {
//   const [appointments] = useState([
//     {
//       id: 1,
//       doctor_name: 'John Doe',
//       date: '2025-01-21',
//       hospital_name: 'City Hospital',
//       status: 'Approved',
//       report: null,
//     },
//     {
//       id: 2,
//       doctor_name: 'Jane Smith',
//       date: '2025-01-22',
//       hospital_name: 'Green Valley Clinic',
//       status: 'Approved',
//       report: null,
//     },
//     {
//       id: 3,
//       doctor_name: 'Emily Johnson',
//       date: '2025-01-23',
//       hospital_name: 'Sunrise Medical Center',
//       status: 'Processing...',
//       report: null,
//     },
//   ]);

//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredAppointments, setFilteredAppointments] = useState(appointments);

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     const filteredData = appointments.filter(
//       (appointment) =>
//         appointment.doctor_name.toLowerCase().includes(query.toLowerCase()) ||
//         appointment.hospital_name.toLowerCase().includes(query.toLowerCase()) ||
//         appointment.status.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredAppointments(filteredData);
//   };

//   const sortedAppointments = filteredAppointments.sort(
//     (a, b) => new Date(b.date) - new Date(a.date)
//   );

//   const handleUploadReport = async (appointment) => {
//     try {
//       const result = await DocumentPicker.getDocumentAsync({});
//       if (result.type === 'success') {
//         Alert.alert('Report Uploaded', `Uploaded: ${result.name}`);
//         appointment.report = result.uri; // Save the file URI in the appointment object
//       } else if (result.type === 'cancel') {
//         console.log('File selection canceled by the user.'); // Log for debugging
//         // No alert is shown for cancelation to avoid unnecessary popups
//       }
//     } catch (error) {
//       Alert.alert('Error', `Failed to upload report: ${error.message}`);
//     }
//   };
  

//   const handleSaveReport = (appointment) => {
//     const reportData = `Appointment ID: ${appointment.id}\nDoctor: ${appointment.doctor_name}\nHospital: ${appointment.hospital_name}\nDate: ${appointment.date}\nStatus: ${appointment.status}\nUploaded Report: ${
//       appointment.report ? appointment.report : 'No report uploaded'
//     }\n`;
//     const filePath = `${FileSystem.documentDirectory}appointment_${appointment.id}.txt`;

//     FileSystem.writeAsStringAsync(filePath, reportData)
//       .then(() => {
//         Alert.alert('Success', `Report saved to ${filePath}`);
//       })
//       .catch((error) => {
//         Alert.alert('Error', `Failed to save report: ${error.message}`);
//       });
//   };

// //   const renderAppointment = ({ item }) => (
// //     <Card mode="elevated" style={styles.card}>
// //       <Card.Title
// //         title={`Dr. ${item.doctor_name}`}
// //         subtitle={item.hospital_name}
// //         left={(props) => (
// //           <Avatar.Icon
// //             {...props}
// //             icon="account-circle"
// //             style={{ backgroundColor: '#00B4F6' }}
// //           />
// //         )}
// //       />
// //       <Card.Content>
// //         <Text variant="bodyMedium" style={styles.text}>
// //           Appointment ID: {item.id}
// //         </Text>
// //         <Text variant="bodyMedium" style={styles.text}>
// //           Date: {item.date}
// //         </Text>
// //         <Text variant="bodyMedium" style={styles.text}>
// //           Report: {item.report ? 'Uploaded' : 'Not Uploaded'}
// //         </Text>
// //       </Card.Content>
// //       <Card.Actions>
// //         <Button
// //           mode="contained-tonal"
// //           style={item.status === 'Approved' ? styles.approvedButton : styles.pendingButton}
// //         >
// //           {item.status}
// //         </Button>
// //         <Button
// //           mode="outlined"
// //           onPress={() => handleUploadReport(item)}
// //           style={styles.uploadButton}
// //         >
// //           Upload Report
// //         </Button>
// //         <Button
// //           mode="outlined"
// //           onPress={() => handleSaveReport(item)}
// //           style={styles.saveButton}
// //         >
// //           Save Report
// //         </Button>
// //       </Card.Actions>
// //     </Card>
// //   );


// const renderAppointment = ({ item }) => (
//     <Card mode="elevated" style={styles.card}>
//       <Card.Title
//         title={`Dr. ${item.doctor_name}`}
//         subtitle={item.hospital_name}
//         left={(props) => (
//           <Avatar.Icon
//             {...props}
//             icon="account-circle"
//             style={{ backgroundColor: '#00B4F6' }}
//           />
//         )}
//       />
//       <Card.Content>
//         <Text variant="bodyMedium" style={styles.text}>
//           Appointment ID: {item.id}
//         </Text>
//         <Text variant="bodyMedium" style={styles.text}>
//           Date: {item.date}
//         </Text>
//         <Text variant="bodyMedium" style={styles.text}>
//           Report: {item.report ? 'Uploaded' : 'Not Uploaded'}
//         </Text>
//       </Card.Content>
//       <Card.Actions>
//         {item.status === 'Approved' ? (
//           <>
//             <Button
//               mode="outlined"
//               onPress={() => handleUploadReport(item)}
//               style={styles.uploadButton}
//             >
//               Upload Report
//             </Button>
//             <Button
//               mode="outlined"
//               onPress={() => handleSaveReport(item)}
//               style={styles.saveButton}
//             >
//               Save Report
//             </Button>
//           </>
//         ) : (
//           <Button
//             mode="contained-tonal"
//             style={
//               item.status === 'Approved'
//                 ? styles.approvedButton
//                 : styles.pendingButton
//             }
//           >
//             {item.status}
//           </Button>
//         )}
//       </Card.Actions>
//     </Card>
//   );
  
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search by Doctor, Hospital, or Status"
//         value={searchQuery}
//         onChangeText={handleSearch}
//       />
//       {filteredAppointments.length === 0 ? (
//         <Text style={styles.noAppointments}>No appointments found.</Text>
//       ) : (
//         <FlatList
//           data={sortedAppointments}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderAppointment}
//         />
//       )}
//     </View>
//   );
// };

// export default MyAppointments;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   searchBar: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingLeft: 10,
//     marginBottom: 20,
//   },
//   card: {
//     marginVertical: 10,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 4,
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 5,
//     color: '#333',
//   },
//   approvedButton: {
//     backgroundColor: '#4caf50',
//     paddingHorizontal: 10,
//   },
//   pendingButton: {
//     backgroundColor: '#ff9800',
//     paddingHorizontal: 10,
//   },
//   uploadButton: {
//     marginLeft: 10,
//     borderColor: '#00bcd4',
//   },
//   saveButton: {
//     marginLeft: 10,
//     borderColor: '#6200ee',
//   },
//   noAppointments: {
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#888',
//     marginTop: 20,
//   },
// });


// import React, { useState } from 'react';
// import { View, StyleSheet, FlatList, TextInput, Alert } from 'react-native';
// import { Card, Button, Avatar, Text } from 'react-native-paper';
// import * as DocumentPicker from 'expo-document-picker';

// const MyAppointments = () => {
//   const [appointments, setAppointments] = useState([
//     {
//       id: 1,
//       doctor_name: 'John Doe',
//       date: '2025-01-21',
//       hospital_name: 'City Hospital',
//       status: 'Approved',
//       report: null,
//     },
//     {
//       id: 2,
//       doctor_name: 'Jane Smith',
//       date: '2025-01-22',
//       hospital_name: 'Green Valley Clinic',
//       status: 'Approved',
//       report: null,
//     },
//     {
//       id: 3,
//       doctor_name: 'Emily Johnson',
//       date: '2025-01-23',
//       hospital_name: 'Sunrise Medical Center',
//       status: 'Processing...',
//       report: null,
//     },
//   ]);

//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   const handleUploadToServer = async (fileUri, appointmentId) => {
//     try {
//       const formData = new FormData();
//       formData.append('file', {
//         uri: fileUri,
//         name: 'uploaded_file.pdf', 
//         type: 'application/pdf',
//       });
  
//       // Use your local server URL
//       const response = await fetch('http://127.0.0.1:8081/upload', {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
  
//       const result = await response.json();
//       if (result.success) {
//         // Update the state to reflect successful upload
//         const updatedAppointments = appointments.map((appointment) =>
//           appointment.id === appointmentId
//             ? { ...appointment, report: fileUri }
//             : appointment
//         );
//         setAppointments(updatedAppointments);
//         Alert.alert('Upload Successful', 'Your report has been uploaded.');
//       } else {
//         Alert.alert('Upload Failed', 'Something went wrong. Please try again.');
//       }
//     } catch (error) {
//       Alert.alert('Error', `Upload failed: ${error.message}`);
//     }
//   };
  
  

//   const sortedAppointments = appointments.sort(
//     (a, b) => new Date(b.date) - new Date(a.date)
//   );

//   const renderAppointment = ({ item }) => (
//     <Card mode="elevated" style={styles.card}>
//       <Card.Title
//         title={`Dr. ${item.doctor_name}`}
//         subtitle={item.hospital_name}
//         left={(props) => (
//           <Avatar.Icon
//             {...props}
//             icon="account-circle"
//             style={{ backgroundColor: '#00B4F6' }}
//           />
//         )}
//       />
//       <Card.Content>
//         <Text variant="bodyMedium" style={styles.text}>
//           Appointment ID: {item.id}
//         </Text>
//         <Text variant="bodyMedium" style={styles.text}>
//           Date: {item.date}
//         </Text>
//         <Text variant="bodyMedium" style={styles.text}>
//           Report: {item.report ? 'Uploaded' : 'Not Uploaded'}
//         </Text>
//       </Card.Content>
//       <Card.Actions>
//         {item.status === 'Approved' && (
//           <Button
//             mode="outlined"
//             onPress={() => handleUploadToServer(item.id)}
//             style={styles.uploadButton}
//           >
//             Upload Report
//           </Button>
//         )}
//       </Card.Actions>
//     </Card>
//   );

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search by Doctor, Hospital, or Status"
//         value={searchQuery}
//         onChangeText={handleSearch}
//       />
//       {sortedAppointments.length === 0 ? (
//         <Text style={styles.noAppointments}>No appointments found.</Text>
//       ) : (
//         <FlatList
//           data={sortedAppointments}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderAppointment}
//         />
//       )}
//     </View>
//   );
// };

// export default MyAppointments;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   searchBar: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingLeft: 10,
//     marginBottom: 20,
//   },
//   card: {
//     marginVertical: 10,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 4,
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 5,
//     color: '#333',
//   },
//   uploadButton: {
//     marginLeft: 10,
//     borderColor: '#00bcd4',
//   },
//   noAppointments: {
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#888',
//     marginTop: 20,
//   },
// });


// import React, { useState } from 'react';
// import { View, StyleSheet, FlatList, TextInput, Alert } from 'react-native';
// import { Card, Button, Avatar, Text } from 'react-native-paper';
// import * as DocumentPicker from 'expo-document-picker';

// const MyAppointments = () => {
//   const [appointments, setAppointments] = useState([
//     {
//       id: 1,
//       doctor_name: 'John Doe',
//       date: '2025-01-21',
//       hospital_name: 'City Hospital',
//       status: 'Approved',
//       report: null,
//     },
//     {
//       id: 2,
//       doctor_name: 'Jane Smith',
//       date: '2025-01-22',
//       hospital_name: 'Green Valley Clinic',
//       status: 'Approved',
//       report: null,
//     },
//     {
//       id: 3,
//       doctor_name: 'Emily Johnson',
//       date: '2025-01-23',
//       hospital_name: 'Sunrise Medical Center',
//       status: 'Processing...',
//       report: null,
//     },
//   ]);

//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   const handleUploadToServer = async (appointmentId) => {
//     try {
//       // Open Document Picker
//       const result = await DocumentPicker.getDocumentAsync({
//         type: ['image/*', 'application/pdf'], // Allow images and PDFs
//       });

//       if (result.type === 'cancel') {
//         Alert.alert('Upload Cancelled', 'No file was selected.');
//         return;
//       }

//       const fileUri = result.uri;
//       const fileName = result.name;
//       const fileType = result.mimeType;

//       const formData = new FormData();
//       formData.append('file', {
//         uri: fileUri,
//         name: fileName,
//         type: fileType,
//       });

//       // Replace with your local server URL
//       const response = await fetch('exp://192.168.55.105:8081/upload', {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       const resultData = await response.json();
//       if (resultData.success) {
//         // Update the state to reflect successful upload
//         const updatedAppointments = appointments.map((appointment) =>
//           appointment.id === appointmentId
//             ? { ...appointment, report: fileUri }
//             : appointment
//         );
//         setAppointments(updatedAppointments);
//         Alert.alert('Upload Successful', 'Your report has been uploaded.');
//       } else {
//         Alert.alert('Upload Failed', 'Something went wrong. Please try again.');
//       }
//     } catch (error) {
//       Alert.alert('Error', `Upload failed: ${error.message}`);
//     }
//   };

//   const sortedAppointments = appointments.sort(
//     (a, b) => new Date(b.date) - new Date(a.date)
//   );

//   const renderAppointment = ({ item }) => (
//     <Card mode="elevated" style={styles.card}>
//       <Card.Title
//         title={`Dr. ${item.doctor_name}`}
//         subtitle={item.hospital_name}
//         left={(props) => (
//           <Avatar.Icon
//             {...props}
//             icon="account-circle"
//             style={{ backgroundColor: '#00B4F6' }}
//           />
//         )}
//       />
//       <Card.Content>
//         <Text variant="bodyMedium" style={styles.text}>
//           Appointment ID: {item.id}
//         </Text>
//         <Text variant="bodyMedium" style={styles.text}>
//           Date: {item.date}
//         </Text>
//         <Text variant="bodyMedium" style={styles.text}>
//           Report: {item.report ? 'Uploaded' : 'Not Uploaded'}
//         </Text>
//       </Card.Content>
//       <Card.Actions>
//         {item.status === 'Approved' && (
//           <Button
//             mode="outlined"
//             onPress={() => handleUploadToServer(item.id)}
//             style={styles.uploadButton}
//           >
//             Upload Report
//           </Button>
//         )}
//       </Card.Actions>
//     </Card>
//   );

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search by Doctor, Hospital, or Status"
//         value={searchQuery}
//         onChangeText={handleSearch}
//       />
//       {sortedAppointments.length === 0 ? (
//         <Text style={styles.noAppointments}>No appointments found.</Text>
//       ) : (
//         <FlatList
//           data={sortedAppointments}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderAppointment}
//         />
//       )}
//     </View>
//   );
// };

// export default MyAppointments;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   searchBar: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingLeft: 10,
//     marginBottom: 20,
//   },
//   card: {
//     marginVertical: 10,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 4,
//   },
//   text: {
//     fontSize: 16,
//     marginBottom: 5,
//     color: '#333',
//   },
//   uploadButton: {
//     marginLeft: 10,
//     borderColor: '#00bcd4',
//   },
//   noAppointments: {
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#888',
//     marginTop: 20,
//   },
// });
