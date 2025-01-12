// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const Dashboard = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Doctor Dashboard</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//   },
// });

// export default Dashboard;

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; // Ensure you install `expo/vector-icons`

// const Dashboard = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.header}>Welcome, Doctor</Text>
//       <Text style={styles.subHeader}>Your Dashboard Overview</Text>

//       {/* Summary Section */}
//       <View style={styles.summaryContainer}>
//         <TouchableOpacity style={styles.card}>
//           <FontAwesome5 name="user-md" size={40} color="#4caf50" />
//           <Text style={styles.cardTitle}>Patients</Text>
//           <Text style={styles.cardCount}>24</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.card}>
//           <FontAwesome5 name="calendar-alt" size={40} color="#f57c00" />
//           <Text style={styles.cardTitle}>Appointments</Text>
//           <Text style={styles.cardCount}>12</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.summaryContainer}>
//         <TouchableOpacity style={styles.card}>
//           <MaterialIcons name="pending-actions" size={40} color="#ff9800" />
//           <Text style={styles.cardTitle}>Pending Tasks</Text>
//           <Text style={styles.cardCount}>5</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.card}>
//           <FontAwesome5 name="hospital" size={40} color="#03a9f4" />
//           <Text style={styles.cardTitle}>Hospitals</Text>
//           <Text style={styles.cardCount}>3</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Recent Activities */}
//       <View style={styles.recentActivities}>
//         <Text style={styles.sectionTitle}>Recent Activities</Text>
//         <View style={styles.activityItem}>
//           <MaterialIcons name="check-circle" size={24} color="#4caf50" />
//           <Text style={styles.activityText}>Checked 5 patients today</Text>
//         </View>
//         <View style={styles.activityItem}>
//           <MaterialIcons name="schedule" size={24} color="#f57c00" />
//           <Text style={styles.activityText}>Scheduled 3 new appointments</Text>
//         </View>
//         <View style={styles.activityItem}>
//           <MaterialIcons name="note-add" size={24} color="#03a9f4" />
//           <Text style={styles.activityText}>Updated hospital information</Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 16,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#4caf50',
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   subHeader: {
//     fontSize: 16,
//     color: '#757575',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   summaryContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   card: {
//     flex: 1,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 16,
//     margin: 8,
//     alignItems: 'center',
//     elevation: 4,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#424242',
//     marginTop: 8,
//   },
//   cardCount: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#000',
//     marginTop: 4,
//   },
//   recentActivities: {
//     marginTop: 16,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 16,
//     elevation: 4,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#4caf50',
//     marginBottom: 12,
//   },
//   activityItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   activityText: {
//     fontSize: 14,
//     color: '#424242',
//     marginLeft: 8,
//   },
// });

// export default Dashboard;


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Dashboard = () => {
  const navigation = useNavigation();

  // Mock navigation handlers for each card
  const handleNavigation = (screen) => {
    navigation.navigate(screen); // Navigate to the respective screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Welcome, Doctor</Text>
      <Text style={styles.subHeader}>Manage Your Appointments and Tasks</Text>

      {/* Summary Cards */}
      <View style={styles.summaryContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleNavigation('PatientsScreen')}
        >
          <FontAwesome5 name="user-md" size={40} color="#4caf50" />
          <Text style={styles.cardTitle}>Patients</Text>
          <Text style={styles.cardCount}>24</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleNavigation('AppointmentsScreen')}
        >
          <FontAwesome5 name="calendar-alt" size={40} color="#f57c00" />
          <Text style={styles.cardTitle}>Appointments</Text>
          <Text style={styles.cardCount}>12</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summaryContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleNavigation('TasksScreen')}
        >
          <MaterialIcons name="pending-actions" size={40} color="#ff9800" />
          <Text style={styles.cardTitle}>Tasks</Text>
          <Text style={styles.cardCount}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleNavigation('HospitalsScreen')}
        >
          <FontAwesome5 name="hospital" size={40} color="#03a9f4" />
          <Text style={styles.cardTitle}>Hospitals</Text>
          <Text style={styles.cardCount}>3</Text>
        </TouchableOpacity>
      </View>

      {/* Time Schedule Section */}
      <View style={styles.scheduleContainer}>
        <Text style={styles.sectionTitle}>Today's Schedule</Text>
        <View style={styles.scheduleItem}>
          <Text style={styles.scheduleTime}>10:00 AM</Text>
          <Text style={styles.scheduleDetails}>Patient: John Doe (General Check-up)</Text>
        </View>
        <View style={styles.scheduleItem}>
          <Text style={styles.scheduleTime}>11:30 AM</Text>
          <Text style={styles.scheduleDetails}>Patient: Jane Smith (Cardiology)</Text>
        </View>
        <View style={styles.scheduleItem}>
          <Text style={styles.scheduleTime}>2:00 PM</Text>
          <Text style={styles.scheduleDetails}>Patient: Mark Johnson (Orthopedics)</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: 8,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 16,
    textAlign: 'center',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    alignItems: 'center',
    elevation: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#424242',
    marginTop: 8,
  },
  cardCount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 4,
  },
  scheduleContainer: {
    marginTop: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: 12,
  },
  scheduleItem: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 8,
  },
  scheduleTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  scheduleDetails: {
    fontSize: 14,
    color: '#424242',
    marginTop: 4,
  },
});

export default Dashboard;
