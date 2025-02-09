// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const ManageDoctors = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Manage Doctors</Text>
//       <Button title="Add Doctor" onPress={() => console.log('Add Doctor')} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   text: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
// });

// export default ManageDoctors;

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, FlatList, Alert, TouchableOpacity } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

// const ManageDoctors = () => {
//   const [doctorDetails, setDoctorDetails] = useState({
//     name: '',
//     education: '',
//     specialization: '',
//     registrationId: '',
//     experience: '',
//     workingArea: '',
//     city: '',
//     town: '',
//   });
//   const [doctors, setDoctors] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editDoctorId, setEditDoctorId] = useState(null);

//   // Handle input changes
//   const handleInputChange = (field, value) => {
//     setDoctorDetails({ ...doctorDetails, [field]: value });
//   };

//   // Add or Update Doctor
//   const handleAddOrUpdateDoctor = () => {
//     const { name, education, specialization, registrationId, experience, workingArea, city, town } = doctorDetails;

//     // Validate required fields
//     if (!name.trim() || !education.trim() || !specialization.trim() || !registrationId.trim()) {
//       Alert.alert('Validation Error', 'Please fill in all required fields.');
//       return;
//     }

//     if (isEditing) {
//       // Update existing doctor
//       setDoctors((prevDoctors) =>
//         prevDoctors.map((doctor) =>
//           doctor.id === editDoctorId ? { id: doctor.id, ...doctorDetails } : doctor
//         )
//       );
//       setIsEditing(false);
//       setEditDoctorId(null);
//     } else {
//       // Add new doctor
//       setDoctors([...doctors, { id: Math.random().toString(), ...doctorDetails }]);
//     }

//     setDoctorDetails({
//       name: '',
//       education: '',
//       specialization: '',
//       registrationId: '',
//       experience: '',
//       workingArea: '',
//       city: '',
//       town: '',
//     });
//   };

//   // Edit Doctor
//   const handleEditDoctor = (id) => {
//     const doctorToEdit = doctors.find((doctor) => doctor.id === id);
//     setDoctorDetails(doctorToEdit);
//     setIsEditing(true);
//     setEditDoctorId(id);
//   };

//   // Delete Doctor
//   const handleDeleteDoctor = (id) => {
//     setDoctors(doctors.filter((doctor) => doctor.id !== id));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Manage Doctors</Text>

//       {/* Input Section */}
//       <TextInput
//         style={styles.input}
//         placeholder="Name *"
//         value={doctorDetails.name}
//         onChangeText={(text) => handleInputChange('name', text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Education *"
//         value={doctorDetails.education}
//         onChangeText={(text) => handleInputChange('education', text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Specialization *"
//         value={doctorDetails.specialization}
//         onChangeText={(text) => handleInputChange('specialization', text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Registration ID *"
//         value={doctorDetails.registrationId}
//         onChangeText={(text) => handleInputChange('registrationId', text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Experience"
//         value={doctorDetails.experience}
//         onChangeText={(text) => handleInputChange('experience', text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Working Area"
//         value={doctorDetails.workingArea}
//         onChangeText={(text) => handleInputChange('workingArea', text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="City"
//         value={doctorDetails.city}
//         onChangeText={(text) => handleInputChange('city', text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Town"
//         value={doctorDetails.town}
//         onChangeText={(text) => handleInputChange('town', text)}
//       />

//       <TouchableOpacity style={styles.addButton} onPress={handleAddOrUpdateDoctor}>
//         <Text style={styles.addButtonText}>{isEditing ? 'Update Doctor' : 'Add Doctor'}</Text>
//       </TouchableOpacity>

//       {/* Doctor List */}
//       <FlatList
//         style={styles.list}
//         data={doctors}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.listItem}>
//             <View style={styles.listContent}>
//               <Text style={styles.listText}>Name: {item.name}</Text>
//               <Text style={styles.listText}>Education: {item.education}</Text>
//               <Text style={styles.listText}>Specialization: {item.specialization}</Text>
//               <Text style={styles.listText}>Registration ID: {item.registrationId}</Text>
//               <Text style={styles.listText}>Experience: {item.experience}</Text>
//               <Text style={styles.listText}>Working Area: {item.workingArea}</Text>
//               <Text style={styles.listText}>City: {item.city}</Text>
//               <Text style={styles.listText}>Town: {item.town}</Text>
//             </View>
//             <View style={styles.iconContainer}>
//               <TouchableOpacity onPress={() => handleEditDoctor(item.id)}>
//                 <MaterialIcons name="edit" size={24} color="#4CAF50" />
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => handleDeleteDoctor(item.id)}>
//                 <MaterialIcons name="delete" size={24} color="#F44336" />
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f8f9fa',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#333',
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 10,
//     paddingHorizontal: 15,
//     backgroundColor: '#fff',
//   },
//   addButton: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   list: {
//     marginTop: 20,
//   },
//   listItem: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 15,
//     marginBottom: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   listContent: {
//     flex: 1,
//   },
//   listText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: 70,
//   },
// });

// export default ManageDoctors;



// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, FlatList, Alert, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

// const ManageDoctors = () => {
//   const [doctorDetails, setDoctorDetails] = useState({
//     name: '',
//     education: '',
//     specialization: '',
//     registrationId: '',
//     experience: '',
//     workingArea: '',
//     city: '',
//     town: '',
//   });
//   const [doctors, setDoctors] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editDoctorId, setEditDoctorId] = useState(null);

//   // Handle input changes
//   const handleInputChange = (field, value) => {
//     setDoctorDetails({ ...doctorDetails, [field]: value });
//   };

//   // Add or Update Doctor
//   const handleAddOrUpdateDoctor = () => {
//     const { name, education, specialization, registrationId, experience, workingArea, city, town } = doctorDetails;

//     // Validate required fields
//     if (!name.trim() || !education.trim() || !specialization.trim() || !registrationId.trim()) {
//       Alert.alert('Validation Error', 'Please fill in all required fields.');
//       return;
//     }

//     if (isEditing) {
//       // Update existing doctor
//       setDoctors((prevDoctors) =>
//         prevDoctors.map((doctor) =>
//           doctor.id === editDoctorId ? { id: doctor.id, ...doctorDetails } : doctor
//         )
//       );
//       setIsEditing(false);
//       setEditDoctorId(null);
//     } else {
//       // Add new doctor
//       setDoctors([...doctors, { id: Math.random().toString(), ...doctorDetails }]);
//     }

//     setDoctorDetails({
//       name: '',
//       education: '',
//       specialization: '',
//       registrationId: '',
//       experience: '',
//       workingArea: '',
//       city: '',
//       town: '',
//     });
//   };

//   // Edit Doctor
//   const handleEditDoctor = (id) => {
//     const doctorToEdit = doctors.find((doctor) => doctor.id === id);
//     setDoctorDetails(doctorToEdit);
//     setIsEditing(true);
//     setEditDoctorId(id);
//   };

//   // Delete Doctor
//   const handleDeleteDoctor = (id) => {
//     setDoctors(doctors.filter((doctor) => doctor.id !== id));
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={{ flex: 1 }}
//     >
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.header}>Manage Doctors</Text>

//         {/* Input Section */}
//         <TextInput
//           style={styles.input}
//           placeholder="Name *"
//           value={doctorDetails.name}
//           onChangeText={(text) => handleInputChange('name', text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Education *"
//           value={doctorDetails.education}
//           onChangeText={(text) => handleInputChange('education', text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Specialization *"
//           value={doctorDetails.specialization}
//           onChangeText={(text) => handleInputChange('specialization', text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Registration ID *"
//           value={doctorDetails.registrationId}
//           onChangeText={(text) => handleInputChange('registrationId', text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Experience"
//           value={doctorDetails.experience}
//           onChangeText={(text) => handleInputChange('experience', text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Working Area"
//           value={doctorDetails.workingArea}
//           onChangeText={(text) => handleInputChange('workingArea', text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="City"
//           value={doctorDetails.city}
//           onChangeText={(text) => handleInputChange('city', text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Town"
//           value={doctorDetails.town}
//           onChangeText={(text) => handleInputChange('town', text)}
//         />

//         <TouchableOpacity style={styles.addButton} onPress={handleAddOrUpdateDoctor}>
//           <Text style={styles.addButtonText}>{isEditing ? 'Update Doctor' : 'Add Doctor'}</Text>
//         </TouchableOpacity>

//         {/* Doctor List */}
//         <FlatList
//           style={styles.list}
//           data={doctors}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.listItem}>
//               <View style={styles.listContent}>
//                 <Text style={styles.listText}>Name: {item.name}</Text>
//                 <Text style={styles.listText}>Education: {item.education}</Text>
//                 <Text style={styles.listText}>Specialization: {item.specialization}</Text>
//                 <Text style={styles.listText}>Registration ID: {item.registrationId}</Text>
//                 <Text style={styles.listText}>Experience: {item.experience}</Text>
//                 <Text style={styles.listText}>Working Area: {item.workingArea}</Text>
//                 <Text style={styles.listText}>City: {item.city}</Text>
//                 <Text style={styles.listText}>Town: {item.town}</Text>
//               </View>
//               <View style={styles.iconContainer}>
//                 <TouchableOpacity onPress={() => handleEditDoctor(item.id)}>
//                   <MaterialIcons name="edit" size={24} color="#4CAF50" />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => handleDeleteDoctor(item.id)}>
//                   <MaterialIcons name="delete" size={24} color="#F44336" />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
//         />
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#f8f9fa',
//     flexGrow: 1,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#333',
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 10,
//     paddingHorizontal: 15,
//     backgroundColor: '#fff',
//   },
//   addButton: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   list: {
//     marginTop: 20,
//   },
//   listItem: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 15,
//     marginBottom: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   listContent: {
//     flex: 1,
//   },
//   listText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: 70,
//   },
// });

// export default ManageDoctors;


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, FlatList, Alert, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Modal } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

// const ManageDoctors = () => {
//   const [activeTab, setActiveTab] = useState('add'); // State for active tab
//   const [doctorDetails, setDoctorDetails] = useState({
//     name: '',
//     education: '',
//     specialization: '',
//     registrationId: '',
//     experience: '',
//     workingArea: '',
//     city: '',
//     town: '',
//   });
//   const [doctors, setDoctors] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editDoctorId, setEditDoctorId] = useState(null);
//   const [deleteModalVisible, setDeleteModalVisible] = useState(false);
//   const [selectedDoctorId, setSelectedDoctorId] = useState(null);

//   const handleInputChange = (field, value) => {
//     setDoctorDetails({ ...doctorDetails, [field]: value });
//   };

//   const handleAddOrUpdateDoctor = () => {
//     const { name, education, specialization, registrationId, experience, workingArea, city, town } = doctorDetails;

//     if (!name.trim() || !education.trim() || !specialization.trim() || !registrationId.trim()) {
//       Alert.alert('Validation Error', 'Please fill in all required fields.');
//       return;
//     }

//     if (isEditing) {
//       setDoctors((prevDoctors) =>
//         prevDoctors.map((doctor) =>
//           doctor.id === editDoctorId ? { id: doctor.id, ...doctorDetails } : doctor
//         )
//       );
//       setIsEditing(false);
//       setEditDoctorId(null);
//     } else {
//       setDoctors([...doctors, { id: Math.random().toString(), ...doctorDetails }]);
//     }

//     setDoctorDetails({
//       name: '',
//       education: '',
//       specialization: '',
//       registrationId: '',
//       experience: '',
//       workingArea: '',
//       city: '',
//       town: '',
//     });
//     setActiveTab('view');
//   };

//   const handleEditDoctor = (id) => {
//     const doctorToEdit = doctors.find((doctor) => doctor.id === id);
//     setDoctorDetails(doctorToEdit);
//     setIsEditing(true);
//     setEditDoctorId(id);
//     setActiveTab('add');
//   };

//   const handleDeleteDoctor = () => {
//     setDoctors(doctors.filter((doctor) => doctor.id !== selectedDoctorId));
//     setDeleteModalVisible(false);
//     setSelectedDoctorId(null);
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={{ flex: 1 }}
//     >
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.header}></Text>

//         {/* Tabs */}
//         <View style={styles.tabs}>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'add' && styles.activeTab]}
//             onPress={() => setActiveTab('add')}
//           >
//             <Text style={[styles.tabText, activeTab === 'add' && styles.activeTabText]}>Add Doctor</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'view' && styles.activeTab]}
//             onPress={() => setActiveTab('view')}
//           >
//             <Text style={[styles.tabText, activeTab === 'view' && styles.activeTabText]}>View Doctors</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Add Doctor Form */}
//         {activeTab === 'add' && (
//           <View>
//             <TextInput
//               style={styles.input}
//               placeholder="Name *"
//               value={doctorDetails.name}
//               onChangeText={(text) => handleInputChange('name', text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Education *"
//               value={doctorDetails.education}
//               onChangeText={(text) => handleInputChange('education', text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Specialization *"
//               value={doctorDetails.specialization}
//               onChangeText={(text) => handleInputChange('specialization', text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Registration ID *"
//               value={doctorDetails.registrationId}
//               onChangeText={(text) => handleInputChange('registrationId', text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Experience"
//               value={doctorDetails.experience}
//               onChangeText={(text) => handleInputChange('experience', text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Working Area"
//               value={doctorDetails.workingArea}
//               onChangeText={(text) => handleInputChange('workingArea', text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="City"
//               value={doctorDetails.city}
//               onChangeText={(text) => handleInputChange('city', text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Town"
//               value={doctorDetails.town}
//               onChangeText={(text) => handleInputChange('town', text)}
//             />

//             <TouchableOpacity style={styles.addButton} onPress={handleAddOrUpdateDoctor}>
//               <Text style={styles.addButtonText}>{isEditing ? 'Update Doctor' : 'Add Doctor'}</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         {/* View Doctors */}
//         {activeTab === 'view' && (
//           <FlatList
//             style={styles.list}
//             data={doctors}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <View style={styles.listItem}>
//                 <View style={styles.listContent}>
//                   <Text style={styles.listText}>Name: {item.name}</Text>
//                   <Text style={styles.listText}>Education: {item.education}</Text>
//                   <Text style={styles.listText}>Specialization: {item.specialization}</Text>
//                   <Text style={styles.listText}>Registration ID: {item.registrationId}</Text>
//                 </View>
//                 <View style={styles.iconContainer}>
//                   <TouchableOpacity onPress={() => handleEditDoctor(item.id)}>
//                     <MaterialIcons name="edit" size={24} color="#4CAF50" />
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     onPress={() => {
//                       setSelectedDoctorId(item.id);
//                       setDeleteModalVisible(true);
//                     }}
//                   >
//                     <MaterialIcons name="delete" size={24} color="#F44336" />
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             )}
//           />
//         )}

//         {/* Delete Confirmation Modal */}
//         <Modal
//           visible={deleteModalVisible}
//           transparent
//           animationType="slide"
//           onRequestClose={() => setDeleteModalVisible(false)}
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalText}>Are you sure you want to delete this doctor?</Text>
//               <View style={styles.modalButtons}>
//                 <TouchableOpacity
//                   style={[styles.modalButton, styles.modalCancelButton]}
//                   onPress={() => setDeleteModalVisible(false)}
//                 >
//                   <Text style={styles.modalCancelText}>Cancel</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.modalButton, styles.modalDeleteButton]}
//                   onPress={handleDeleteDoctor}
//                 >
//                   <Text style={styles.modalDeleteText}>Delete</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </Modal>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   /* Same as above */
//   tabs: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     justifyContent: 'center',
//   },
//   tab: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     marginHorizontal: 5,
//   },
//   activeTab: {
//     backgroundColor: '#4CAF50',
//     borderColor: '#4CAF50',
//   },
//   tabText: {
//     color: '#333',
//     fontSize: 16,
//   },
//   activeTabText: {
//     color: '#fff',
//   },
//   /* Add modal styles */
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   modalText: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   modalButtons: {
//     flexDirection: 'row',
//   },
//   modalButton: {
//     padding: 10,
//     borderRadius: 8,
//     marginHorizontal: 10,
//   },
//   modalCancelButton: {
//     backgroundColor: '#ccc',
//   },
//   modalDeleteButton: {
//     backgroundColor: '#F44336',
//   },
//   modalCancelText: {
//     color: '#333',
//   },
//   modalDeleteText: {
//     color: '#fff',
//   },
// });

// export default ManageDoctors;

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, FlatList, Alert, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Modal } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

// const ManageDoctors = () => {
//   const [activeTab, setActiveTab] = useState('add'); // State for active tab
//   const [doctorDetails, setDoctorDetails] = useState({
//     name: '',
//     education: '',
//     specialization: '',
//     registrationId: '',
//     experience: '',
//     workingArea: '',
//     city: '',
//     town: '',
//   });
//   const [doctors, setDoctors] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editDoctorId, setEditDoctorId] = useState(null);
//   const [deleteModalVisible, setDeleteModalVisible] = useState(false);
//   const [selectedDoctorId, setSelectedDoctorId] = useState(null);

//   const handleInputChange = (field, value) => {
//     setDoctorDetails({ ...doctorDetails, [field]: value });
//   };

//   const handleAddOrUpdateDoctor = () => {
//     const { name, education, specialization, registrationId, experience, workingArea, city, town } = doctorDetails;

//     if (!name.trim() || !education.trim() || !specialization.trim() || !registrationId.trim()) {
//       Alert.alert('Validation Error', 'Please fill in all required fields.');
//       return;
//     }

//     if (isEditing) {
//       setDoctors((prevDoctors) =>
//         prevDoctors.map((doctor) =>
//           doctor.id === editDoctorId ? { id: doctor.id, ...doctorDetails } : doctor
//         )
//       );
//       setIsEditing(false);
//       setEditDoctorId(null);
//     } else {
//       setDoctors([...doctors, { id: Math.random().toString(), ...doctorDetails }]);
//     }

//     setDoctorDetails({
//       name: '',
//       education: '',
//       specialization: '',
//       registrationId: '',
//       experience: '',
//       workingArea: '',
//       city: '',
//       town: '',
//     });
//     setActiveTab('view');
//   };

//   const handleEditDoctor = (id) => {
//     const doctorToEdit = doctors.find((doctor) => doctor.id === id);
//     setDoctorDetails(doctorToEdit);
//     setIsEditing(true);
//     setEditDoctorId(id);
//     setActiveTab('add');
//   };

//   const handleDeleteDoctor = () => {
//     setDoctors(doctors.filter((doctor) => doctor.id !== selectedDoctorId));
//     setDeleteModalVisible(false);
//     setSelectedDoctorId(null);
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={{ flex: 1 }}
//     >
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.header}>Manage Doctors</Text>

//         {/* Tabs */}
//         <View style={styles.tabs}>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'add' && styles.activeTab]}
//             onPress={() => setActiveTab('add')}
//           >
//             <Text style={[styles.tabText, activeTab === 'add' && styles.activeTabText]}>Add Doctor</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'view' && styles.activeTab]}
//             onPress={() => setActiveTab('view')}
//           >
//             <Text style={[styles.tabText, activeTab === 'view' && styles.activeTabText]}>View Doctors</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Add Doctor Form */}
//         {activeTab === 'add' && (
//           <View style={styles.formContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Name *"
//               value={doctorDetails.name}
//               onChangeText={(text) => handleInputChange('name', text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Education *"
//               value={doctorDetails.education}
//               onChangeText={(text) => handleInputChange('education', text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Specialization *"
//               value={doctorDetails.specialization}
//               onChangeText={(text) => handleInputChange('specialization', text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Registration ID *"
//               value={doctorDetails.registrationId}
//               onChangeText={(text) => handleInputChange('registrationId', text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Experience"
//               value={doctorDetails.experience}
//               onChangeText={(text) => handleInputChange('experience', text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Working Area"
//               value={doctorDetails.workingArea}
//               onChangeText={(text) => handleInputChange('workingArea', text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="City"
//               value={doctorDetails.city}
//               onChangeText={(text) => handleInputChange('city', text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Town"
//               value={doctorDetails.town}
//               onChangeText={(text) => handleInputChange('town', text)}
//             />

//             <TouchableOpacity style={styles.addButton} onPress={handleAddOrUpdateDoctor}>
//               <Text style={styles.addButtonText}>{isEditing ? 'Update Doctor' : 'Add Doctor'}</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         {/* View Doctors */}
//         {activeTab === 'view' && (
//           <FlatList
//             style={styles.list}
//             data={doctors}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <View style={styles.listItem}>
//                 <View style={styles.listContent}>
//                   <Text style={styles.listText}>Name: {item.name}</Text>
//                   <Text style={styles.listText}>Education: {item.education}</Text>
//                   <Text style={styles.listText}>Specialization: {item.specialization}</Text>
//                   <Text style={styles.listText}>Registration ID: {item.registrationId}</Text>
//                 </View>
//                 <View style={styles.iconContainer}>
//                   <TouchableOpacity onPress={() => handleEditDoctor(item.id)}>
//                     <MaterialIcons name="edit" size={24} color="#4CAF50" />
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     onPress={() => {
//                       setSelectedDoctorId(item.id);
//                       setDeleteModalVisible(true);
//                     }}
//                   >
//                     <MaterialIcons name="delete" size={24} color="#F44336" />
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             )}
//           />
//         )}

//         {/* Delete Confirmation Modal */}
//         <Modal
//           visible={deleteModalVisible}
//           transparent
//           animationType="slide"
//           onRequestClose={() => setDeleteModalVisible(false)}
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalText}>Are you sure you want to delete this doctor?</Text>
//               <View style={styles.modalButtons}>
//                 <TouchableOpacity
//                   style={[styles.modalButton, styles.modalCancelButton]}
//                   onPress={() => setDeleteModalVisible(false)}
//                 >
//                   <Text style={styles.modalCancelText}>Cancel</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.modalButton, styles.modalDeleteButton]}
//                   onPress={handleDeleteDoctor}
//                 >
//                   <Text style={styles.modalDeleteText}>Delete</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </Modal>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 20,
//   },
//   tabs: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     justifyContent: 'center',
//   },
//   tab: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     marginHorizontal: 5,
//   },
//   activeTab: {
//     backgroundColor: '#4CAF50',
//     borderColor: '#4CAF50',
//   },
//   tabText: {
//     color: '#333',
//     fontSize: 16,
//   },
//   activeTabText: {
//     color: '#fff',
//   },
//   formContainer: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   input: {
//     height: 45,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//     fontSize: 16,
//   },
//   addButton: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   list: {
//     marginTop: 20,
//   },
//   listItem: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     marginBottom: 10,
//     padding: 15,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   listContent: {
//     flex: 1,
//   },
//   listText: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   iconContainer: {
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   modalText: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   modalButtons: {
//     flexDirection: 'row',
//   },
//   modalButton: {
//     padding: 10,
//     borderRadius: 8,
//     marginHorizontal: 10,
//   },
//   modalCancelButton: {
//     backgroundColor: '#ccc',
//   },
//   modalDeleteButton: {
//     backgroundColor: '#F44336',
//   },
//   modalCancelText: {
//     color: '#333',
//   },
//   modalDeleteText: {
//     color: '#fff',
//   },
// });

// export default ManageDoctors;



// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, FlatList, Alert, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Modal } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { MaterialIcons } from '@expo/vector-icons';

// const ManageDoctors = () => {
//   const [activeTab, setActiveTab] = useState('add');
//   const [doctorDetails, setDoctorDetails] = useState({
//     name: '',
//     education: '',
//     department: '',
//     registrationId: '',
//     experience: '',
//     hospital: '',
//     city: '',
//     town: '',
//   });
//   const [doctors, setDoctors] = useState([]);
//   const [departments, setDepartments] = useState([]); // Dynamic data for departments
//   const [hospitals, setHospitals] = useState([]); // Dynamic data for hospitals
//   const [isEditing, setIsEditing] = useState(false);
//   const [editDoctorId, setEditDoctorId] = useState(null);
//   const [deleteModalVisible, setDeleteModalVisible] = useState(false);
//   const [selectedDoctorId, setSelectedDoctorId] = useState(null);

//   useEffect(() => {
//     // Fetch dynamic dropdown options (Replace these with API calls if needed)
//     setDepartments(['Cardiology', 'Orthopedics', 'Neurology', 'Pediatrics']);
//     setHospitals(['City Hospital', 'Global Health', 'Green Valley Hospital']);
//   }, []);

//   const handleInputChange = (field, value) => {
//     setDoctorDetails({ ...doctorDetails, [field]: value });
//   };

//   const handleAddOrUpdateDoctor = () => {
//     const { name, education, department, registrationId, experience, hospital, city, town } = doctorDetails;

//     if (!name.trim() || !education.trim() || !department || !registrationId.trim() || !hospital) {
//       Alert.alert('Validation Error', 'Please fill in all required fields.');
//       return;
//     }

//     if (isEditing) {
//       setDoctors((prevDoctors) =>
//         prevDoctors.map((doctor) =>
//           doctor.id === editDoctorId ? { id: doctor.id, ...doctorDetails } : doctor
//         )
//       );
//       setIsEditing(false);
//       setEditDoctorId(null);
//     } else {
//       setDoctors([...doctors, { id: Math.random().toString(), ...doctorDetails }]);
//     }

//     setDoctorDetails({
//       name: '',
//       education: '',
//       department: '',
//       registrationId: '',
//       experience: '',
//       hospital: '',
//       city: '',
//       town: '',
//     });
//     setActiveTab('view');
//   };

//   const handleEditDoctor = (id) => {
//     const doctorToEdit = doctors.find((doctor) => doctor.id === id);
//     setDoctorDetails(doctorToEdit);
//     setIsEditing(true);
//     setEditDoctorId(id);
//     setActiveTab('add');
//   };

//   const handleDeleteDoctor = () => {
//     setDoctors(doctors.filter((doctor) => doctor.id !== selectedDoctorId));
//     setDeleteModalVisible(false);
//     setSelectedDoctorId(null);
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={{ flex: 1 }}
//     >
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.header}>Manage Doctors</Text>

//         {/* Tabs */}
//         <View style={styles.tabs}>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'add' && styles.activeTab]}
//             onPress={() => setActiveTab('add')}
//           >
//             <Text style={[styles.tabText, activeTab === 'add' && styles.activeTabText]}>Add Doctor</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'view' && styles.activeTab]}
//             onPress={() => setActiveTab('view')}
//           >
//             <Text style={[styles.tabText, activeTab === 'view' && styles.activeTabText]}>View Doctors</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Add Doctor Form */}
//         {activeTab === 'add' && (
//           <View style={styles.formContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Name *"
//               value={doctorDetails.name}
//               onChangeText={(text) => handleInputChange('name', text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Education *"
//               value={doctorDetails.education}
//               onChangeText={(text) => handleInputChange('education', text)}
//             />
//             <Picker
//               selectedValue={doctorDetails.department}
//               onValueChange={(value) => handleInputChange('department', value)}
//               style={styles.input}
//             >
//               <Picker.Item label="Select Department *" value="" />
//               {departments.map((dept, index) => (
//                 <Picker.Item key={index} label={dept} value={dept} />
//               ))}
//             </Picker>
//             <TextInput
//               style={styles.input}
//               placeholder="Registration ID *"
//               value={doctorDetails.registrationId}
//               onChangeText={(text) => handleInputChange('registrationId', text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Experience"
//               value={doctorDetails.experience}
//               onChangeText={(text) => handleInputChange('experience', text)}
//             />
//             <Picker
//               selectedValue={doctorDetails.hospital}
//               onValueChange={(value) => handleInputChange('hospital', value)}
//               style={styles.input}
//             >
//               <Picker.Item label="Select Working Hospital *" value="" />
//               {hospitals.map((hospital, index) => (
//                 <Picker.Item key={index} label={hospital} value={hospital} />
//               ))}
//             </Picker>
//             <TextInput
//               style={styles.input}
//               placeholder="City"
//               value={doctorDetails.city}
//               onChangeText={(text) => handleInputChange('city', text)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Town"
//               value={doctorDetails.town}
//               onChangeText={(text) => handleInputChange('town', text)}
//             />

//             <TouchableOpacity style={styles.addButton} onPress={handleAddOrUpdateDoctor}>
//               <Text style={styles.addButtonText}>{isEditing ? 'Update Doctor' : 'Add Doctor'}</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         {/* View Doctors */}
//         {activeTab === 'view' && (
//           <FlatList
//             style={styles.list}
//             data={doctors}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <View style={styles.listItem}>
//                 <View style={styles.listContent}>
//                   <Text style={styles.listText}>Name: {item.name}</Text>
//                   <Text style={styles.listText}>Education: {item.education}</Text>
//                   <Text style={styles.listText}>Department: {item.department}</Text>
//                   <Text style={styles.listText}>Hospital: {item.hospital}</Text>
//                   <Text style={styles.listText}>Registration ID: {item.registrationId}</Text>
//                 </View>
//                 <View style={styles.iconContainer}>
//                   <TouchableOpacity onPress={() => handleEditDoctor(item.id)}>
//                     <MaterialIcons name="edit" size={24} color="#4CAF50" />
//                   </TouchableOpacity>
//                   <TouchableOpacity
//                     onPress={() => {
//                       setSelectedDoctorId(item.id);
//                       setDeleteModalVisible(true);
//                     }}
//                   >
//                     <MaterialIcons name="delete" size={24} color="#F44336" />
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             )}
//           />
//         )}

//         {/* Delete Confirmation Modal */}
//         <Modal
//           visible={deleteModalVisible}
//           transparent
//           animationType="slide"
//           onRequestClose={() => setDeleteModalVisible(false)}
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalText}>Are you sure you want to delete this doctor?</Text>
//               <View style={styles.modalButtons}>
//                 <TouchableOpacity
//                   style={[styles.modalButton, styles.modalCancelButton]}
//                   onPress={() => setDeleteModalVisible(false)}
//                 >
//                   <Text style={styles.modalCancelText}>Cancel</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.modalButton, styles.modalDeleteButton]}
//                   onPress={handleDeleteDoctor}
//                 >
//                   <Text style={styles.modalDeleteText}>Delete</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </Modal>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Alert, TouchableOpacity, KeyboardAvoidingView, Platform, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';

const ManageDoctors = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [doctorDetails, setDoctorDetails] = useState({
    name: '',
    education: '',
    department: '',
    registrationId: '',
    experience: '',
    hospital: '',
    city: '',
    town: '',
  });
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]); // Dynamic data for departments
  const [hospitals, setHospitals] = useState([]); // Dynamic data for hospitals
  const [isEditing, setIsEditing] = useState(false);
  const [editDoctorId, setEditDoctorId] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);

  useEffect(() => {
    // Fetch dynamic dropdown options (Replace these with API calls if needed)
    setDepartments(['Cardiology', 'Orthopedics', 'Neurology', 'Pediatrics']);
    setHospitals(['City Hospital', 'Global Health', 'Green Valley Hospital']);
  }, []);

  const handleInputChange = (field, value) => {
    setDoctorDetails({ ...doctorDetails, [field]: value });
  };

  const handleAddOrUpdateDoctor = () => {
    const { name, education, department, registrationId, experience, hospital, city, town } = doctorDetails;

    if (!name.trim() || !education.trim() || !department || !registrationId.trim() || !hospital) {
      Alert.alert('Validation Error', 'Please fill in all required fields.');
      return;
    }

    if (isEditing) {
      setDoctors((prevDoctors) =>
        prevDoctors.map((doctor) =>
          doctor.id === editDoctorId ? { id: doctor.id, ...doctorDetails } : doctor
        )
      );
      setIsEditing(false);
      setEditDoctorId(null);
    } else {
      setDoctors([...doctors, { id: Math.random().toString(), ...doctorDetails }]);
    }

    setDoctorDetails({
      name: '',
      education: '',
      department: '',
      registrationId: '',
      experience: '',
      hospital: '',
      city: '',
      town: '',
    });
    setActiveTab('view');
  };

  const handleEditDoctor = (id) => {
    const doctorToEdit = doctors.find((doctor) => doctor.id === id);
    setDoctorDetails(doctorToEdit);
    setIsEditing(true);
    setEditDoctorId(id);
    setActiveTab('add');
  };

  const handleDeleteDoctor = () => {
    setDoctors(doctors.filter((doctor) => doctor.id !== selectedDoctorId));
    setDeleteModalVisible(false);
    setSelectedDoctorId(null);
  };

  // Create renderItem function for FlatList
  const renderDoctorItem = ({ item }) => (
    <View style={styles.listItem}>
      <View style={styles.listContent}>
        <Text style={styles.listText}>Name: {item.name}</Text>
        <Text style={styles.listText}>Education: {item.education}</Text>
        <Text style={styles.listText}>Department: {item.department}</Text>
        <Text style={styles.listText}>Hospital: {item.hospital}</Text>
        <Text style={styles.listText}>Registration ID: {item.registrationId}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => handleEditDoctor(item.id)}>
          <MaterialIcons name="edit" size={24} color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedDoctorId(item.id);
            setDeleteModalVisible(true);
          }}
        >
          <MaterialIcons name="delete" size={24} color="#F44336" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <FlatList
        contentContainerStyle={styles.container}
        ListHeaderComponent={() => (
          <>
            <Text style={styles.header}>Manage Doctors</Text>

            {/* Tabs */}
            <View style={styles.tabs}>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'add' && styles.activeTab]}
                onPress={() => setActiveTab('add')}
              >
                <Text style={[styles.tabText, activeTab === 'add' && styles.activeTabText]}>Add Doctor</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, activeTab === 'view' && styles.activeTab]}
                onPress={() => setActiveTab('view')}
              >
                <Text style={[styles.tabText, activeTab === 'view' && styles.activeTabText]}>View Doctors</Text>
              </TouchableOpacity>
            </View>

            {/* Add Doctor Form */}
            {activeTab === 'add' && (
              <View style={styles.formContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Name *"
                  value={doctorDetails.name}
                  onChangeText={(text) => handleInputChange('name', text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Education *"
                  value={doctorDetails.education}
                  onChangeText={(text) => handleInputChange('education', text)}
                />
                <Picker
                  selectedValue={doctorDetails.department}
                  onValueChange={(value) => handleInputChange('department', value)}
                  style={styles.input}
                >
                  <Picker.Item label="Select Department *" value="" />
                  {departments.map((dept, index) => (
                    <Picker.Item key={index} label={dept} value={dept} />
                  ))}
                </Picker>
                <TextInput
                  style={styles.input}
                  placeholder="Registration ID *"
                  value={doctorDetails.registrationId}
                  onChangeText={(text) => handleInputChange('registrationId', text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Experience"
                  value={doctorDetails.experience}
                  onChangeText={(text) => handleInputChange('experience', text)}
                />
                <Picker
                  selectedValue={doctorDetails.hospital}
                  onValueChange={(value) => handleInputChange('hospital', value)}
                  style={styles.input}
                >
                  <Picker.Item label="Select Working Hospital *" value="" />
                  {hospitals.map((hospital, index) => (
                    <Picker.Item key={index} label={hospital} value={hospital} />
                  ))}
                </Picker>
                <TextInput
                  style={styles.input}
                  placeholder="City"
                  value={doctorDetails.city}
                  onChangeText={(text) => handleInputChange('city', text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Town"
                  value={doctorDetails.town}
                  onChangeText={(text) => handleInputChange('town', text)}
                />

                <TouchableOpacity style={styles.addButton} onPress={handleAddOrUpdateDoctor}>
                  <Text style={styles.addButtonText}>{isEditing ? 'Update Doctor' : 'Add Doctor'}</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}
        data={doctors}
        renderItem={renderDoctorItem}
        keyExtractor={(item) => item.id}
      />

      {/* Delete Confirmation Modal */}
      <Modal
        visible={deleteModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setDeleteModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to delete this doctor?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalCancelButton]}
                onPress={() => setDeleteModalVisible(false)}
              >
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalDeleteButton]}
                onPress={handleDeleteDoctor}
              >
                <Text style={styles.modalDeleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};
// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  tabText: {
    color: '#333',
    fontSize: 16,
  },
  activeTabText: {
    color: '#fff',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  input: {
    height: 52,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  list: {
    marginTop: 20,
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  listContent: {
    flex: 1,
  },
  listText: {
    fontSize: 16,
    marginBottom: 5,
  },
  iconContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
  },
  modalButton: {
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  modalCancelButton: {
    backgroundColor: '#ccc',
  },
  modalDeleteButton: {
    backgroundColor: '#F44336',
  },
  modalCancelText: {
    color: '#333',
  },
  modalDeleteText: {
    color: '#fff',
  },
});

export default ManageDoctors;


// import React, { useState } from 'react';
// import { View, TextInput, FlatList, StyleSheet, Alert } from 'react-native';
// import { Text, Button, Icon } from 'react-native-elements';

// const ManageDoctors = ({ navigation }) => {
//   const [doctors, setDoctors] = useState([]);
//   const [form, setForm] = useState({
//     name: '',
//     education: '',
//     specialization: '',
//     registrationId: '',
//     experience: '',
//     workingArea: '',
//     city: '',
//     town: '',
//   });

//   const handleInputChange = (field, value) => {
//     setForm({ ...form, [field]: value });
//   };

//   const handleAddDoctor = () => {
//     if (Object.values(form).some(value => !value.trim())) {
//       Alert.alert('Error', 'Please fill all the fields.');
//       return;
//     }

//     setDoctors([...doctors, { ...form, id: Date.now() }]);
//     setForm({
//       name: '',
//       education: '',
//       specialization: '',
//       registrationId: '',
//       experience: '',
//       workingArea: '',
//       city: '',
//       town: '',
//     });
//   };

//   const handleDeleteDoctor = (id) => {
//     setDoctors(doctors.filter(doctor => doctor.id !== id));
//   };

//   const handleEditDoctor = (id) => {
//     const doctor = doctors.find(doctor => doctor.id === id);
//     setForm(doctor);
//     setDoctors(doctors.filter(doctor => doctor.id !== id));
//   };

//   return (
//     <View style={styles.container}>
//       <Text h3 style={styles.title}>Manage Doctors</Text>
//       <View style={styles.form}>
//         {['name', 'education', 'specialization', 'registrationId', 'experience', 'workingArea', 'city', 'town'].map(field => (
//           <TextInput
//             key={field}
//             style={styles.input}
//             placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//             value={form[field]}
//             onChangeText={(value) => handleInputChange(field, value)}
//           />
//         ))}
//         <Button
//           title="Add Doctor"
//           buttonStyle={styles.addButton}
//           onPress={handleAddDoctor}
//         />
//       </View>
//       <FlatList
//         data={doctors}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.listItem}>
//             <Text style={styles.listText}>{item.name} ({item.specialization})</Text>
//             <View style={styles.icons}>
//               <Icon
//                 name="edit"
//                 type="font-awesome"
//                 color="#2196F3"
//                 onPress={() => handleEditDoctor(item.id)}
//               />
//               <Icon
//                 name="trash"
//                 type="font-awesome"
//                 color="#F44336"
//                 onPress={() => handleDeleteDoctor(item.id)}
//               />
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F5F5F5',
//   },
//   title: {
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   form: {
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#DDD',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//     backgroundColor: '#FFF',
//   },
//   addButton: {
//     backgroundColor: '#4CAF50',
//   },
//   listItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 15,
//     backgroundColor: '#FFF',
//     borderRadius: 5,
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#DDD',
//   },
//   listText: {
//     fontSize: 16,
//   },
//   icons: {
//     flexDirection: 'row',
//     gap: 15,
//   },
// });

// export default ManageDoctors;
