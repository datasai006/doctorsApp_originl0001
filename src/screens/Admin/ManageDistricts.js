// import React, { useState, useEffect } from 'react';
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
// } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { Picker } from '@react-native-picker/picker';

// const ManageDistricts = () => {
//   const [states, setStates] = useState([]); // States fetched from API
//   const [selectedState, setSelectedState] = useState(''); // Selected state ID
//   const [districtName, setDistrictName] = useState(''); // District name input
//   const [districts, setDistricts] = useState([]); // List of districts
//   const [isEditing, setIsEditing] = useState(false);
//   const [editDistrictId, setEditDistrictId] = useState(null);

//   useEffect(() => {
//     // Fetch states from the API
//     fetchStates();
//   }, []);

//   const fetchStates = async () => {
//     try {
//       const response = await fetch('https://api.example.com/states'); // Replace with your API URL
//       const data = await response.json();
//       setStates(data);
//     } catch (error) {
//       console.error('Error fetching states:', error);
//     }
//   };

//   const handleAddOrUpdateDistrict = () => {
//     if (!selectedState) {
//       Alert.alert('Validation Error', 'Please select a state.');
//       return;
//     }

//     if (!districtName.trim()) {
//       Alert.alert('Validation Error', 'District name is required.');
//       return;
//     }

//     if (isEditing) {
//       // Update district
//       setDistricts((prevDistricts) =>
//         prevDistricts.map((district) =>
//           district.id === editDistrictId
//             ? { id: district.id, stateId: selectedState, name: districtName }
//             : district
//         )
//       );
//       setIsEditing(false);
//       setEditDistrictId(null);
//     } else {
//       // Add new district
//       setDistricts([
//         ...districts,
//         { id: Math.random().toString(), stateId: selectedState, name: districtName },
//       ]);
//     }

//     setSelectedState('');
//     setDistrictName('');
//   };

//   const handleEditDistrict = (id) => {
//     const districtToEdit = districts.find((district) => district.id === id);
//     setSelectedState(districtToEdit.stateId);
//     setDistrictName(districtToEdit.name);
//     setIsEditing(true);
//     setEditDistrictId(id);
//   };

//   const handleDeleteDistrict = (id) => {
//     setDistricts(districts.filter((district) => district.id !== id));
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={{ flex: 1 }}
//     >
//       <View style={styles.container}>
//         <Text style={styles.header}>Manage Districts</Text>

//         <View style={styles.formContainer}>
//           {/* State Dropdown */}
//           <Picker
//             selectedValue={selectedState}
//             style={styles.picker}
//             onValueChange={(itemValue) => setSelectedState(itemValue)}
//           >
//             <Picker.Item label="Select State" value="" />
//             {states.map((state) => (
//               <Picker.Item key={state.id} label={state.name} value={state.id} />
//             ))}
//           </Picker>

//           {/* District Name Input */}
//           <TextInput
//             style={styles.input}
//             placeholder="District Name *"
//             value={districtName}
//             onChangeText={(text) => setDistrictName(text)}
//           />

//           {/* Add/Edit Button */}
//           <TouchableOpacity style={styles.addButton} onPress={handleAddOrUpdateDistrict}>
//             <Text style={styles.addButtonText}>
//               {isEditing ? 'Edit District' : 'Add District'}
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* View Districts */}
//         <FlatList
//           style={styles.list}
//           data={districts}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.listItem}>
//               <View style={styles.listContent}>
//                 <Text style={styles.listText}>
//                   State: {states.find((state) => state.id === item.stateId)?.name}
//                 </Text>
//                 <Text style={styles.listText}>District: {item.name}</Text>
//               </View>
//               <View style={styles.iconContainer}>
//                 <TouchableOpacity onPress={() => handleEditDistrict(item.id)}>
//                   <MaterialIcons name="edit" size={24} color="#4CAF50" />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => handleDeleteDistrict(item.id)}>
//                   <MaterialIcons name="delete" size={24} color="#F44336" />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
//         />
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//     flex: 1,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 20,
//   },
//   formContainer: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//     marginBottom: 20,
//   },
//   picker: {
//     height: 52,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 10,
//     borderRadius: 8,
//   },
//   input: {
//     height: 52,
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
//   },
//   listContent: {
//     flex: 1,
//   },
//   listText: {
//     fontSize: 16,
//   },
//   iconContainer: {
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
// });

// export default ManageDistricts;


import React, { useState } from 'react';
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
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
const ManageDistricts = () => {
  const [activeTab, setActiveTab] = useState('add'); // Track active tab
  const [stateId, setStateId] = useState(''); // State dropdown value
  const [districtName, setDistrictName] = useState(''); // District name input
  const [districts, setDistricts] = useState([]); // Districts list
  const [isEditing, setIsEditing] = useState(false);
  const [editDistrictId, setEditDistrictId] = useState(null);

  // Example states dropdown values
  const states = [
    { id: '1', name: 'State 1' },
    { id: '2', name: 'State 2' },
    { id: '3', name: 'State 3' },
  ];

//   const handleAddOrUpdateDistrict = () => {
//     if (!stateId.trim()) {
//       Alert.alert('Validation Error', 'Please select a state.');
//       return;
//     }

//     if (!districtName.trim()) {
//       Alert.alert('Validation Error', 'District name is required.');
//       return;
//     }

//     if (isEditing) {
//       setDistricts((prevDistricts) =>
//         prevDistricts.map((district) =>
//           district.id === editDistrictId
//             ? { id: district.id, stateId, name: districtName }
//             : district
//         )
//       );
//       setIsEditing(false);
//       setEditDistrictId(null);
//     } else {
//       setDistricts([
//         ...districts,
//         { id: Math.random().toString(), stateId, name: districtName },
//       ]);
//     }

//     setDistrictName('');
//     setStateId('');
//     setActiveTab('view'); // Switch to 'view' tab
//   };



const handleAddOrUpdateDistrict = async () => {
    if (!stateId.trim()) {
      Alert.alert('Validation Error', 'Please select a state.');
      return;
    }
  
    if (!districtName.trim()) {
      Alert.alert('Validation Error', 'District name is required.');
      return;
    }
  
    try {
      if (isEditing) {
        // Update existing district
        await axios.put(`https://your-backend-url/districts/${editDistrictId}`, {
          id,
          name: districtName,
        });
  
        setDistricts((prevDistricts) =>
          prevDistricts.map((district) =>
            district.id === editDistrictId
              ? { id: district.id, stateId, name: districtName }
              : district
          )
        );
        setIsEditing(false);
        setEditDistrictId(null);
      } else {
        // Add new district
        console.log('res',response);
        const response = await axios.post('https://your-backend-url/districts', {
          stateId,
          name: districtName,
        });
  
        setDistricts([
          ...districts,
          { id: response.data.id, stateId, name: districtName },
        ]);
      }
  
      setDistrictName('');
      setStateId('');
      setActiveTab('view'); 
    } catch (error) {
      console.error('Error saving district:', error);
      Alert.alert('Error', 'Failed to save district. Please try again.');
    }
  };
  const handleEditDistrict = (id) => {
    const districtToEdit = districts.find((district) => district.id === id);
    setStateId(districtToEdit.stateId);
    setDistrictName(districtToEdit.name);
    setIsEditing(true);
    setEditDistrictId(id);
    setActiveTab('add'); 
  };

  const handleDeleteDistrict = (id) => {
    setDistricts(districts.filter((district) => district.id !== id));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Manage Districts</Text>

        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'add' && styles.activeTab]}
            onPress={() => setActiveTab('add')}
          >
            <Text style={[styles.tabText, activeTab === 'add' && styles.activeTabText]}>
              Add District
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'view' && styles.activeTab]}
            onPress={() => setActiveTab('view')}
          >
            <Text style={[styles.tabText, activeTab === 'view' && styles.activeTabText]}>
              View Districts
            </Text>
          </TouchableOpacity>
        </View>

        {/* Add District Form */}
        {activeTab === 'add' && (
          <View style={styles.formContainer}>
            <Picker
              selectedValue={stateId}
              style={styles.picker}
              onValueChange={(itemValue) => setStateId(itemValue)}
            >
              <Picker.Item label="Select State" value="" />
              {states.map((state) => (
                <Picker.Item key={state.id} label={state.name} value={state.id} />
              ))}
            </Picker>
            <TextInput
              style={styles.input}
              placeholder="District Name *"
              value={districtName}
              onChangeText={(text) => setDistrictName(text)}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddOrUpdateDistrict}>
              <Text style={styles.addButtonText}>
                {isEditing ? 'Update District' : 'Add District'}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* View Districts */}
        {activeTab === 'view' && (
          <FlatList
            style={styles.list}
            data={districts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <View style={styles.listContent}>
                  <Text style={styles.listText}>
                    State: {states.find((state) => state.id === item.stateId)?.name || 'N/A'}
                  </Text>
                  <Text style={styles.listText}>District: {item.name}</Text>
                </View>
                <View style={styles.iconContainer}>
                  <TouchableOpacity onPress={() => handleEditDistrict(item.id)}>
                    <MaterialIcons name="edit" size={24} color="#4CAF50" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDeleteDistrict(item.id)}>
                    <MaterialIcons name="delete" size={24} color="#F44336" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flex: 1,
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
  picker: {
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
  },
  listContent: {
    flex: 1,
  },
  listText: {
    fontSize: 16,
  },
  iconContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default ManageDistricts;
