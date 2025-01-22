// import React, { useState } from 'react';
// import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { Icon } from 'react-native-elements';

// const ManagePatients = () => {
//   const [searchText, setSearchText] = useState('');
//   const [patients, setPatients] = useState([
//     {
//       id: 1,
//       name: 'John Doe',
//       age: 30,
//       gender: 'Male',
//       village: 'Greenwood',
//       mandal: 'Central',
//       district: 'Springfield',
//       state: 'Illinois',
//       mobile: '9876543210',
//       bloodGroup: 'O+',
//       active: true,
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       age: 25,
//       gender: 'Female',
//       village: 'Lakeside',
//       mandal: 'North',
//       district: 'Riverview',
//       state: 'California',
//       mobile: '9876543222',
//       bloodGroup: 'A+',
//       active: true,
//     },
//     // Add more patient data here
//   ]);

//   const handleDeactivate = (id) => {
//     setPatients((prevPatients) =>
//       prevPatients.map((patient) =>
//         patient.id === id ? { ...patient, active: false } : patient
//       )
//     );
//     Alert.alert('Success', 'Patient has been deactivated.');
//   };

//   const filteredPatients = patients.filter((patient) =>
//     patient.name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Manage Patients</Text>
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search by name"
//         value={searchText}
//         onChangeText={(text) => setSearchText(text)}
//       />
//       <FlatList
//         data={filteredPatients}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={[styles.card, !item.active && styles.inactiveCard]}>
//             <View style={styles.cardHeader}>
//               <Text style={styles.cardTitle}>{item.name}</Text>
//               <TouchableOpacity onPress={() => handleDeactivate(item.id)}>
//                 <Icon name="close" type="material" color="red" size={24} />
//               </TouchableOpacity>
//             </View>
//             <View style={styles.cardBody}>
//               <Text style={styles.cardText}>Age: {item.age}</Text>
//               <Text style={styles.cardText}>Gender: {item.gender}</Text>
//               <Text style={styles.cardText}>Village: {item.village}</Text>
//               <Text style={styles.cardText}>Mandal: {item.mandal}</Text>
//               <Text style={styles.cardText}>District: {item.district}</Text>
//               <Text style={styles.cardText}>State: {item.state}</Text>
//               <Text style={styles.cardText}>Mobile: {item.mobile}</Text>
//               <Text style={styles.cardText}>Blood Group: {item.bloodGroup}</Text>
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
//     backgroundColor: '#f8f9fa',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#343a40',
//   },
//   searchBar: {
//     height: 40,
//     borderColor: '#ced4da',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     backgroundColor: '#ffffff',
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: '#ffffff',
//     borderRadius: 8,
//     marginBottom: 15,
//     padding: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   inactiveCard: {
//     backgroundColor: '#ffe6e6',
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#495057',
//   },
//   cardBody: {
//     marginTop: 10,
//   },
//   cardText: {
//     fontSize: 14,
//     color: '#6c757d',
//     marginBottom: 5,
//   },
// });

// export default ManagePatients;


// import React, { useState } from 'react';
// import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Alert, Linking } from 'react-native';
// import { Icon } from 'react-native-elements';

// const ManagePatients = () => {
//   const [searchText, setSearchText] = useState('');
//   const [patients, setPatients] = useState([
//     {
//       id: 1,
//       name: 'Jahn Dae',
//       age: 30,
//       gender: 'Male',
//       village: 'Greenwood',
//       mandal: 'Central',
//       district: 'Springfield',
//       state: 'Illinois',
//       mobile: '9876543210',
//       bloodGroup: 'O+',
//       active: true,
//     }, {
//       id: 2,
//       name: 'venky',
//       age: 30,
//       gender: 'Male',
//       village: 'Greenwood',
//       mandal: 'Central',
//       district: 'Springfield',
//       state: 'Illinois',
//       mobile: '9876543210',
//       bloodGroup: 'O-',
//       active: true,
//     },
//     {
//       id: 3,
//       name: 'Jane Smith',
//       age: 25,
//       gender: 'Female',
//       village: 'Lakeside',
//       mandal: 'North',
//       district: 'Riverview',
//       state: 'California',
//       mobile: '9876543222',
//       bloodGroup: 'A+',
//       active: true,
//     },
//     // Add more patient data here
//   ]);

//   const handleDeactivate = (id) => {
//     setPatients((prevPatients) =>
//       prevPatients.map((patient) =>
//         patient.id === id ? { ...patient, active: false } : patient
//       )
//     );
//     Alert.alert('Success', 'Patient has been deactivated.');
//   };

//   const handleCall = (mobile) => {
//     Linking.openURL(`tel:${mobile}`);
//   };

//   const filteredPatients = patients.filter((patient) => {
//     const lowercasedSearchText = searchText.toLowerCase();
//     return (
//       patient.name.toLowerCase().includes(lowercasedSearchText) ||
//       patient.bloodGroup.toLowerCase().includes(lowercasedSearchText) ||
//       patient.mobile.includes(lowercasedSearchText)
//     );
//   });

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Manage Patients</Text>
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search by name, blood group, or mobile"
//         value={searchText}
//         onChangeText={(text) => setSearchText(text)}
//       />
//       <FlatList
//         data={filteredPatients}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={[styles.card, !item.active && styles.inactiveCard]}>
//             <View style={styles.cardHeader}>
//               <Text style={styles.cardTitle}>{item.name}</Text>
//               <TouchableOpacity onPress={() => handleDeactivate(item.id)}>
//                 <Icon name="close" type="material" color="red" size={24} />
//               </TouchableOpacity>
//             </View>
//             <View style={styles.cardBody}>
//               <Text style={styles.cardText}>Age: {item.age}</Text>
//               <Text style={styles.cardText}>Gender: {item.gender}</Text>
//               <Text style={styles.cardText}>Village: {item.village}</Text>
//               <Text style={styles.cardText}>Mandal: {item.mandal}</Text>
//               <Text style={styles.cardText}>District: {item.district}</Text>
//               <Text style={styles.cardText}>State: {item.state}</Text>
//               <Text style={styles.cardText}>Blood Group: {item.bloodGroup}</Text>
//             </View>
//             {/* Phone icon positioned at the bottom */}
//             <View style={styles.phoneContainer}>
//               <Text style={styles.cardText}>Mobile: {item.mobile}</Text>
//               <TouchableOpacity onPress={() => handleCall(item.mobile)} style={styles.phoneIcon}>
//                 <Icon name="phone" type="font-awesome" color="green" size={30} />
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
//     backgroundColor: '#f8f9fa',
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#343a40',
//     textAlign: 'center',
//   },
//   searchBar: {
//     height: 45,
//     borderColor: '#ced4da',
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     backgroundColor: '#ffffff',
//     marginBottom: 20,
//     fontSize: 16,
//   },
//   card: {
//     backgroundColor: '#ffffff',
//     borderRadius: 12,
//     marginBottom: 20,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   inactiveCard: {
//     backgroundColor: '#f8d7da',
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   cardTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#495057',
//   },
//   cardBody: {
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   cardText: {
//     fontSize: 16,
//     color: '#6c757d',
//     marginBottom: 8,
//   },
//   phoneContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     borderTopWidth: 1,
//     borderTopColor: '#ced4da',
//     paddingTop: 10,
//   },
//   phoneIcon: {
//     padding: 10,
//     backgroundColor: '#e9ecef',
//     borderRadius: 50,
//   },
// });

// export default ManagePatients;


import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Alert, Linking } from 'react-native';
import { Icon } from 'react-native-elements';

const ManagePatients = () => {
  const [searchText, setSearchText] = useState('');
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: 'Jahn Dae',
      age: 30,
      gender: 'Male',
      village: 'Greenwood',
      mandal: 'Central',
      district: 'Springfield',
      state: 'Illinois',
      mobile: '9876543210',
      bloodGroup: 'O+',
      active: true,
    }, {
      id: 2,
      name: 'venky',
      age: 30,
      gender: 'Male',
      village: 'Greenwood',
      mandal: 'Central',
      district: 'Springfield',
      state: 'Illinois',
      mobile: '9876543210',
      bloodGroup: 'O-',
      active: true,
    },
    {
      id: 3,
      name: 'Jane Smith',
      age: 25,
      gender: 'Female',
      village: 'Lakeside',
      mandal: 'North',
      district: 'Riverview',
      state: 'California',
      mobile: '9876543222',
      bloodGroup: 'A+',
      active: true,
    },
    // Add more patient data here
  ]);

  const handleDeactivate = (id) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) =>
        patient.id === id ? { ...patient, active: false } : patient
      )
    );
    Alert.alert('Success', 'Patient has been deactivated.');
  };

  const handleActivate = (id) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) =>
        patient.id === id ? { ...patient, active: true } : patient
      )
    );
    Alert.alert('Success', 'Patient has been reactivated.');
  };

  const handleCall = (mobile) => {
    Linking.openURL(`tel:${mobile}`);
  };

  const filteredPatients = patients.filter((patient) => {
    const lowercasedSearchText = searchText.toLowerCase();
    return (
      patient.name.toLowerCase().includes(lowercasedSearchText) ||
      patient.bloodGroup.toLowerCase().includes(lowercasedSearchText) ||
      patient.mobile.includes(lowercasedSearchText)
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Patients</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by name, blood group, or mobile"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <FlatList
        data={filteredPatients}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.card, !item.active && styles.inactiveCard]}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <TouchableOpacity onPress={() => item.active ? handleDeactivate(item.id) : handleActivate(item.id)}>
                <Icon 
                  name={item.active ? "close" : "check"} 
                  type="material" 
                  color={item.active ? "red" : "green"} 
                  size={24} 
                />
              </TouchableOpacity>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.cardText}>Age: {item.age}</Text>
              <Text style={styles.cardText}>Gender: {item.gender}</Text>
              <Text style={styles.cardText}>Village: {item.village}</Text>
              <Text style={styles.cardText}>Mandal: {item.mandal}</Text>
              <Text style={styles.cardText}>District: {item.district}</Text>
              <Text style={styles.cardText}>State: {item.state}</Text>
              <Text style={styles.cardText}>Blood Group: {item.bloodGroup}</Text>
            </View>
            {/* Phone icon positioned at the bottom */}
            <View style={styles.phoneContainer}>
              <Text style={styles.cardText}>Mobile: {item.mobile}</Text>
              <TouchableOpacity onPress={() => handleCall(item.mobile)} style={styles.phoneIcon}>
                <Icon name="phone" type="font-awesome" color="green" size={30} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
    textAlign: 'center',
  },
  searchBar: {
    height: 45,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    fontSize: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  inactiveCard: {
    backgroundColor: '#f8d7da',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#495057',
  },
  cardBody: {
    marginTop: 10,
    marginBottom: 20,
  },
  cardText: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 8,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ced4da',
    paddingTop: 10,
  },
  phoneIcon: {
    padding: 10,
    backgroundColor: '#e9ecef',
    borderRadius: 50,
  },
});

export default ManagePatients;
