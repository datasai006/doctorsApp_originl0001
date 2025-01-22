// import React, { useState } from 'react';
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

// const ManageStates = () => {
//   const [activeTab, setActiveTab] = useState('add');
//   const [stateName, setStateName] = useState('');
//   const [states, setStates] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editStateId, setEditStateId] = useState(null);
//   const [selectedStateId, setSelectedStateId] = useState(null);

//   const handleAddOrUpdateState = () => {
//     if (!stateName.trim()) {
//       Alert.alert('Validation Error', 'State name is required.');
//       return;
//     }

//     if (isEditing) {
//       setStates((prevStates) =>
//         prevStates.map((state) =>
//           state.id === editStateId ? { id: state.id, name: stateName } : state
//         )
//       );
//       setIsEditing(false);
//       setEditStateId(null);
//     } else {
//       setStates([...states, { id: Math.random().toString(), name: stateName }]);
//     }

//     setStateName('');
//     setActiveTab('view');
//   };

//   const handleEditState = (id) => {
//     const stateToEdit = states.find((state) => state.id === id);
//     setStateName(stateToEdit.name);
//     setIsEditing(true);
//     setEditStateId(id);
//     setActiveTab('add');
//   };

//   const handleDeleteState = (id) => {
//     setStates(states.filter((state) => state.id !== id));
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={{ flex: 1 }}
//     >
//       <View style={styles.container}>
//         <Text style={styles.header}>Manage State</Text>

//         {/* Tabs */}
//         <View style={styles.tabs}>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'add' && styles.activeTab]}
//             onPress={() => setActiveTab('add')}
//           >
//             <Text style={[styles.tabText, activeTab === 'add' && styles.activeTabText]}>
//               Add State
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'view' && styles.activeTab]}
//             onPress={() => setActiveTab('view')}
//           >
//             <Text style={[styles.tabText, activeTab === 'view' && styles.activeTabText]}>
//               View States
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* Add State Form */}
//         {activeTab === 'add' && (
//           <View style={styles.formContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="State Name *"
//               value={stateName}
//               onChangeText={setStateName}
//             />
//             <TouchableOpacity style={styles.addButton} onPress={handleAddOrUpdateState}>
//               <Text style={styles.addButtonText}>{isEditing ? 'Update State' : 'Add State'}</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         {/* View States */}
//         {activeTab === 'view' && (
//           <FlatList
//             style={styles.list}
//             data={states}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <View style={styles.listItem}>
//                 <View style={styles.listContent}>
//                   <Text style={styles.listText}>Name: {item.name}</Text>
//                 </View>
//                 <View style={styles.iconContainer}>
//                   <TouchableOpacity onPress={() => handleEditState(item.id)}>
//                     <MaterialIcons name="edit" size={24} color="#4CAF50" />
//                   </TouchableOpacity>
//                   <TouchableOpacity onPress={() => handleDeleteState(item.id)}>
//                     <MaterialIcons name="delete" size={24} color="#F44336" />
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             )}
//           />
//         )}
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
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: 60,
//   },
// });

// export default ManageStates;



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
import { MaterialIcons } from '@expo/vector-icons';

const ManageStates = () => {
  const [activeTab, setActiveTab] = useState('add'); // Track active tab (add or view)
  const [stateName, setStateName] = useState('');
  const [states, setStates] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editStateId, setEditStateId] = useState(null);

  const handleAddOrUpdateState = () => {
    if (!stateName.trim()) {
      Alert.alert('Validation Error', 'State name is required.');
      return;
    }

    if (isEditing) {
      setStates((prevStates) =>
        prevStates.map((state) =>
          state.id === editStateId ? { id: state.id, name: stateName } : state
        )
      );
      setIsEditing(false);
      setEditStateId(null);
    } else {
      setStates([...states, { id: Math.random().toString(), name: stateName }]);
    }

    setStateName('');
    setActiveTab('view'); // Switch to the 'view' tab after adding/updating
  };

  const handleEditState = (id) => {
    const stateToEdit = states.find((state) => state.id === id);
    setStateName(stateToEdit.name);
    setIsEditing(true);
    setEditStateId(id);
    setActiveTab('add'); // Switch to the 'add' tab to edit
  };

  const handleDeleteState = (id) => {
    setStates(states.filter((state) => state.id !== id));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Manage States</Text>

        {/* Tabs */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'add' && styles.activeTab]}
            onPress={() => setActiveTab('add')}
          >
            <Text style={[styles.tabText, activeTab === 'add' && styles.activeTabText]}>
              Add State
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'view' && styles.activeTab]}
            onPress={() => setActiveTab('view')}
          >
            <Text style={[styles.tabText, activeTab === 'view' && styles.activeTabText]}>
              View States
            </Text>
          </TouchableOpacity>
        </View>

        {/* Add State Form */}
        {activeTab === 'add' && (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="State Name *"
              value={stateName}
              onChangeText={(text) => setStateName(text)}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddOrUpdateState}>
              <Text style={styles.addButtonText}>{isEditing ? 'Update State' : 'Add State'}</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* View States */}
        {activeTab === 'view' && (
          <FlatList
            style={styles.list}
            data={states}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <View style={styles.listContent}>
                  <Text style={styles.listText}>State: {item.name}</Text>
                </View>
                <View style={styles.iconContainer}>
                  <TouchableOpacity onPress={() => handleEditState(item.id)}>
                    <MaterialIcons name="edit" size={24} color="#4CAF50" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDeleteState(item.id)}>
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

export default ManageStates;
