// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { getHospitals, addHospital, deleteHospital } from '../../utils/api'; // Mock API functions

// const ManageHospital = () => {
//   const [hospitals, setHospitals] = useState([]);
//   const [newHospital, setNewHospital] = useState({ name: '', location: '' });

//   useEffect(() => {
//     fetchHospitals();
//   }, []);

//   const fetchHospitals = async () => {
//     const data = await getHospitals();
//     setHospitals(data);
//   };

//   const handleAddHospital = async () => {
//     if (newHospital.name && newHospital.location) {
//       await addHospital(newHospital);
//       fetchHospitals();
//       setNewHospital({ name: '', location: '' });
//     } else {
//       alert('Please fill all fields!');
//     }
//   };

//   const handleDeleteHospital = async (id) => {
//     await deleteHospital(id);
//     fetchHospitals();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Manage Hospitals</Text>
//       <View style={styles.form}>
//         <TextInput
//           style={styles.input}
//           placeholder="Hospital Name"
//           value={newHospital.name}
//           onChangeText={(text) => setNewHospital({ ...newHospital, name: text })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Location"
//           value={newHospital.location}
//           onChangeText={(text) => setNewHospital({ ...newHospital, location: text })}
//         />
//         <Button title="Add Hospital" onPress={handleAddHospital} />
//       </View>
//       <FlatList
//         data={hospitals}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.hospitalCard}>
//             <Text>{item.name}</Text>
//             <Text>{item.location}</Text>
//             <TouchableOpacity onPress={() => handleDeleteHospital(item.id)} style={styles.deleteButton}>
//               <Text style={styles.deleteText}>Delete</Text>
//             </TouchableOpacity>
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
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   form: {
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   hospitalCard: {
//     padding: 15,
//     backgroundColor: '#f9f9f9',
//     marginBottom: 10,
//     borderRadius: 5,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   deleteButton: {
//     backgroundColor: 'red',
//     padding: 5,
//     borderRadius: 5,
//   },
//   deleteText: {
//     color: '#fff',
//   },
// });

// export default ManageHospital;

// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { getHospitals, addHospital, deleteHospital } from '../../utils/api'; // Mock API functions

// const ManageHospital = () => {
//   const [hospitals, setHospitals] = useState([]);
//   const [newHospital, setNewHospital] = useState({
//     name: '',
//     address: '',
//     location: '',
//     mobile: '',
//     alternateMobile: '',
//   });

//   useEffect(() => {
//     fetchHospitals();
//   }, []);

//   const fetchHospitals = async () => {
//     const data = await getHospitals();
//     setHospitals(data);
//   };

//   const handleAddHospital = async () => {
//     const { name, address, location, mobile, alternateMobile } = newHospital;
//     if (name && address && location && mobile && alternateMobile) {
//       await addHospital(newHospital);
//       fetchHospitals();
//       setNewHospital({ name: '', address: '', location: '', mobile: '', alternateMobile: '' });
//     } else {
//       alert('Please fill all fields!');
//     }
//   };

//   const handleDeleteHospital = async (id) => {
//     await deleteHospital(id);
//     fetchHospitals();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Manage Hospitals</Text>
//       <ScrollView>
//         <View style={styles.form}>
//           <TextInput
//             style={styles.input}
//             placeholder="Hospital Name"
//             value={newHospital.name}
//             onChangeText={(text) => setNewHospital({ ...newHospital, name: text })}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Address"
//             value={newHospital.address}
//             onChangeText={(text) => setNewHospital({ ...newHospital, address: text })}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Location"
//             value={newHospital.location}
//             onChangeText={(text) => setNewHospital({ ...newHospital, location: text })}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Mobile Number"
//             keyboardType="numeric"
//             value={newHospital.mobile}
//             onChangeText={(text) => setNewHospital({ ...newHospital, mobile: text })}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Alternate Mobile Number"
//             keyboardType="numeric"
//             value={newHospital.alternateMobile}
//             onChangeText={(text) => setNewHospital({ ...newHospital, alternateMobile: text })}
//           />
//           <Button title="Add Hospital" onPress={handleAddHospital} />
//         </View>
//       </ScrollView>
//       <FlatList
//         data={hospitals}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.hospitalCard}>
//             <View>
//               <Text style={styles.hospitalName}>{item.name}</Text>
//               <Text>Address: {item.address}</Text>
//               <Text>Location: {item.location}</Text>
//               <Text>Mobile: {item.mobile}</Text>
//               <Text>Alternate Mobile: {item.alternateMobile}</Text>
//             </View>
//             <TouchableOpacity onPress={() => handleDeleteHospital(item.id)} style={styles.deleteButton}>
//               <Text style={styles.deleteText}>Delete</Text>
//             </TouchableOpacity>
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
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   form: {
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   hospitalCard: {
//     padding: 15,
//     backgroundColor: '#f9f9f9',
//     marginBottom: 10,
//     borderRadius: 5,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   hospitalName: {
//     fontWeight: 'bold',
//   },
//   deleteButton: {
//     backgroundColor: 'red',
//     padding: 5,
//     borderRadius: 5,
//   },
//   deleteText: {
//     color: '#fff',
//   },
// });

// export default ManageHospital;

// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { getHospitals, addHospital, deleteHospital } from '../../utils/api'; // Mock API functions

// const ManageHospital = () => {
//   const [hospitals, setHospitals] = useState([]);
//   const [newHospital, setNewHospital] = useState({
//     name: '',
//     address: '',
//     location: '',
//     mobile: '',
//     alternateMobile: '',
//   });

//   useEffect(() => {
//     fetchHospitals();
//   }, []);

//   const fetchHospitals = async () => {
//     try {
//       const data = await getHospitals();
//       setHospitals(data);
//     } catch (error) {
//       console.error('Failed to fetch hospitals:', error);
//     }
//   };

//   const handleAddHospital = async () => {
//     const { name, address, location, mobile, alternateMobile } = newHospital;
//     if (name && address && location && mobile && alternateMobile) {
//       try {
//         await addHospital(newHospital);
//         fetchHospitals();
//         setNewHospital({ name: '', address: '', location: '', mobile: '', alternateMobile: '' });
//       } catch (error) {
//         console.error('Failed to add hospital:', error);
//       }
//     } else {
//       alert('Please fill all fields!');
//     }
//   };

//   const handleDeleteHospital = async (id) => {
//     try {
//       await deleteHospital(id);
//       fetchHospitals();
//     } catch (error) {
//       console.error('Failed to delete hospital:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Manage Hospitals</Text>
//       <ScrollView>
//         <View style={styles.form}>
//           <TextInput
//             style={styles.input}
//             placeholder="Hospital Name"
//             value={newHospital.name}
//             onChangeText={(text) => setNewHospital({ ...newHospital, name: text })}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Address"
//             value={newHospital.address}
//             onChangeText={(text) => setNewHospital({ ...newHospital, address: text })}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Location"
//             value={newHospital.location}
//             onChangeText={(text) => setNewHospital({ ...newHospital, location: text })}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Mobile Number"
//             keyboardType="numeric"
//             value={newHospital.mobile}
//             onChangeText={(text) => setNewHospital({ ...newHospital, mobile: text })}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Alternate Mobile Number"
//             keyboardType="numeric"
//             value={newHospital.alternateMobile}
//             onChangeText={(text) => setNewHospital({ ...newHospital, alternateMobile: text })}
//           />
//           <Button title="Add Hospital" onPress={handleAddHospital} />
//         </View>
//       </ScrollView>
//       <FlatList
//         data={hospitals}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.hospitalCard}>
//             <View>
//               <Text style={styles.hospitalName}>{item.name}</Text>
//               <Text>Address: {item.address}</Text>
//               <Text>Location: {item.location}</Text>
//               <Text>Mobile: {item.mobile}</Text>
//               <Text>Alternate Mobile: {item.alternateMobile}</Text>
//             </View>
//             <TouchableOpacity onPress={() => handleDeleteHospital(item.id)} style={styles.deleteButton}>
//               <Text style={styles.deleteText}>Delete</Text>
//             </TouchableOpacity>
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
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   form: {
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   hospitalCard: {
//     padding: 15,
//     backgroundColor: '#f9f9f9',
//     marginBottom: 10,
//     borderRadius: 5,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   hospitalName: {
//     fontWeight: 'bold',
//   },
//   deleteButton: {
//     backgroundColor: 'red',
//     padding: 5,
//     borderRadius: 5,
//   },
//   deleteText: {
//     color: '#fff',
//   },
// });

// // export default ManageHospital;

// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { getHospitals, addHospital, deleteHospital, updateHospital } from '../../utils/api'; // Mock API functions

// const ManageHospital = () => {
//   const [hospitals, setHospitals] = useState([]);
//   const [newHospital, setNewHospital] = useState({
//     id: null, // For edit functionality
//     name: '',
//     address: '',
//     location: '',
//     mobile: '',
//     alternateMobile: '',
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     fetchHospitals();
//   }, []);

//   const fetchHospitals = async () => {
//     try {
//       const data = await getHospitals();
//       setHospitals(data);
//     } catch (error) {
//       console.error('Failed to fetch hospitals:', error);
//     }
//   };

//   const handleAddOrUpdateHospital = async () => {
//     const { id, name, address, location, mobile, alternateMobile } = newHospital;
//     if (name && address && location && mobile && alternateMobile) {
//       try {
//         if (isEditing) {
//           // Update the hospital
//           await updateHospital(id, newHospital);
//           alert('Hospital updated successfully!');
//         } else {
//           // Add a new hospital
//           await addHospital(newHospital);
//           alert('Hospital added successfully!');
//         }
//         fetchHospitals();
//         resetForm();
//       } catch (error) {
//         console.error('Failed to add/update hospital:', error);
//       }
//     } else {
//       alert('Please fill all fields!');
//     }
//   };

//   const handleEditHospital = (hospital) => {
//     setNewHospital(hospital);
//     setIsEditing(true);
//   };

//   const handleDeleteHospital = async (id) => {
//     try {
//       await deleteHospital(id);
//       fetchHospitals();
//     } catch (error) {
//       console.error('Failed to delete hospital:', error);
//     }
//   };

//   const resetForm = () => {
//     setNewHospital({ id: null, name: '', address: '', location: '', mobile: '', alternateMobile: '' });
//     setIsEditing(false);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>{isEditing ? 'Edit Hospital' : 'Add Hospital'}</Text>
//       <ScrollView>
//         <View style={styles.form}>
//           <TextInput
//             style={styles.input}
//             placeholder="Hospital Name"
//             value={newHospital.name}
//             onChangeText={(text) => setNewHospital({ ...newHospital, name: text })}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Address"
//             value={newHospital.address}
//             onChangeText={(text) => setNewHospital({ ...newHospital, address: text })}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Location"
//             value={newHospital.location}
//             onChangeText={(text) => setNewHospital({ ...newHospital, location: text })}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Mobile Number"
//             keyboardType="numeric"
//             value={newHospital.mobile}
//             onChangeText={(text) => setNewHospital({ ...newHospital, mobile: text })}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Alternate Mobile Number"
//             keyboardType="numeric"
//             value={newHospital.alternateMobile}
//             onChangeText={(text) => setNewHospital({ ...newHospital, alternateMobile: text })}
//           />
//           <Button
//             title={isEditing ? 'Update Hospital' : 'Add Hospital'}
//             onPress={handleAddOrUpdateHospital}
//           />
//           {isEditing && (
//             <Button title="Cancel" onPress={resetForm} color="gray"  />
//           )}
//         </View>
//       </ScrollView>
//       <FlatList
//         data={hospitals}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.hospitalCard}>
//             <View>
//               <Text style={styles.hospitalName}>{item.name}</Text>
//               <Text>Address: {item.address}</Text>
//               <Text>Location: {item.location}</Text>
//               <Text>Mobile: {item.mobile}</Text>
//               <Text>Alternate Mobile: {item.alternateMobile}</Text>
//             </View>
//             <View style={styles.actions}>
//               <TouchableOpacity onPress={() => handleEditHospital(item)} style={styles.editButton}>
//                 <Text style={styles.editText}>Edit</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => handleDeleteHospital(item.id)} style={styles.deleteButton}>
//                 <Text style={styles.deleteText}>Delete</Text>
//               </TouchableOpacity>
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
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   form: {
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   hospitalCard: {
//     padding: 15,
//     backgroundColor: '#f9f9f9',
//     marginBottom: 10,
//     borderRadius: 5,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   hospitalName: {
//     fontWeight: 'bold',
//   },
//   actions: {
//     flexDirection: 'row',
//     gap: 10,
//   },
//   editButton: {
//     backgroundColor: 'blue',
//     padding: 5,
//     borderRadius: 5,
//   },
//   editText: {
//     color: '#fff',
//   },
//   deleteButton: {
//     backgroundColor: 'red',
//     padding: 5,
//     borderRadius: 5,
//   },
//   deleteText: {
//     color: '#fff',
//   },
// });

// export default ManageHospital;

// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import { getHospitals, addHospital, deleteHospital, updateHospital } from '../../utils/api'; // Mock API functions

// const ManageHospital = () => {
//   const [hospitals, setHospitals] = useState([]);
//   const [newHospital, setNewHospital] = useState({
//     id: null,
//     name: '',
//     address: '',
//     location: '',
//     mobile: '',
//     alternateMobile: '',
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [activeTab, setActiveTab] = useState('List'); // Tabs: 'List' or 'Add'

//   useEffect(() => {
//     fetchHospitals();
//   }, []);

//   const fetchHospitals = async () => {
//     try {
//       const data = await getHospitals();
//       setHospitals(data);
//     } catch (error) {
//       console.error('Failed to fetch hospitals:', error);
//     }
//   };

//   const handleAddOrUpdateHospital = async () => {
//     const { id, name, address, location, mobile, alternateMobile } = newHospital;
//     if (name && address && location && mobile && alternateMobile) {
//       try {
//         if (isEditing) {
//           await updateHospital(id, newHospital);
//           alert('Hospital updated successfully!');
//         } else {
//           await addHospital(newHospital);
//           alert('Hospital added successfully!');
//         }
//         fetchHospitals();
//         resetForm();
//       } catch (error) {
//         console.error('Failed to add/update hospital:', error);
//       }
//     } else {
//       alert('Please fill all fields!');
//     }
//   };

//   const handleEditHospital = (hospital) => {
//     setNewHospital(hospital);
//     setIsEditing(true);
//     setActiveTab('Add');
//   };

//   const handleDeleteHospital = async (id) => {
//     try {
//       await deleteHospital(id);
//       fetchHospitals();
//     } catch (error) {
//       console.error('Failed to delete hospital:', error);
//     }
//   };

//   const resetForm = () => {
//     setNewHospital({ id: null, name: '', address: '', location: '', mobile: '', alternateMobile: '' });
//     setIsEditing(false);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Tab Navigation */}
//       <View style={styles.tabs}>
//         <TouchableOpacity
//           style={[styles.tab, activeTab === 'List' && styles.activeTab]}
//           onPress={() => setActiveTab('List')}
//         >
//           <Text style={styles.tabText}>Hospital List</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.tab, activeTab === 'Add' && styles.activeTab]}
//           onPress={() => setActiveTab('Add')}
//         >
//           <Text style={styles.tabText}>{isEditing ? 'Edit Hospital' : 'Add Hospital'}</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Content Area */}
//       {activeTab === 'List' ? (
//         <FlatList
//           data={hospitals}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.hospitalCard}>
//               <View>
//                 <Text style={styles.hospitalName}>{item.name}</Text>
//                 <Text>Address: {item.address}</Text>
//                 <Text>Location: {item.location}</Text>
//                 <Text>Mobile: {item.mobile}</Text>
//                 <Text>Alternate Mobile: {item.alternateMobile}</Text>
//               </View>
//               <View style={styles.actions}>
//                 <TouchableOpacity onPress={() => handleEditHospital(item)} style={styles.editButton}>
//                   <Text style={styles.editText}>Edit</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => handleDeleteHospital(item.id)} style={styles.deleteButton}>
//                   <Text style={styles.deleteText}>Delete</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
//         />
//       ) : (
//         <ScrollView style={styles.form}>
//           <TextInput
//             style={styles.input}
//             placeholder="Hospital Name"
//             value={newHospital.name}
//             onChangeText={(text) => setNewHospital({ ...newHospital, name: text })}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Address"
//             value={newHospital.address}
//             onChangeText={(text) => setNewHospital({ ...newHospital, address: text })}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Location"
//             value={newHospital.location}
//             onChangeText={(text) => setNewHospital({ ...newHospital, location: text })}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Mobile Number"
//             keyboardType="numeric"
//             value={newHospital.mobile}
//             onChangeText={(text) => setNewHospital({ ...newHospital, mobile: text })}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Alternate Mobile Number"
//             keyboardType="numeric"
//             value={newHospital.alternateMobile}
//             onChangeText={(text) => setNewHospital({ ...newHospital, alternateMobile: text })}
//           />
//           <Button
//             title={isEditing ? 'Update Hospital' : 'Add Hospital'}
//             onPress={handleAddOrUpdateHospital}
//           />
//           {isEditing && <Button title="Cancel" onPress={resetForm} color="gray" />}
//         </ScrollView>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   tabs: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   tab: {
//     flex: 1,
//     padding: 10,
//     alignItems: 'center',
//     borderBottomWidth: 2,
//     borderColor: 'transparent',
//   },
//   activeTab: {
//     borderColor: 'blue',
//   },
//   tabText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   hospitalCard: {
//     padding: 15,
//     backgroundColor: '#f9f9f9',
//     marginBottom: 10,
//     borderRadius: 5,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   hospitalName: {
//     fontWeight: 'bold',
//   },
//   actions: {
//     flexDirection: 'row',
//     gap: 10,
//   },
//   editButton: {
//     backgroundColor: 'blue',
//     padding: 5,
//     borderRadius: 5,
//   },
//   editText: {
//     color: '#fff',
//   },
//   deleteButton: {
//     backgroundColor: 'red',
//     padding: 5,
//     borderRadius: 5,
//   },
//   deleteText: {
//     color: '#fff',
//   },
//   form: {
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
// });

// export default ManageHospital;
// const ManageHospitals = () => {
//   const [activeTab, setActiveTab] = useState("add");
//   const [hospitalDetails, setHospitalDetails] = useState({
//     name: "",
//     location: "",
//     contactNumber: "",
//     specialty: "",
//     state: "",
//     district: "",
//   });
//   const [hospitals, setHospitals] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editHospitalId, setEditHospitalId] = useState(null);
//   const [deleteModalVisible, setDeleteModalVisible] = useState(false);
//   const [selectedHospitalId, setSelectedHospitalId] = useState(null);

//   const states = [
//     {
//       name: "State 1",
//       districts: ["District 1-1", "District 1-2", "District 1-3"],
//     },
//     {
//       name: "State 2",
//       districts: ["District 2-1", "District 2-2", "District 2-3"],
//     },
//     {
//       name: "State 3",
//       districts: ["District 3-1", "District 3-2", "District 3-3"],
//     },
//   ];

//   const handleInputChange = (field, value) => {
//     setHospitalDetails({ ...hospitalDetails, [field]: value });

//     if (field === "state") {
//       setHospitalDetails({
//         ...hospitalDetails,
//         state: value,
//         district: "", // Reset district when state changes
//       });
//     }
//   };

//   const handleAddOrUpdateHospital = () => {
//     const { name, location, contactNumber, state, district } = hospitalDetails;

//     if (!name.trim() || !location.trim() || !contactNumber.trim() || !state || !district) {
//       Alert.alert("Validation Error", "Please fill in all required fields.");
//       return;
//     }

//     if (isEditing) {
//       setHospitals((prevHospitals) =>
//         prevHospitals.map((hospital) =>
//           hospital.id === editHospitalId
//             ? { id: hospital.id, ...hospitalDetails }
//             : hospital
//         )
//       );
//       setIsEditing(false);
//       setEditHospitalId(null);
//     } else {
//       setHospitals([
//         ...hospitals,
//         { id: Math.random().toString(), ...hospitalDetails },
//       ]);
//     }

//     setHospitalDetails({
//       name: "",
//       location: "",
//       contactNumber: "",
//       specialty: "",
//       state: "",
//       district: "",
//     });
//     setActiveTab("view");
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1 }}
//     >
//       <FlatList
//         contentContainerStyle={styles.container}
//         data={[1]} // dummy data to make FlatList render
//         renderItem={() => (
//           <>
//             <Text style={styles.header}>Manage Hospitals</Text>

//             {/* Tabs */}
//             <View style={styles.tabs}>
//               <TouchableOpacity
//                 style={[styles.tab, activeTab === "add" && styles.activeTab]}
//                 onPress={() => setActiveTab("add")}
//               >
//                 <Text
//                   style={[
//                     styles.tabText,
//                     activeTab === "add" && styles.activeTabText,
//                   ]}
//                 >
//                   {isEditing ? "Edit Hospital" : "Add Hospital"}
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[styles.tab, activeTab === "view" && styles.activeTab]}
//                 onPress={() => setActiveTab("view")}
//               >
//                 <Text
//                   style={[
//                     styles.tabText,
//                     activeTab === "view" && styles.activeTabText,
//                   ]}
//                 >
//                   View Hospitals
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             {/* Add Hospital Form */}
//             {activeTab === "add" && (
//               <View style={styles.formContainer}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Hospital Name *"
//                   value={hospitalDetails.name}
//                   onChangeText={(text) => handleInputChange("name", text)}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Location *"
//                   value={hospitalDetails.location}
//                   onChangeText={(text) => handleInputChange("location", text)}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Contact Number *"
//                   value={hospitalDetails.contactNumber}
//                   onChangeText={(text) => handleInputChange("contactNumber", text)}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Specialty"
//                   value={hospitalDetails.specialty}
//                   onChangeText={(text) => handleInputChange("specialty", text)}
//                 />
//                 {/* State Dropdown */}
//                 <Picker
//                   selectedValue={hospitalDetails.state}
//                   style={styles.input}
//                   onValueChange={(value) => handleInputChange("state", value)}
//                 >
//                   <Picker.Item label="Select State *" value="" />
//                   {states.map((state) => (
//                     <Picker.Item key={state.name} label={state.name} value={state.name} />
//                   ))}
//                 </Picker>

//                 {/* District Dropdown */}
//                 <Picker
//                   selectedValue={hospitalDetails.district}
//                   style={styles.input}
//                   enabled={!!hospitalDetails.state} // Disable if no state selected
//                   onValueChange={(value) => handleInputChange("district", value)}
//                 >
//                   <Picker.Item label="Select District *" value="" />
//                   {states
//                     .find((state) => state.name === hospitalDetails.state)
//                     ?.districts.map((district) => (
//                       <Picker.Item key={district} label={district} value={district} />
//                     ))}
//                 </Picker>

//                 <TouchableOpacity
//                   style={styles.addButton}
//                   onPress={handleAddOrUpdateHospital}
//                 >
//                   <Text style={styles.addButtonText}>
//                     {isEditing ? "Update Hospital" : "Add Hospital"}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             )}

//             {/* Rest of your code remains unchanged */}
//           </>
//         )}
//       />
//     </KeyboardAvoidingView>
//   );
// };

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   FlatList,
//   Alert,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
//   Modal,
   
// } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";
// import { Picker } from '@react-native-picker/picker';

// const ManageHospitals = () => {
//   const [activeTab, setActiveTab] = useState("add");
//   const [hospitalDetails, setHospitalDetails] = useState({
//     name: "",
//     location: "",
//     contactNumber: "",
//     specialty: "",
//     stateId: "",
//     districtId: "",
//   });
//   const [hospitals, setHospitals] = useState([]);
//   const [states, setStates] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editHospitalId, setEditHospitalId] = useState(null);
//   const [deleteModalVisible, setDeleteModalVisible] = useState(false);
//   const [selectedHospitalId, setSelectedHospitalId] = useState(null);

//   // Fetch states
//   useEffect(() => {
//     fetchStates();
//   }, []);

//   const fetchStates = async () => {
//     try {
//       const response = await fetch("https://example.com/api/states");
//       const data = await response.json();
//       setStates(data); // Assuming the API returns an array of states
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch states.");
//     }
//   };

//   const fetchDistricts = async (stateId) => {
//     try {
//       const response = await fetch(
//         `https://example.com/api/districts?stateId=${stateId}`
//       );
//       const data = await response.json();
//       setDistricts(data); // Assuming the API returns an array of districts
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch districts.");
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setHospitalDetails({ ...hospitalDetails, [field]: value });

//     if (field === "stateId") {
//       fetchDistricts(value); // Fetch districts when state is selected
//       setHospitalDetails({ ...hospitalDetails, districtId: "" }); // Reset district
//     }
//   };

//   const handleAddOrUpdateHospital = () => {
//     const { name, location, contactNumber, specialty, stateId, districtId } =
//       hospitalDetails;

//     if (
//       !name.trim() ||
//       !location.trim() ||
//       !contactNumber.trim() ||
//       !stateId ||
//       !districtId
//     ) {
//       Alert.alert("Validation Error", "Please fill in all required fields.");
//       return;
//     }

//     if (isEditing) {
//       setHospitals((prevHospitals) =>
//         prevHospitals.map((hospital) =>
//           hospital.id === editHospitalId
//             ? { id: hospital.id, ...hospitalDetails }
//             : hospital
//         )
//       );
//       setIsEditing(false);
//       setEditHospitalId(null);
//     } else {
//       setHospitals([
//         ...hospitals,
//         { id: Math.random().toString(), ...hospitalDetails },
//       ]);
//     }

//     setHospitalDetails({
//       name: "",
//       location: "",
//       contactNumber: "",
//       specialty: "",
//       stateId: "",
//       districtId: "",
//     });
//     setActiveTab("view");
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1 }}
//     >
//       <FlatList
//         contentContainerStyle={styles.container}
//         data={[1]} // Dummy data to make FlatList render
//         renderItem={() => (
//           <>
//             <Text style={styles.header}>Manage Hospitals</Text>

//             {/* Tabs */}
//             <View style={styles.tabs}>
//               <TouchableOpacity
//                 style={[styles.tab, activeTab === "add" && styles.activeTab]}
//                 onPress={() => setActiveTab("add")}
//               >
//                 <Text
//                   style={[
//                     styles.tabText,
//                     activeTab === "add" && styles.activeTabText,
//                   ]}
//                 >
//                   {isEditing ? "Edit Hospital" : "Add Hospital"}
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[styles.tab, activeTab === "view" && styles.activeTab]}
//                 onPress={() => setActiveTab("view")}
//               >
//                 <Text
//                   style={[
//                     styles.tabText,
//                     activeTab === "view" && styles.activeTabText,
//                   ]}
//                 >
//                   View Hospitals
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             {/* Add Hospital Form */}
//             {activeTab === "add" && (
//               <View style={styles.formContainer}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Hospital Name *"
//                   value={hospitalDetails.name}
//                   onChangeText={(text) => handleInputChange("name", text)}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Location *"
//                   value={hospitalDetails.location}
//                   onChangeText={(text) => handleInputChange("location", text)}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Contact Number *"
//                   value={hospitalDetails.contactNumber}
//                   onChangeText={(text) => handleInputChange("contactNumber", text)}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Specialty"
//                   value={hospitalDetails.specialty}
//                   onChangeText={(text) => handleInputChange("specialty", text)}
//                 />

//                 {/* State Dropdown */}
//                 <Picker
//                   selectedValue={hospitalDetails.stateId}
//                   style={styles.input}
//                   onValueChange={(value) =>
//                     handleInputChange("stateId", value)
//                   }
//                 >
//                   <Picker.Item label="Select State" value="" />
//                   {states.map((state) => (
//                     <Picker.Item
//                       key={state.id}
//                       label={state.name}
//                       value={state.id}
//                     />
//                   ))}
//                 </Picker>

//                 {/* District Dropdown */}
//                 <Picker
//                   selectedValue={hospitalDetails.districtId}
//                   style={styles.input}
//                   onValueChange={(value) =>
//                     handleInputChange("districtId", value)
//                   }
//                 >
//                   <Picker.Item label="Select District" value="" />
//                   {districts.map((district) => (
//                     <Picker.Item
//                       key={district.id}
//                       label={district.name}
//                       value={district.id}
//                     />
//                   ))}
//                 </Picker>

//                 <TouchableOpacity
//                   style={styles.addButton}
//                   onPress={handleAddOrUpdateHospital}
//                 >
//                   <Text style={styles.addButtonText}>
//                     {isEditing ? "Update Hospital" : "Add Hospital"}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           </>
//         )}
//       />
//     </KeyboardAvoidingView>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: "#f5f5f5",
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 20,
//   },
//   tabs: {
//     flexDirection: "row",
//     marginBottom: 20,
//     justifyContent: "center",
//   },
//   tab: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     marginHorizontal: 5,
//   },
//   activeTab: {
//     backgroundColor: "#4CAF50",
//     borderColor: "#4CAF50",
//   },
//   tabText: {
//     color: "#333",
//     fontSize: 16,
//   },
//   activeTabText: {
//     color: "#fff",
//   },
//   formContainer: {
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   input: {
//     height: 52,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//     fontSize: 16,
//   },
//   addButton: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   addButtonText: {
//     color: "#fff",
//     fontSize: 18,
//   },
//   list: {
//     marginTop: 20,
//   },
//   listItem: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     marginBottom: 10,
//     padding: 15,
//     borderRadius: 8,
//     shadowColor: "#000",
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
//     justifyContent: "space-around",
//     alignItems: "center",
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modalContent: {
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 8,
//     width: "80%",
//     alignItems: "center",
//   },
//   modalText: {
//     fontSize: 18,
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   modalButtons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//   },
//   modalButton: {
//     flex: 1,
//     paddingVertical: 10,
//     borderRadius: 8,
//     alignItems: "center",
//     marginHorizontal: 5,
//   },
//   modalCancelButton: {
//     backgroundColor: "#ccc",
//   },
//   modalDeleteButton: {
//     backgroundColor: "#F44336",
//   },
//   modalCancelText: {
//     color: "#333",
//     fontSize: 16,
//   },
//   modalDeleteText: {
//     color: "#fff",
//     fontSize: 16,
//   },
// });

// export default ManageHospitals;

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   FlatList,
//   Alert,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
// } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// // import * as ImagePicker from "expo-image-picker";
// import * as ImagePicker from "react-native-image-picker";
// const ManageHospitals = () => {
//   const [activeTab, setActiveTab] = useState("add");
//   const [hospitalDetails, setHospitalDetails] = useState({
//     name: "",
//     location: "",
//     contactNumber: "",
//     specialty: "",
//     stateId: "",
//     districtId: "",
//     image: null, // Added for storing the selected image
//   });
//   const [hospitals, setHospitals] = useState([]);
//   const [states, setStates] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editHospitalId, setEditHospitalId] = useState(null);

//   // Fetch states on component mount
//   useEffect(() => {
//     fetchStates();
//   }, []);

//   const fetchStates = async () => {
//     try {
//       const response = await fetch("https://example.com/api/states");
//       const data = await response.json();
//       setStates(data);
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch states.");
//     }
//   };

//   const fetchDistricts = async (stateId) => {
//     try {
//       const response = await fetch(
//         `https://example.com/api/districts?stateId=${stateId}`
//       );
//       const data = await response.json();
//       setDistricts(data);
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch districts.");
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setHospitalDetails({ ...hospitalDetails, [field]: value });

//     if (field === "stateId") {
//       fetchDistricts(value); // Fetch districts dynamically
//       setHospitalDetails({ ...hospitalDetails, districtId: "" }); // Reset district
//     }
//   };

//   const handleImagePick = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setHospitalDetails({ ...hospitalDetails, image: result.uri });
//     }
//   };

//   const handleAddOrUpdateHospital = () => {
//     const { name, location, contactNumber, specialty, stateId, districtId, image } =
//       hospitalDetails;

//     if (!name.trim() || !location.trim() || !contactNumber.trim() || !stateId || !districtId || !image) {
//       Alert.alert("Validation Error", "Please fill in all required fields.");
//       return;
//     }

//     if (isEditing) {
//       setHospitals((prevHospitals) =>
//         prevHospitals.map((hospital) =>
//           hospital.id === editHospitalId
//             ? { id: hospital.id, ...hospitalDetails }
//             : hospital
//         )
//       );
//       setIsEditing(false);
//       setEditHospitalId(null);
//     } else {
//       setHospitals([
//         ...hospitals,
//         { id: Math.random().toString(), ...hospitalDetails },
//       ]);
//     }

//     setHospitalDetails({
//       name: "",
//       location: "",
//       contactNumber: "",
//       specialty: "",
//       stateId: "",
//       districtId: "",
//       image: null,
//     });
//     setActiveTab("view");
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1 }}
//     >
//       <FlatList
//         contentContainerStyle={styles.container}
//         data={[1]}
//         renderItem={() => (
//           <>
//             <Text style={styles.header}>Manage Hospitals</Text>

//             {/* Tabs */}
//             <View style={styles.tabs}>
//               <TouchableOpacity
//                 style={[styles.tab, activeTab === "add" && styles.activeTab]}
//                 onPress={() => setActiveTab("add")}
//               >
//                 <Text
//                   style={[
//                     styles.tabText,
//                     activeTab === "add" && styles.activeTabText,
//                   ]}
//                 >
//                   {isEditing ? "Edit Hospital" : "Add Hospital"}
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[styles.tab, activeTab === "view" && styles.activeTab]}
//                 onPress={() => setActiveTab("view")}
//               >
//                 <Text
//                   style={[
//                     styles.tabText,
//                     activeTab === "view" && styles.activeTabText,
//                   ]}
//                 >
//                   View Hospitals
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             {/* Add Hospital Form */}
//             {activeTab === "add" && (
//               <View style={styles.formContainer}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Hospital Name *"
//                   value={hospitalDetails.name}
//                   onChangeText={(text) => handleInputChange("name", text)}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Location *"
//                   value={hospitalDetails.location}
//                   onChangeText={(text) => handleInputChange("location", text)}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Contact Number *"
//                   value={hospitalDetails.contactNumber}
//                   onChangeText={(text) =>
//                     handleInputChange("contactNumber", text)
//                   }
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Specialty"
//                   value={hospitalDetails.specialty}
//                   onChangeText={(text) => handleInputChange("specialty", text)}
//                 />

//                 {/* State Dropdown */}
//                 <Picker
//                   selectedValue={hospitalDetails.stateId}
//                   style={styles.input}
//                   onValueChange={(value) =>
//                     handleInputChange("stateId", value)
//                   }
//                 >
//                   <Picker.Item label="Select State" value="" />
//                   {states.map((state) => (
//                     <Picker.Item
//                       key={state.id}
//                       label={state.name}
//                       value={state.id}
//                     />
//                   ))}
//                 </Picker>

//                 {/* District Dropdown */}
//                 <Picker
//                   selectedValue={hospitalDetails.districtId}
//                   style={styles.input}
//                   onValueChange={(value) =>
//                     handleInputChange("districtId", value)
//                   }
//                 >
//                   <Picker.Item label="Select District" value="" />
//                   {districts.map((district) => (
//                     <Picker.Item
//                       key={district.id}
//                       label={district.name}
//                       value={district.id}
//                     />
//                   ))}
//                 </Picker>

//                 {/* Image Picker */}
//                 <TouchableOpacity
//                   style={styles.imagePicker}
//                   onPress={handleImagePick}
//                 >
//                   <Text style={styles.imagePickerText}>
//                     {hospitalDetails.image
//                       ? "Change Image"
//                       : "Select Hospital Image"}
//                   </Text>
//                 </TouchableOpacity>

//                 {hospitalDetails.image && (
//                   <Image
//                     source={{ uri: hospitalDetails.image }}
//                     style={styles.imagePreview}
//                   />
//                 )}

//                 <TouchableOpacity
//                   style={styles.addButton}
//                   onPress={handleAddOrUpdateHospital}
//                 >
//                   <Text style={styles.addButtonText}>
//                     {isEditing ? "Update Hospital" : "Add Hospital"}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           </>
//         )}
//       />
//     </KeyboardAvoidingView>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: "#f5f5f5",
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 20,
//   },
//   tabs: {
//     flexDirection: "row",
//     marginBottom: 20,
//     justifyContent: "center",
//   },
//   tab: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     marginHorizontal: 5,
//   },
//   activeTab: {
//     backgroundColor: "#4CAF50",
//     borderColor: "#4CAF50",
//   },
//   tabText: {
//     color: "#333",
//     fontSize: 16,
//   },
//   activeTabText: {
//     color: "#fff",
//   },
//   formContainer: {
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   input: {
//     height: 52,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//     fontSize: 16,
//   },
//   imagePicker: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   imagePickerText: {
//     color: "#fff",
//     fontSize: 18,
//   },
//   imagePreview: {
//     width: "100%",
//     height: 200,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   addButton: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   addButtonText: {
//     color: "#fff",
//     fontSize: 18,
//   },
// });

// export default ManageHospitals;

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   FlatList,
//   Alert,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
// } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import { launchImageLibrary } from "react-native-image-picker";

// const ManageHospitals = () => {
//   const [activeTab, setActiveTab] = useState("add");
//   const [hospitalDetails, setHospitalDetails] = useState({
//     name: "",
//     location: "",
//     contactNumber: "",
//     specialty: "",
//     stateId: "",
//     districtId: "",
//     image: null, // Added for storing the selected image
//   });
//   const [hospitals, setHospitals] = useState([]);
//   const [states, setStates] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editHospitalId, setEditHospitalId] = useState(null);

//   // Request permission for image picker (if needed)
//   useEffect(() => {
//     fetchStates();
//   }, []);

//   const fetchStates = async () => {
//     try {
//       const response = await fetch("https://example.com/api/states");
//       const data = await response.json();
//       setStates(data);
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch states.");
//     }
//   };

//   const fetchDistricts = async (stateId) => {
//     try {
//       const response = await fetch(
//         `https://example.com/api/districts?stateId=${stateId}`
//       );
//       const data = await response.json();
//       setDistricts(data);
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch districts.");
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setHospitalDetails({ ...hospitalDetails, [field]: value });

//     if (field === "stateId") {
//       fetchDistricts(value); // Fetch districts dynamically
//       setHospitalDetails({ ...hospitalDetails, districtId: "" }); // Reset district
//     }
//   };

//   const handleImagePick = () => {
//     // Using react-native-image-picker to launch the image picker
//     launchImageLibrary(
//       {
//         mediaType: 'photo',
//         includeBase64: false, // Set to true if you need base64 encoded image
//         quality: 1,
//       },
//       (response) => {
//         if (response.didCancel) {
//           console.log('User cancelled image picker');
//         } else if (response.errorCode) {
//           console.log('ImagePicker Error: ', response.errorMessage);
//         } else {
//           // Successfully picked an image
//           setHospitalDetails({ ...hospitalDetails, image: response.uri });
//         }
//       }
//     );
//   };

//   const handleAddOrUpdateHospital = () => {
//     const { name, location, contactNumber, specialty, stateId, districtId, image } =
//       hospitalDetails;

//     if (!name.trim() || !location.trim() || !contactNumber.trim() || !stateId || !districtId || !image) {
//       Alert.alert("Validation Error", "Please fill in all required fields.");
//       return;
//     }

//     if (isEditing) {
//       setHospitals((prevHospitals) =>
//         prevHospitals.map((hospital) =>
//           hospital.id === editHospitalId
//             ? { id: hospital.id, ...hospitalDetails }
//             : hospital
//         )
//       );
//       setIsEditing(false);
//       setEditHospitalId(null);
//     } else {
//       setHospitals([
//         ...hospitals,
//         { id: Math.random().toString(), ...hospitalDetails },
//       ]);
//     }

//     setHospitalDetails({
//       name: "",
//       location: "",
//       contactNumber: "",
//       specialty: "",
//       stateId: "",
//       districtId: "",
//       image: null,
//     });
//     setActiveTab("view");
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1 }}
//     >
//       <FlatList
//         contentContainerStyle={styles.container}
//         data={[1]}
//         renderItem={() => (
//           <>
//             <Text style={styles.header}>Manage Hospitals</Text>

//             {/* Tabs */}
//             <View style={styles.tabs}>
//               <TouchableOpacity
//                 style={[styles.tab, activeTab === "add" && styles.activeTab]}
//                 onPress={() => setActiveTab("add")}
//               >
//                 <Text
//                   style={[
//                     styles.tabText,
//                     activeTab === "add" && styles.activeTabText,
//                   ]}
//                 >
//                   {isEditing ? "Edit Hospital" : "Add Hospital"}
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[styles.tab, activeTab === "view" && styles.activeTab]}
//                 onPress={() => setActiveTab("view")}
//               >
//                 <Text
//                   style={[
//                     styles.tabText,
//                     activeTab === "view" && styles.activeTabText,
//                   ]}
//                 >
//                   View Hospitals
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             {/* Add Hospital Form */}
//             {activeTab === "add" && (
//               <View style={styles.formContainer}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Hospital Name *"
//                   value={hospitalDetails.name}
//                   onChangeText={(text) => handleInputChange("name", text)}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Location *"
//                   value={hospitalDetails.location}
//                   onChangeText={(text) => handleInputChange("location", text)}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Contact Number *"
//                   value={hospitalDetails.contactNumber}
//                   onChangeText={(text) =>
//                     handleInputChange("contactNumber", text)
//                   }
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Specialty"
//                   value={hospitalDetails.specialty}
//                   onChangeText={(text) => handleInputChange("specialty", text)}
//                 />

//                 {/* State Dropdown */}
//                 <Picker
//                   selectedValue={hospitalDetails.stateId}
//                   style={styles.input}
//                   onValueChange={(value) =>
//                     handleInputChange("stateId", value)
//                   }
//                 >
//                   <Picker.Item label="Select State" value="" />
//                   {states.map((state) => (
//                     <Picker.Item
//                       key={state.id}
//                       label={state.name}
//                       value={state.id}
//                     />
//                   ))}
//                 </Picker>

//                 {/* District Dropdown */}
//                 <Picker
//                   selectedValue={hospitalDetails.districtId}
//                   style={styles.input}
//                   onValueChange={(value) =>
//                     handleInputChange("districtId", value)
//                   }
//                 >
//                   <Picker.Item label="Select District" value="" />
//                   {districts.map((district) => (
//                     <Picker.Item
//                       key={district.id}
//                       label={district.name}
//                       value={district.id}
//                     />
//                   ))}
//                 </Picker>

//                 {/* Image Picker */}
//                 <TouchableOpacity
//                   style={styles.imagePicker}
//                   onPress={handleImagePick}
//                 >
//                   <Text style={styles.imagePickerText}>
//                     {hospitalDetails.image
//                       ? "Change Image"
//                       : "Select Hospital Image"}
//                   </Text>
//                 </TouchableOpacity>

//                 {hospitalDetails.image && (
//                   <Image
//                     source={{ uri: hospitalDetails.image }}
//                     style={styles.imagePreview}
//                   />
//                 )}

//                 <TouchableOpacity
//                   style={styles.addButton}
//                   onPress={handleAddOrUpdateHospital}
//                 >
//                   <Text style={styles.addButtonText}>
//                     {isEditing ? "Update Hospital" : "Add Hospital"}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           </>
//         )}
//       />
//     </KeyboardAvoidingView>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: "#f5f5f5",
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 20,
//   },
//   tabs: {
//     flexDirection: "row",
//     marginBottom: 20,
//     justifyContent: "center",
//   },
//   tab: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     marginHorizontal: 5,
//   },
//   activeTab: {
//     backgroundColor: "#4CAF50",
//     borderColor: "#4CAF50",
//   },
//   tabText: {
//     color: "#333",
//     fontSize: 16,
//   },
//   activeTabText: {
//     color: "#fff",
//   },
//   formContainer: {
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   input: {
//     height: 52,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//     fontSize: 16,
//   },
//   imagePicker: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   imagePickerText: {
//     color: "#fff",
//     fontSize: 18,
//   },
//   imagePreview: {
//     width: "100%",
//     height: 200,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   addButton: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   addButtonText: {
//     color: "#fff",
//     fontSize: 18,
//   },
// });

// export default ManageHospitals;



// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   FlatList,
//   Alert,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
// } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import * as ImagePicker from "expo-image-picker";

// const ManageHospitals = () => {
//   const [activeTab, setActiveTab] = useState("add");
//   const [hospitalDetails, setHospitalDetails] = useState({
//     name: "",
//     location: "",
//     contactNumber: "",
//     specialty: "",
//     stateId: "",
//     districtId: "",
//     image: null, // Added for storing the selected image
//   });
//   const [hospitals, setHospitals] = useState([]);
//   const [states, setStates] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editHospitalId, setEditHospitalId] = useState(null);

//   // Request permission to access media library
//   useEffect(() => {
//     const getPermissions = async () => {
//       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (status !== "granted") {
//         Alert.alert("Permission Denied", "We need permission to access your media library to select an image.");
//       }
//     };

//     getPermissions();
//     fetchStates();
//   }, []);

//   const fetchStates = async () => {
//     try {
//       const response = await fetch("https://example.com/api/states");
//       const data = await response.json();
//       setStates(data);
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch states.");
//     }
//   };

//   const fetchDistricts = async (stateId) => {
//     try {
//       const response = await fetch(
//         `https://example.com/api/districts?stateId=${stateId}`
//       );
//       const data = await response.json();
//       setDistricts(data);
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch districts.");
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setHospitalDetails({ ...hospitalDetails, [field]: value });

//     if (field === "stateId") {
//       fetchDistricts(value); // Fetch districts dynamically
//       setHospitalDetails({ ...hospitalDetails, districtId: "" }); // Reset district
//     }
//   };

 
//   // const handleImagePick = async () => {
//   //   const result = await ImagePicker.launchImageLibraryAsync({
//   //     mediaTypes: ImagePicker.MediaTypeOptions.Images, // Revert to MediaTypeOptions.Images for compatibility
//   //     allowsEditing: true,
//   //     quality: 1,
//   //   });
  
//   //   if (!result.canceled) {
//   //     setHospitalDetails({ ...hospitalDetails, image: result.uri });
//   //   }
//   // };
//   const handleImagePick = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images, // To select images only
//       allowsEditing: true,
//       quality: 1,
//     });
  
//     if (result.canceled) {
//       // Handle the case where the user cancels the image picker
//       console.log("Image selection was canceled");
//     } else {
//       // Safely accessing the image URI from the result
//       if (result.assets && result.assets[0]?.uri) {
//         // Update state with the selected image URI
//         setHospitalDetails({ ...hospitalDetails, image: result.assets[0].uri });
//         console.log("Image selected:", result.assets[0].uri);  // Log the selected image URI
//       } else {
//         console.log("Image URI not found");
//       }
//     }
//   };
  
  
    

//   const handleAddOrUpdateHospital = () => {
//     const { name, location, contactNumber, specialty, stateId, districtId, image } =
//       hospitalDetails;

//     if (!name.trim() || !location.trim() || !contactNumber.trim() || !stateId || !districtId || !image) {
//       Alert.alert("Validation Error", "Please fill in all required fields.");
//       return;
//     }

//     if (isEditing) {
//       setHospitals((prevHospitals) =>
//         prevHospitals.map((hospital) =>
//           hospital.id === editHospitalId
//             ? { id: hospital.id, ...hospitalDetails }
//             : hospital
//         )
//       );
//       setIsEditing(false);
//       setEditHospitalId(null);
//     } else {
//       setHospitals([
//         ...hospitals,
//         { id: Math.random().toString(), ...hospitalDetails },
//       ]);
//     }

//     setHospitalDetails({
//       name: "",
//       location: "",
//       contactNumber: "",
//       specialty: "",
//       stateId: "",
//       districtId: "",
//       image: null,
//     });
//     setActiveTab("view");
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1 }}
//     >
//       <FlatList
//         contentContainerStyle={styles.container}
//         data={[1]}
//         renderItem={() => (
//           <>
//             <Text style={styles.header}>Manage Hospitals</Text>

//             {/* Tabs */}
//             <View style={styles.tabs}>
//               <TouchableOpacity
//                 style={[styles.tab, activeTab === "add" && styles.activeTab]}
//                 onPress={() => setActiveTab("add")}
//               >
//                 <Text
//                   style={[
//                     styles.tabText,
//                     activeTab === "add" && styles.activeTabText,
//                   ]}
//                 >
//                   {isEditing ? "Edit Hospital" : "Add Hospital"}
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[styles.tab, activeTab === "view" && styles.activeTab]}
//                 onPress={() => setActiveTab("view")}
//               >
//                 <Text
//                   style={[
//                     styles.tabText,
//                     activeTab === "view" && styles.activeTabText,
//                   ]}
//                 >
//                   View Hospitals
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             {/* Add Hospital Form */}
//             {activeTab === "add" && (
//               <View style={styles.formContainer}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Hospital Name *"
//                   value={hospitalDetails.name}
//                   onChangeText={(text) => handleInputChange("name", text)}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Location *"
//                   value={hospitalDetails.location}
//                   onChangeText={(text) => handleInputChange("location", text)}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Contact Number *"
//                   value={hospitalDetails.contactNumber}
//                   onChangeText={(text) =>
//                     handleInputChange("contactNumber", text)
//                   }
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Specialty"
//                   value={hospitalDetails.specialty}
//                   onChangeText={(text) => handleInputChange("specialty", text)}
//                 />

//                 {/* State Dropdown */}
//                 <Picker
//                   selectedValue={hospitalDetails.stateId}
//                   style={styles.input}
//                   onValueChange={(value) =>
//                     handleInputChange("stateId", value)
//                   }
//                 >
//                   <Picker.Item label="Select State" value="" />
//                   {states.map((state) => (
//                     <Picker.Item
//                       key={state.id}
//                       label={state.name}
//                       value={state.id}
//                     />
//                   ))}
//                 </Picker>

//                 {/* District Dropdown */}
//                 <Picker
//                   selectedValue={hospitalDetails.districtId}
//                   style={styles.input}
//                   onValueChange={(value) =>
//                     handleInputChange("districtId", value)
//                   }
//                 >
//                   <Picker.Item label="Select District" value="" />
//                   {districts.map((district) => (
//                     <Picker.Item
//                       key={district.id}
//                       label={district.name}
//                       value={district.id}
//                     />
//                   ))}
//                 </Picker>

//                 {/* Image Picker */}
//                 <TouchableOpacity
//                   style={styles.imagePicker}
//                   onPress={handleImagePick}
//                 >
//                   <Text style={styles.imagePickerText}>
//                     {hospitalDetails.image
//                       ? "Change Image"
//                       : "Select Hospital Image"}
//                   </Text>
//                 </TouchableOpacity>

//                 {hospitalDetails.image && (
//                   <Image
//                     source={{ uri: hospitalDetails.image }}
//                     style={styles.imagePreview}
//                   />
//                 )}

//                 <TouchableOpacity
//                   style={styles.addButton}
//                   onPress={handleAddOrUpdateHospital}
//                 >
//                   <Text style={styles.addButtonText}>
//                     {isEditing ? "Update Hospital" : "Add Hospital"}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           </>
//         )}
//       />
//     </KeyboardAvoidingView>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: "#f5f5f5",
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 20,
//   },
//   tabs: {
//     flexDirection: "row",
//     marginBottom: 20,
//     justifyContent: "center",
//   },
//   tab: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     marginHorizontal: 5,
//   },
//   activeTab: {
//     backgroundColor: "#4CAF50",
//     borderColor: "#4CAF50",
//   },
//   tabText: {
//     color: "#333",
//     fontSize: 16,
//   },
//   activeTabText: {
//     color: "#fff",
//   },
//   formContainer: {
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   input: {
//     height: 52,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//     fontSize: 16,
//   },
//   imagePicker: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   imagePickerText: {
//     color: "#fff",
//     fontSize: 18,
//   },
//   imagePreview: {
//     width: "100%",
//     height: 200,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   addButton: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   addButtonText: {
//     color: "#fff",
//     fontSize: 18,
//   },
// });

// export default ManageHospitals;


// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   FlatList,
//   Alert,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
// } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import * as ImagePicker from "expo-image-picker";

// const ManageHospitals = () => {
//   const [activeTab, setActiveTab] = useState("add");
//   const [hospitalDetails, setHospitalDetails] = useState({
//     name: "",
//     location: "",
//     contactNumber: "",
//     specialty: "",
//     stateId: "",
//     districtId: "",
//     images: [], // To store selected images
//   });
//   const [hospitals, setHospitals] = useState([]);
//   const [states, setStates] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editHospitalId, setEditHospitalId] = useState(null);

//   useEffect(() => {
//     const getPermissions = async () => {
//       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (status !== "granted") {
//         Alert.alert("Permission Denied", "We need permission to access your media library.");
//       }
//     };
//     getPermissions();
//     fetchStates();
//   }, []);

//   const fetchStates = async () => {
//     try {
//       const response = await fetch("https://example.com/api/states");
//       const data = await response.json();
//       setStates(data);
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch states.");
//     }
//   };

//   const fetchDistricts = async (stateId) => {
//     try {
//       const response = await fetch(
//         `https://example.com/api/districts?stateId=${stateId}`
//       );
//       const data = await response.json();
//       setDistricts(data);
//     } catch (error) {
//       Alert.alert("Error", "Failed to fetch districts.");
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setHospitalDetails({ ...hospitalDetails, [field]: value });
//     if (field === "stateId") {
//       fetchDistricts(value);
//       setHospitalDetails({ ...hospitalDetails, districtId: "" });
//     }
//   };

//   const handleImagePick = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsMultipleSelection: true, // Enable multiple selection
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       const selectedImages = result.assets.map((asset) => asset.uri);
//       setHospitalDetails((prev) => ({
//         ...prev,
//         images: [...prev.images, ...selectedImages],
//       }));
//     }
//   };

//   const handleAddOrUpdateHospital = async () => {
//     const { name, location, contactNumber, stateId, districtId, images } =
//       hospitalDetails;

//     if (!name.trim() || !location.trim() || !contactNumber.trim() || !stateId || !districtId || images.length === 0) {
//       Alert.alert("Validation Error", "Please fill in all required fields.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("location", location);
//     formData.append("contactNumber", contactNumber);
//     formData.append("specialty", hospitalDetails.specialty);
//     formData.append("stateId", stateId);
//     formData.append("districtId", districtId);
//     images.forEach((image, index) => {
//       formData.append(`images[${index}]`, {
//         uri: image,
//         name: `hospital_image_${index}.jpg`,
//         type: "image/jpeg",
//       });
//     });

//     try {
//       const response = await fetch("https://example.com/api/hospitals", {
//         method: "POST",
//         body: formData,
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       if (!response.ok) throw new Error("Failed to save hospital data.");
//       Alert.alert("Success", "Hospital details saved successfully.");
//       setActiveTab("view");
//       setHospitalDetails({
//         name: "",
//         location: "",
//         contactNumber: "",
//         specialty: "",
//         stateId: "",
//         districtId: "",
//         images: [],
//       });
//     } catch (error) {
//       Alert.alert("Error", error.message);
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1 }}
//     >
//       <FlatList
//         contentContainerStyle={styles.container}
//         data={[1]}
//         renderItem={() => (
//           <>
//             <Text style={styles.header}>Manage Hospitals</Text>
//             <View style={styles.tabs}>
//               <TouchableOpacity
//                 style={[styles.tab, activeTab === "add" && styles.activeTab]}
//                 onPress={() => setActiveTab("add")}
//               >
//                 <Text style={[styles.tabText, activeTab === "add" && styles.activeTabText]}>
//                   {isEditing ? "Edit Hospital" : "Add Hospital"}
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={[styles.tab, activeTab === "view" && styles.activeTab]}
//                 onPress={() => setActiveTab("view")}
//               >
//                 <Text style={[styles.tabText, activeTab === "view" && styles.activeTabText]}>
//                   View Hospitals
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             {activeTab === "add" && (
//               <View style={styles.formContainer}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Hospital Name *"
//                   value={hospitalDetails.name}
//                   onChangeText={(text) => handleInputChange("name", text)}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Location *"
//                   value={hospitalDetails.location}
//                   onChangeText={(text) => handleInputChange("location", text)}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Contact Number *"
//                   value={hospitalDetails.contactNumber}
//                   onChangeText={(text) => handleInputChange("contactNumber", text)}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Specialty"
//                   value={hospitalDetails.specialty}
//                   onChangeText={(text) => handleInputChange("specialty", text)}
//                 />
//                 <Picker
//                   selectedValue={hospitalDetails.stateId}
//                   style={styles.input}
//                   onValueChange={(value) => handleInputChange("stateId", value)}
//                 >
//                   <Picker.Item label="Select State" value="" />
//                   {states.map((state) => (
//                     <Picker.Item key={state.id} label={state.name} value={state.id} />
//                   ))}
//                 </Picker>
//                 <Picker
//                   selectedValue={hospitalDetails.districtId}
//                   style={styles.input}
//                   onValueChange={(value) => handleInputChange("districtId", value)}
//                 >
//                   <Picker.Item label="Select District" value="" />
//                   {districts.map((district) => (
//                     <Picker.Item key={district.id} label={district.name} value={district.id} />
//                   ))}
//                 </Picker>
//                 <TouchableOpacity style={styles.imagePicker} onPress={handleImagePick}>
//                   <Text style={styles.imagePickerText}>Select Images</Text>
//                 </TouchableOpacity>
//                 {hospitalDetails.images.map((uri, index) => (
//                   <Image key={index} source={{ uri }} style={styles.imagePreview} />
//                 ))}
//                 <TouchableOpacity style={styles.addButton} onPress={handleAddOrUpdateHospital}>
//                   <Text style={styles.addButtonText}>
//                     {isEditing ? "Update Hospital" : "Add Hospital"}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           </>
//         )}
//       />
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20, backgroundColor: "#f5f5f5" },
//   header: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginVertical: 20 },
//   tabs: { flexDirection: "row", marginBottom: 20, justifyContent: "center" },
//   tab: { paddingVertical: 10, paddingHorizontal: 20, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, marginHorizontal: 5 },
//   activeTab: { backgroundColor: "#4CAF50", borderColor: "#4CAF50" },
//   tabText: { color: "#333", fontSize: 16 },
//   activeTabText: { color: "#fff" },
//   formContainer: { backgroundColor: "#fff", padding: 20, borderRadius: 8 },
//   input: { height: 52, borderColor: "#ccc", borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, borderRadius: 8, fontSize: 16 },
//   imagePicker: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 8, alignItems: "center", marginBottom: 10 },
//   imagePickerText: { color: "#fff", fontSize: 18 },
//   imagePreview: { width: 100, height: 100, marginBottom: 10, borderRadius: 8 },
//   addButton: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 8, alignItems: "center", marginTop: 10 },
//   addButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
// });

// export default ManageHospitals;
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  Linking,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";

const ManageHospitals = () => {
  const [activeTab, setActiveTab] = useState("add");
  const [hospitalDetails, setHospitalDetails] = useState({
    name: "",
    location: "",
    contactNumber: "",
    specialty: "",
    stateId: "",
    districtId: "",
    images: [], // To store selected images
  });
  console.log('hospitalDetails',hospitalDetails);
  const [hospitals, setHospitals] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editHospitalId, setEditHospitalId] = useState(null);

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission Denied", "We need permission to access your media library.");
      }

      const locationStatus = await Location.requestForegroundPermissionsAsync();
      if (!locationStatus.granted) {
        Alert.alert("Permission Denied", "We need permission to access your location.");
      }
    };

    getPermissions();
    fetchStates();
  }, []);

  const fetchStates = async () => {
    try {
      const response = await fetch("https://example.com/api/states");
      const data = await response.json();
      setStates(data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch states.");
    }
  };

  const fetchDistricts = async (stateId) => {
    try {
      const response = await fetch(
        `https://example.com/api/districts?stateId=${stateId}`
      );
      const data = await response.json();
      setDistricts(data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch districts.");
    }
  };

  const handleInputChange = (field, value) => {
    setHospitalDetails({ ...hospitalDetails, [field]: value });
    if (field === "stateId") {
      fetchDistricts(value);
      setHospitalDetails({ ...hospitalDetails, districtId: "" });
    }
  };

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true, // Enable multiple selection
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const selectedImages = result.assets.map((asset) => asset.uri);
      setHospitalDetails((prev) => ({
        ...prev,
        images: [...prev.images, ...selectedImages],
      }));
    }
  };

  const handleLocationPick = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({});
      const mapsUrl = `https://www.google.com/maps?q=${location.coords.latitude},${location.coords.longitude}`;
      setHospitalDetails((prev) => ({
        ...prev,
        location: mapsUrl,
      }));
    } catch (error) {
      Alert.alert("Error", "Failed to fetch location.");
    }
  };

  const handleAddOrUpdateHospital = async () => {
    const { name, location, contactNumber, stateId, districtId, images } =
      hospitalDetails;

    if (!name.trim() || !location.trim() || !contactNumber.trim() || !stateId || !districtId || images.length === 0) {
      Alert.alert("Validation Error", "Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("contactNumber", contactNumber);
    formData.append("specialty", hospitalDetails.specialty);
    formData.append("stateId", stateId);
    formData.append("districtId", districtId);
    images.forEach((image, index) => {
      formData.append(`images[${index}]`, {
        uri: image,
        name: `hospital_image_${index}.jpg`,
        type: "image/jpeg",
      });
    });

    try {
      const response = await fetch("https://example.com/api/hospitals", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (!response.ok) throw new Error("Failed to save hospital data.");
      Alert.alert("Success", "Hospital details saved successfully.");
      setActiveTab("view");
      setHospitalDetails({
        name: "",
        location: "",
        contactNumber: "",
        specialty: "",
        stateId: "",
        districtId: "",
        images: [],
      });
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <FlatList
        contentContainerStyle={styles.container}
        data={[1]}
        renderItem={() => (
          <>
            <Text style={styles.header}>Manage Hospitals</Text>
            <View style={styles.tabs}>
              <TouchableOpacity
                style={[styles.tab, activeTab === "add" && styles.activeTab]}
                onPress={() => setActiveTab("add")}
              >
                <Text style={[styles.tabText, activeTab === "add" && styles.activeTabText]}>
                  {isEditing ? "Edit Hospital" : "Add Hospital"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tab, activeTab === "view" && styles.activeTab]}
                onPress={() => setActiveTab("view")}
              >
                <Text style={[styles.tabText, activeTab === "view" && styles.activeTabText]}>
                  View Hospitals
                </Text>
              </TouchableOpacity>
            </View>

            {activeTab === "add" && (
              <View style={styles.formContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Hospital Name *"
                  value={hospitalDetails.name}
                  onChangeText={(text) => handleInputChange("name", text)}
                />
                <TouchableOpacity style={styles.locationPicker} onPress={handleLocationPick}>
                  <Text style={styles.locationPickerText}>
                    {hospitalDetails.location
                      ? "Location Selected (View in Maps)"
                      : "Pick Hospital Location"}
                  </Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.input}
                  placeholder="Contact Number *"
                  value={hospitalDetails.contactNumber}
                  onChangeText={(text) => handleInputChange("contactNumber", text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Specialty"
                  value={hospitalDetails.specialty}
                  onChangeText={(text) => handleInputChange("specialty", text)}
                />
                <Picker
                  selectedValue={hospitalDetails.stateId}
                  style={styles.input}
                  onValueChange={(value) => handleInputChange("stateId", value)}
                >
                  <Picker.Item label="Select State" value="" />
                  {states.map((state) => (
                    <Picker.Item key={state.id} label={state.name} value={state.id} />
                  ))}
                </Picker>
                <Picker
                  selectedValue={hospitalDetails.districtId}
                  style={styles.input}
                  onValueChange={(value) => handleInputChange("districtId", value)}
                >
                  <Picker.Item label="Select District" value="" />
                  {districts.map((district) => (
                    <Picker.Item key={district.id} label={district.name} value={district.id} />
                  ))}
                </Picker>
                <TouchableOpacity style={styles.imagePicker} onPress={handleImagePick}>
                  <Text style={styles.imagePickerText}>Select Images</Text>
                </TouchableOpacity>
                {hospitalDetails.images.map((uri, index) => (
                  <Image key={index} source={{ uri }} style={styles.imagePreview} />
                ))}
                <TouchableOpacity style={styles.addButton} onPress={handleAddOrUpdateHospital}>
                  <Text style={styles.addButtonText}>
                    {isEditing ? "Update Hospital" : "Add Hospital"}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5f5f5" },
  header: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginVertical: 20 },
  tabs: { flexDirection: "row", marginBottom: 20, justifyContent: "center" },
  tab: { paddingVertical: 10, paddingHorizontal: 20, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, marginHorizontal: 5 },
  activeTab: { backgroundColor: "#4CAF50", borderColor: "#4CAF50" },
  tabText: { color: "#333", fontSize: 16 },
  activeTabText: { color: "#fff" },
  formContainer: { backgroundColor: "#fff", padding: 20, borderRadius: 8 },
  input: { height: 52, borderColor: "#ccc", borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, borderRadius: 8, fontSize: 16 },
  locationPicker: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 8, alignItems: "center", marginBottom: 10 },
  locationPickerText: { color: "#fff", fontSize: 18 },
  imagePicker: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 8, alignItems: "center", marginBottom: 10 },
  imagePickerText: { color: "#fff", fontSize: 18 },
  imagePreview: { width: 100, height: 100, marginBottom: 10, borderRadius: 8 },
  addButton: { backgroundColor: "#4CAF50", paddingVertical: 12, borderRadius: 8, alignItems: "center", marginTop: 10 },
  addButtonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default ManageHospitals;
