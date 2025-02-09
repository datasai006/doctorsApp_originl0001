// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const Dashboard = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Admin Dashboard</Text>
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

// import React, { useState } from 'react';
// import { View, ScrollView, StyleSheet } from 'react-native';
// import { Card, Button, Icon, Text } from 'react-native-elements';

// const AdminDashboard = ({ navigation }) => {
//   const [doctorCount, setDoctorCount] = useState(0);
//   return (
//     <ScrollView style={styles.container}>
//       <Text h3 style={styles.title}>
//         Admin Dashboard
//       </Text>

//       <View style={styles.cardContainer}>
//       <Card>
//           <Card.Title>Manage Doctors</Card.Title>
//           <Card.Divider />
//           <Icon name="stethoscope" type="font-awesome" size={50} color="#4CAF50" />
//           <Text style={styles.cardText}>
//             Add, update, or remove doctor profiles and manage their schedules.
//           </Text>
//           <Text h4 style={{ textAlign: 'center', marginVertical: 10 }}>
//             Doctors: {doctorCount}
//           </Text>
//           <Button
//             title="Go to Manage Doctors"
//             icon={<Icon name="arrow-right" type="font-awesome" color="white" size={15} />}
//             buttonStyle={styles.button}
//             onPress={() => navigation.navigate('ManageDoctors', { setDoctorCount })}
//           />
//         </Card>
//         <Card>
//           <Card.Title>Manage Doctors</Card.Title>
//           <Card.Divider />
//           <Icon name="stethoscope" type="font-awesome" size={50} color="#4CAF50" />
//           <Text style={styles.cardText}>
//             Add, update, or remove doctor profiles and manage their schedules.
//           </Text>
//           <Button
//             title="Go to Manage Doctors"
//             icon={<Icon name="arrow-right" type="font-awesome" color="white" size={15} />}
//             buttonStyle={styles.button}
//             onPress={() => navigation.navigate('ManageDoctors')}
//           />
//         </Card>

//         <Card>
//           <Card.Title>Manage Patients</Card.Title>
//           <Card.Divider />
//           <Icon name="user" type="font-awesome" size={50} color="#2196F3" />
//           <Text style={styles.cardText}>
//             View, update, or remove patient profiles and track appointments.
//           </Text>
//           <Button
//             title="Go to Manage Patients"
//             icon={<Icon name="arrow-right" type="font-awesome" color="white" size={15} />}
//             buttonStyle={styles.button}
//             onPress={() => navigation.navigate('ManagePatients')}
//           />
//         </Card>

//         <Card>
//           <Card.Title>Appointments</Card.Title>
//           <Card.Divider />
//           <Icon name="calendar" type="font-awesome" size={50} color="#FF9800" />
//           <Text style={styles.cardText}>
//             Manage and track appointments for both doctors and patients.
//           </Text>
//           <Button
//             title="Go to Appointments"
//             icon={<Icon name="arrow-right" type="font-awesome" color="white" size={15} />}
//             buttonStyle={styles.button}
//             onPress={() => navigation.navigate('Appointments')}
//           />
//         </Card>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//     paddingHorizontal: 10,
//   },
//   title: {
//     textAlign: 'center',
//     marginVertical: 20,
//     color: '#333',
//   },
//   cardContainer: {
//     marginBottom: 20,
//   },
//   cardText: {
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     marginTop: 10,
//   },
// });

// export default AdminDashboard;


// import React, { useState } from 'react';
// import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
// import { Card, Button, Icon, Text } from 'react-native-elements';

// const AdminDashboard = ({ navigation }) => {
//   const [doctorCount, setDoctorCount] = useState(0);
//   const [patientCount, setPatientCount] = useState(0);
//   const [hospitalCount, setHospitalCount] = useState(1);  // Assuming 1 hospital for simplicity
//   const [appointmentCount, setAppointmentCount] = useState(0);

//   const screenWidth = Dimensions.get('window').width;

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text h3 style={styles.title}>
//         Admin Dashboard
//       </Text>

//       <View style={styles.cardContainer}>
//         {/* Hospital Count Card */}
//         <Card containerStyle={styles.card}>
//           <Card.Title style={styles.cardTitle}>Hospital Count</Card.Title>
//           <Card.Divider />
//           <Icon name="hospital-o" type="font-awesome" size={50} color="#FF5722" />
//           <Text style={styles.cardText}>Total Hospitals: {hospitalCount}</Text>
//         </Card>

//         {/* Doctor Count Card */}
//         <Card containerStyle={styles.card}>
//           <Card.Title style={styles.cardTitle}>Doctor Count</Card.Title>
//           <Card.Divider />
//           <Icon name="stethoscope" type="font-awesome" size={50} color="#4CAF50" />
//           <Text style={styles.cardText}>Total Doctors: {doctorCount}</Text>
//         </Card>

//         {/* Patient Count Card */}
//         <Card containerStyle={styles.card}>
//           <Card.Title style={styles.cardTitle}>Patient Count</Card.Title>
//           <Card.Divider />
//           <Icon name="user-md" type="font-awesome" size={50} color="#2196F3" />
//           <Text style={styles.cardText}>Total Patients: {patientCount}</Text>
//         </Card>

//         {/* Appointments Count Card */}
//         <Card containerStyle={styles.card}>
//           <Card.Title style={styles.cardTitle}>Appointments Count</Card.Title>
//           <Card.Divider />
//           <Icon name="calendar" type="font-awesome" size={50} color="#FF9800" />
//           <Text style={styles.cardText}>Total Appointments: {appointmentCount}</Text>
//         </Card>

//         {/* Manage Doctors Button */}
       
//       </View>
//     </ScrollView>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: '#F5F5F5',
//     justifyContent: 'flex-start',
//   },
//   title: {
//     textAlign: 'center',
//     marginVertical: 20,
//     color: '#333',
//   },
//   cardContainer: {
//     marginBottom: 20,
//   },
//   card: {
//     borderRadius: 10,
//     elevation: 5,
//     marginBottom: 20,
//     backgroundColor: '#fff',
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//   },
//   cardText: {
//     marginBottom: 10,
//     textAlign: 'center',
//     color: '#777',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     marginTop: 10,
//   },
// });

// export default AdminDashboard;


// import React, { useState } from 'react';
// import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
// import { Card, Icon, Text } from 'react-native-elements';

// const AdminDashboard = ({ navigation }) => {
//   const [data, setData] = useState([
//     {
//       id: '1',
//       title: 'Hospital Count',
//       count: 1,
//       icon: 'hospital-o',
//       color: '#FF5722',
//     },
//     {
//       id: '2',
//       title: 'Doctor Count',
//       count: 0,
//       icon: 'stethoscope',
//       color: '#4CAF50',
//     },
//     {
//       id: '3',
//       title: 'Patient Count',
//       count: 0,
//       icon: 'user-md',
//       color: '#2196F3',
//     },
//     {
//       id: '4',
//       title: 'Appointments Count',
//       count: 0,
//       icon: 'calendar',
//       color: '#FF9800',
//     },
//   ]);

//   const renderItem = ({ item }) => (
//     <View style={styles.cardContainer}>
//       <Card containerStyle={styles.card}>
//         <Card.Title style={styles.cardTitle}>{item.title}</Card.Title>
//         <Card.Divider />
//         <Icon name={item.icon} type="font-awesome" size={50} color={item.color} />
//         <Text style={styles.cardText}>Total: {item.count}</Text>
//       </Card>
//     </View>
//   );

//   return (
//     <View style={{ flex: 1 }}>
//       {/* Menu Bar */}
//       <View style={styles.menuBar}>
//         <Text style={styles.menuBarText}>Admin Dashboard</Text>
//       </View>

//       {/* FlatList */}
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         numColumns={2} // Two columns for row layout
//         contentContainerStyle={styles.container}
//         columnWrapperStyle={styles.row}
//       />
//     </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     backgroundColor: '#F5F5F5',
//   },
//   menuBar: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   menuBarText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   row: {
//     justifyContent: 'space-between',
//   },
//   cardContainer: {
//     flex: 1,
//     margin: 5,
//   },
//   card: {
//     borderRadius: 10,
//     elevation: 5,
//     backgroundColor: '#fff',
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//   },
//   cardText: {
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#777',
//   },
// });

// export default AdminDashboard;


// import React, { useState } from 'react';
// import { View, FlatList, StyleSheet, Dimensions,Text } from 'react-native';
// import { Card, Icon  } from 'react-native-elements';

// const AdminDashboard = () => {
//   const [data, setData] = useState([
//     {
//       id: '1',
//       title: 'Hospital Count',
//       count: 1,
//       icon: 'hospital-o',
//       color: '#FF5722',
//     },
//     {
//       id: '2',
//       title: 'Doctor Count',
//       count: 1,
//       icon: 'stethoscope',
//       color: '#4CAF50',
//     },
//     {
//       id: '3',
//       title: 'Patient Count',
//       count: 1,
//       icon: 'user-md',
//       color: '#2196F3',
//     },
//     {
//       id: '4',
//       title: 'Appointments Count',
//       count: 1,
//       icon: 'calendar',
//       color: '#FF9800',
//     },
//   ]);

//   const screenWidth = Dimensions.get('window').width;
//   const cardWidth = (screenWidth - 40) / 2; 

//   const renderItem = ({ item }) => (
//     <Card containerStyle={[styles.card, { width: cardWidth }]}>
//       <Card.Title style={styles.cardTitle}>{item.title}</Card.Title>
//       <Card.Divider />
//       <Icon name={item.icon} type="font-awesome" size={50} color={item.color} />
//       <Text style={styles.cardText}>Total: {item.count}</Text>
//     </Card>
//   );

//   return (
//     <View style={{ flex: 1 }}>
//       {/* Menu Bar */}
//       <View style={styles.menuBar}>
//         <Text style={styles.menuBarText}>Admin Dashboard</Text>
//       </View>

    
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         numColumns={2} 
//         contentContainerStyle={styles.container}
//         columnWrapperStyle={styles.row}
//       />
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     backgroundColor: '#F5F5F5',
//   },
//   menuBar: {
//     backgroundColor: '#00B4F6',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   menuBarText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   row: {
//     justifyContent: 'space-between', 
//     marginBottom: 10, 
//   },
//   card: {
//     borderRadius: 10,
//     elevation: 5,
//     backgroundColor: '#fff',
//     padding: 10,
//     marginHorizontal: 5, 
//     marginVertical: 5, 
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//   },
//   cardText: {
//     marginTop: 10,
//     textAlign: 'center',
//     color: '#777',
//   },
// });

// export default AdminDashboard;



// import React, { useState } from "react";
// import { View, FlatList, StyleSheet, Dimensions, Text } from "react-native";
// import { Card, Icon } from "react-native-elements";

// const AdminDashboard = () => {
//   const [data, setData] = useState([
//     {
//       id: "1",
//       title: "Hospital Count",
//       count: 1,
//       icon: "hospital-o",
//       color: "#FF5722",
//     },
//     {
//       id: "2",
//       title: "Doctor Count",
//       count: 1,
//       icon: "stethoscope",
//       color: "#4CAF50",
//     },
//     {
//       id: "3",
//       title: "Patient Count",
//       count: 1,
//       icon: "user-md",
//       color: "#2196F3",
//     },
//     {
//       id: "4",
//       title: "Appointments Count",
//       count: 1,
//       icon: "calendar",
//       color: "#FF9800",
//     },
//   ]);

//   const screenWidth = Dimensions.get("window").width;
//   const cardWidth = (screenWidth - 40) / 2;

//   const renderItem = ({ item }) => (
//     <Card containerStyle={[styles.card, { width: cardWidth }]}>
//       {/* ✅ Use Text instead of Card.Title */}
//       <Text style={styles.cardTitle}>{item.title}</Text>
//       <Card.Divider />
//       <Icon name={item.icon} type="font-awesome" size={50} color={item.color} />
//       <Text style={styles.cardText}>Total: {item.count}</Text>
//     </Card>
//   );

//   return (
//     // <View style={{ flex: 1 }}>
//     //   {/* Menu Bar */}
//     //   <View style={styles.menuBar}>
//     //     <Text style={styles.menuBarText}>Admin Dashboard</Text>
//     //   </View>

//     //   <FlatList
//     //     data={data}
//     //     renderItem={renderItem}
//     //     keyExtractor={(item) => item.id}
//     //     numColumns={2}
//     //     contentContainerStyle={styles.container}
//     //     columnWrapperStyle={styles.row}
//     //     nestedScrollEnabled={false} // ✅ Fix for VirtualizedList Warning
//     //   />
//     // </View>
//     <View style={styles.container}> {/* Main container */}
//       <View style={styles.menuBar}> {/* Menu Bar */}
//         <Text style={styles.menuBarText}>Admin Dashboard</Text>
//       </View>

      // <FlatList
      //   data={data}
      //   renderItem={renderItem}
      //   keyExtractor={(item) => item.id}
      //   numColumns={2}
      //   contentContainerStyle={styles.flatListContent} // Style FlatList content
      //   columnWrapperStyle={styles.row} // Style the rows
      // />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     backgroundColor: "#F5F5F5",
//   },
//   menuBar: {
//     backgroundColor: "#00B4F6",
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   menuBarText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   row: {
//     justifyContent: "space-between",
//     marginBottom: 10,
//   },
//   card: {
//     borderRadius: 10,
//     elevation: 5,
//     backgroundColor: "#fff",
//     padding: 10,
//     marginHorizontal: 5,
//     marginVertical: 5,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//     textAlign: "center",
//   },
//   cardText: {
//     marginTop: 10,
//     textAlign: "center",
//     color: "#777",
//   },
// });

 // export default AdminDashboard;
// import React, { useState } from "react";
// import { View, FlatList, StyleSheet, Dimensions, Text } from "react-native";
// import { Card, Icon } from "react-native-elements";

// const AdminDashboard = () => {
//   const [data, setData] = useState([
//     {
//       id: "1",
//       title: "Hospital Count",
//       count: 1,
//       icon: "hospital-o",
//       color: "#FF5722",
//     },
//     {
//       id: "2",
//       title: "Doctor Count",
//       count: 1,
//       icon: "stethoscope",
//       color: "#4CAF50",
//     },
//     {
//       id: "3",
//       title: "Patient Count",
//       count: 1,
//       icon: "user-md",
//       color: "#2196F3",
//     },
//     {
//       id: "4",
//       title: "Appointments Count",
//       count: 1,
//       icon: "calendar",
//       color: "#FF9800",
//     },
//     // Add more data objects here as needed.  Make sure ALL titles are strings!
//     {
//       id: "5",
//       title: "New Data", // Example
//       count: 5,
//       icon: "plus",
//       color: "green"
//     },
//     {
//       id: "6",
//       title: "Another Item", // Example
//       count: 10,
//       icon: "info",
//       color: "blue"
//     }

//   ]);

//   const screenWidth = Dimensions.get("window").width;
//   const cardWidth = (screenWidth - 30) / 2; // Adjusted margin

//   const renderItem = ({ item }) => {
//     const titleToDisplay = typeof item.title === 'string' ? item.title : ""; // Safeguard

//     return (
//       <View style={[styles.cardContainer, { width: cardWidth }]}>
//         <Card containerStyle={styles.card}>
//           <Text style={styles.cardTitle}>{titleToDisplay}</Text> {/* Use titleToDisplay */}
//           <Card.Divider />
//           <Icon name={item.icon} type="font-awesome" size={50} color={item.color} />
//           <Text style={styles.cardText}>Total: {item.count}</Text>
//         </Card>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.menuBar}>
//         <Text style={styles.menuBarText}>Admin Dashboard</Text>
//       </View>

//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         contentContainerStyle={styles.flatListContent} // Style FlatList content
//         columnWrapperStyle={styles.row} // Style the rows
//         nestedScrollEnabled={true} 
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F5F5",
//   },
//   menuBar: {
//     backgroundColor: "#00B4F6",
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   menuBarText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   flatListContent: {
//     padding: 10,
//   },
//   row: {
//     flex: 1,
//     justifyContent: "space-between",
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   cardContainer: {
//     marginVertical: 5,
//   },
//   card: {
//     borderRadius: 10,
//     elevation: 5,
//     backgroundColor: "#fff",
//     padding: 10,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//     textAlign: "center",
//   },
//   cardText: {
//     marginTop: 10,
//     textAlign: "center",
//     color: "#777",
//   },
// });

// export default AdminDashboard;


// import React, { useState } from "react";
// import { View, FlatList, StyleSheet, Dimensions, Text } from "react-native";
// import { Card, Icon } from "react-native-elements";

// const AdminDashboard = () => {
//   const [data, setData] = useState([
//     {
//       id: "1",
//       title: "Hospital Count",
//       count: 1,
//       icon: "hospital-o",
//       color: "#FF5722",
//     },
//     {
//       id: "2",
//       title: "Doctor Count",
//       count: 1,
//       icon: "stethoscope",
//       color: "#4CAF50",
//     },
//     {
//       id: "3",
//       title: "Patient Count",
//       count: 1,
//       icon: "user-md",
//       color: "#2196F3",
//     },
//     {
//       id: "4",
//       title: "Appointments Count",
//       count: 1,
//       icon: "calendar",
//       color: "#FF9800",
//     },
//   ]);

//   const screenWidth = Dimensions.get("window").width;
//   const cardWidth = (screenWidth - 40) / 2;

//   const renderItem = ({ item }) => (
//     <Card containerStyle={[styles.card, { width: cardWidth }]}>
//       {/* ✅ Use Text instead of Card.Title */}
//       <Text style={styles.cardTitle}>{item.title}</Text>
//       <Card.Divider />
//       <Icon name={item.icon} type="font-awesome" size={50} color={item.color} />
//       <Text style={styles.cardText}>Total: {item.count}</Text>
//     </Card>
//   );

//   return (
//     <View style={{ flex: 1 }}>
//       {/* Menu Bar */}
//       <View style={styles.menuBar}>
//         <Text style={styles.menuBarText}>Admin Dashboard</Text>
//       </View>

//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         contentContainerStyle={styles.container}
//         columnWrapperStyle={styles.row}
//         nestedScrollEnabled={true} // ✅ Fix for VirtualizedList Warning
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     backgroundColor: "#F5F5F5",
//   },
//   menuBar: {
//     backgroundColor: "#00B4F6",
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   menuBarText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   row: {
//     justifyContent: "space-between",
//     marginBottom: 10,
//   },
//   card: {
//     borderRadius: 10,
//     elevation: 5,
//     backgroundColor: "#fff",
//     padding: 10,
//     marginHorizontal: 5,
//     marginVertical: 5,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//     textAlign: "center",
//   },
//   cardText: {
//     marginTop: 10,
//     textAlign: "center",
//     color: "#777",
//   },
// });

// export default AdminDashboard;
import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Dimensions, Text, ActivityIndicator } from "react-native";
import { Card, Icon } from "react-native-elements";

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const screenWidth = Dimensions.get("window").width;
  const cardWidth = (screenWidth - 40) / 2;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
                     
      try {
        const response = await fetch("http://147.93.104.185:5000/api/dashboard/"); // Replace with your API URL
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();

        const newData = Object.entries(jsonData).map(([key, value]) => {
          let iconName;
          let color;

          switch (key) {
            case "hospital_count":
              iconName = "hospital-o";
              color = "#FF5722";
              break;
            case "doctor_count":
              iconName = "stethoscope";
              color = "#4CAF50";
              break;
            case "patient_count":
              iconName = "user-md";
              color = "#2196F3";
              break;
              case "appointment_count":
                iconName = "calendar";
                color = "#FF9800";
                break;
            // Add more cases as needed (e.g., appointments_count)
            default:
              iconName = "question-circle";
              color = "#9E9E9E";
          }

          return {
            id: key,
            title: key.replace("_", " "),
            count: value || 0,
            icon: iconName,
            color: color,
          };
        });

        setData(newData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <Card containerStyle={[styles.card, { width: cardWidth }]}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Card.Divider />
      <Icon name={item.icon} type="font-awesome" size={50} color={item.color} />
      <Text style={styles.cardText}>Total: {item.count}</Text>
    </Card>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#00B4F6" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.menuBar}>
        <Text style={styles.menuBarText}>Admin Dashboard</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.container}
        columnWrapperStyle={styles.row}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#F5F5F5",
  },
  menuBar: {
    backgroundColor: "#00B4F6",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  menuBarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  card: {
    borderRadius: 10,
    elevation: 5,
    backgroundColor: "#fff",
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  cardText: {
    marginTop: 10,
    textAlign: "center",
    color: "#777",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});

export default AdminDashboard;