// import React, { useState } from 'react';
// import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
// import { FontAwesome5 } from '@expo/vector-icons';

// const PatientsScreen = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [patients, setPatients] = useState([
//     { id: '1', name: 'John Doe', age: 45, condition: 'Diabetes' },
//     { id: '2', name: 'Jane Smith', age: 32, condition: 'Hypertension' },
//     { id: '3', name: 'Michael Johnson', age: 29, condition: 'Asthma' },
//     { id: '4', name: 'Sarah Brown', age: 37, condition: 'Allergy' },
//   ]);

//   const filteredPatients = patients.filter(patient =>
//     patient.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleAddPatient = () => {
//     console.log('Navigate to Add Patient Screen');
//   };

//   const handleViewPatient = (id) => {
//     console.log('View details for patient ID:', id);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <Text style={styles.title}>Patients</Text>
//       <Text style={styles.subtitle}>Manage patient information efficiently.</Text>

//       {/* Search Bar */}
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search Patients"
//         value={searchQuery}
//         onChangeText={setSearchQuery}
//       />

//       {/* Patients List */}
//       <FlatList
//         data={filteredPatients}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.patientCard}>
//             <View style={styles.cardContent}>
//               <Text style={styles.patientName}>{item.name}</Text>
//               <Text style={styles.patientDetails}>Age: {item.age}</Text>
//               <Text style={styles.patientDetails}>Condition: {item.condition}</Text>
//             </View>
//             <TouchableOpacity
//               style={styles.viewButton}
//               onPress={() => handleViewPatient(item.id)}
//             >
//               <FontAwesome5 name="eye" size={20} color="#fff" />
//             </TouchableOpacity>
//           </View>
//         )}
//         ListEmptyComponent={
//           <Text style={styles.noPatientsText}>No patients found.</Text>
//         }
//       />

//       {/* Add Patient Button */}
//       <TouchableOpacity style={styles.addButton} onPress={handleAddPatient}>
//         <FontAwesome5 name="user-plus" size={20} color="#fff" />
//         <Text style={styles.addButtonText}>Add Patient</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#4caf50',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#757575',
//     textAlign: 'center',
//     marginBottom: 16,
//   },
//   searchBar: {
//     height: 40,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     fontSize: 16,
//     marginBottom: 16,
//     elevation: 2,
//   },
//   patientCard: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 12,
//     elevation: 3,
//     alignItems: 'center',
//   },
//   cardContent: {
//     flex: 1,
//   },
//   patientName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   patientDetails: {
//     fontSize: 14,
//     color: '#424242',
//   },
//   viewButton: {
//     backgroundColor: '#03a9f4',
//     borderRadius: 8,
//     padding: 10,
//   },
//   noPatientsText: {
//     textAlign: 'center',
//     color: '#757575',
//     fontSize: 16,
//     marginTop: 20,
//   },
//   addButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#4caf50',
//     borderRadius: 8,
//     padding: 14,
//     marginTop: 16,
//   },
//   addButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginLeft: 8,
//   },
// });

// export default PatientsScreen;

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Alert, Modal } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const PatientsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [patients, setPatients] = useState([
    { id: '1', name: 'John Doe', age: 45, condition: 'Diabetes', medicalHistory: 'High blood pressure', treatment: 'Insulin' },
    { id: '2', name: 'Jane Smith', age: 32, condition: 'Hypertension', medicalHistory: 'Heart disease', treatment: 'Beta-blockers' },
    { id: '3', name: 'Michael Johnson', age: 29, condition: 'Asthma', medicalHistory: 'Allergic rhinitis', treatment: 'Inhaler' },
    { id: '4', name: 'Sarah Brown', age: 37, condition: 'Allergy', medicalHistory: 'Seasonal allergies', treatment: 'Antihistamines' },
  ]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewPatient = (id) => {
    const patient = patients.find(p => p.id === id);
    setSelectedPatient(patient); // Set the selected patient for details view
  };

  const handleCloseModal = () => {
    setSelectedPatient(null); // Close the modal by clearing selected patient
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Patients</Text>
      <Text style={styles.subtitle}>Manage patient information efficiently.</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search Patients"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Patients List */}
      <FlatList
        data={filteredPatients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.patientCard}>
            <View style={styles.cardContent}>
              <Text style={styles.patientName}>{item.name}</Text>
              <Text style={styles.patientDetails}>Age: {item.age}</Text>
              <Text style={styles.patientDetails}>Condition: {item.condition}</Text>
            </View>
            <TouchableOpacity
              style={styles.viewButton}
              onPress={() => handleViewPatient(item.id)}
            >
              <FontAwesome5 name="eye" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.noPatientsText}>No patients found.</Text>
        }
      />

      {/* Add Patient Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => console.log('Navigate to Add Patient Screen')}>
        <FontAwesome5 name="user-plus" size={20} color="#fff" />
        <Text style={styles.addButtonText}>Add Patient</Text>
      </TouchableOpacity>

      {/* Patient Details Modal */}
      {selectedPatient && (
        <Modal
          visible={true}
          animationType="slide"
          transparent={true}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>{selectedPatient.name}</Text>
              <Text style={styles.modalText}>Age: {selectedPatient.age}</Text>
              <Text style={styles.modalText}>Condition: {selectedPatient.condition}</Text>
              <Text style={styles.modalText}>Medical History: {selectedPatient.medicalHistory}</Text>
              <Text style={styles.modalText}>Treatment: {selectedPatient.treatment}</Text>

              <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4caf50',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 16,
  },
  searchBar: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 16,
    elevation: 2,
  },
  patientCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    elevation: 3,
    alignItems: 'center',
  },
  cardContent: {
    flex: 1,
  },
  patientName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  patientDetails: {
    fontSize: 14,
    color: '#424242',
  },
  viewButton: {
    backgroundColor: '#03a9f4',
    borderRadius: 8,
    padding: 10,
  },
  noPatientsText: {
    textAlign: 'center',
    color: '#757575',
    fontSize: 16,
    marginTop: 20,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4caf50',
    borderRadius: 8,
    padding: 14,
    marginTop: 16,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4caf50',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#424242',
    marginBottom: 8,
  },
  closeButton: {
    backgroundColor: '#4caf50',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default PatientsScreen;
