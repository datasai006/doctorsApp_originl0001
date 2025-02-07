// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const CustomSidebar = ({ navigation, role }) => {
//   const menuItems = {
//     admin: [
//       { title: 'Dashboard', route: 'Dashboard' },
//       { title: 'Manage Hospitals', route: 'ManageHospitals' },
//       { title: 'Manage Doctors', route: 'ManageDoctors' },
//     ],
//     doctor: [
//       { title: 'Dashboard', route: 'Dashboard' },
//       { title: 'Appointments', route: 'Appointments' },
//       { title: 'Profile', route: 'Profile' },
//     ],
//     patient: [
//       { title: 'Dashboard', route: 'Dashboard' },
//       { title: 'Appointments', route: 'Appointments' },
//       { title: 'Refer Friend', route: 'ReferFriend' },
//     ],
//   };

//   return (
//     <View style={styles.container}>
//       {menuItems[role]?.map((item, index) => (
//         <TouchableOpacity
//           key={index}
//           style={styles.menuItem}
//           onPress={() => navigation.navigate(item.route)}
//         >
//           <Text style={styles.menuText}>{item.title}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   menuItem: {
//     marginBottom: 15,
//     padding: 10,
//     backgroundColor: '#0078FF',
//     borderRadius: 5,
//   },
//   menuText: {
//     color: '#black',
//     fontWeight: 'bold',
//   },
// });

// export default CustomSidebar;


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet,
//   Image,
//   ScrollView,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Use MaterialIcons or your preferred library

// const CustomSidebar = ({ navigation, role, userName = 'John Doe', isLoggedIn = true }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const menuItems = {
//     admin: [
//       { title: 'Dashboard', route: 'Dashboard', icon: 'dashboard' },
//       { title: 'Manage Hospitals', route: 'ManageHospitals', icon: 'local-hospital' },
//       { title: 'Manage Doctors', route: 'ManageDoctors', icon: 'person' },
//       { title: 'Manage patients', route: 'ManagePatients', icon: 'person' },
//     ],
//     doctor: [
//       { title: 'Dashboard', route: 'Dashboard', icon: 'dashboard' },
//       { title: 'Appointments', route: 'Appointments', icon: 'event' },
//       { title: 'Profile', route: 'Profile', icon: 'account-circle' },
//     ],
//     patient: [
//       { title: 'Dashboard', route: 'Dashboard', icon: 'dashboard' },
//       { title: 'Appointments', route: 'Appointments', icon: 'event' },
//       { title: 'Refer Friend', route: 'ReferFriend', icon: 'share' },
//     ],
//   };

//   // Filter menu items based on the search query
//   const filteredMenuItems = menuItems[role]?.filter((item) =>
//     item.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <View style={styles.container}>
//       {/* Profile Section */}
//       <View style={styles.profileSection}>
//         <Image
//           source={{
//             uri: 'https://lh3.googleusercontent.com/a-/AOh14Gjv7yKbT5RfBJkbLyvFTtK_8JtghyVVHJiQ6w9a', // Replace with Google profile picture
//           }}
//           style={styles.profileImage}
//         />
//         <Text style={styles.profileName}>{userName}</Text>
//         <Text style={styles.profileRole}>{role.charAt(0).toUpperCase() + role.slice(1)}</Text>
//       </View>

//       {/* Search Bar */}
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search..."
//         placeholderTextColor="#aaa"
//         value={searchQuery}
//         onChangeText={setSearchQuery}
//       />

//       {/* Menu Items */}
//       <ScrollView style={styles.menuContainer}>
//         {filteredMenuItems?.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.menuItem}
//             onPress={() => navigation.navigate(item.route)}
//           >
//             <Icon name={item.icon} size={20} color="#FFFFFF" style={styles.menuIcon} />
//             <Text style={styles.menuText}>{item.title}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       {/* Login/Logout Section */}
//       <View style={styles.footer}>
//         {isLoggedIn ? (
//           <TouchableOpacity
//             style={[styles.menuItem, { backgroundColor: '#FF4D4D' }]}
//             onPress={() => console.log('Logout pressed')}
//           >
//             <Icon name="logout" size={20} color="#FFFFFF" style={styles.menuIcon} />
//             <Text style={styles.menuText}>Logout</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity
//             style={styles.menuItem}
//             onPress={() => navigation.navigate('Login')}
//           >
//             <Icon name="login" size={20} color="#FFFFFF" style={styles.menuIcon} />
//             <Text style={styles.menuText}>Login</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   profileSection: {
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#00B4F6',
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     borderWidth: 2,
//     borderColor: '#FFFFFF',
//   },
//   profileName: {
//     marginTop: 10,
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
//   profileRole: {
//     fontSize: 14,
//     color: '#D9EFFF',
//   },
//   searchBar: {
//     margin: 15,
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: '#FFFFFF',
//     fontSize: 16,
//     color: '#333',
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   menuContainer: {
//     flex: 1,
//     paddingHorizontal: 15,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//     padding: 15,
//     backgroundColor: '#00B4F6',
//     borderRadius: 10,
//   },
//   menuIcon: {
//     marginRight: 10,
//   },
//   menuText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   footer: {
//     padding: 15,
//     borderTopWidth: 1,
//     borderColor: '#ddd',
//   },
// });

// export default CustomSidebar;


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet,
//   Image,
//   ScrollView,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const CustomSidebar = ({ navigation, role, userName = 'Guest', isLoggedIn = false }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const menuItems = {
//     admin: [
//       { title: 'Dashboard', route: 'Dashboard', icon: 'dashboard' },
//       { title: 'Manage Hospitals', route: 'ManageHospitals', icon: 'local-hospital' },
//       { title: 'Manage Doctors', route: 'ManageDoctors', icon: 'person' },
//       { title: 'Manage Patients', route: 'ManagePatients', icon: 'person' },
//     ],
//     doctor: [
//       { title: 'Dashboard', route: 'Dashboard', icon: 'dashboard' },
//       { title: 'Appointments', route: 'Appointments', icon: 'event' },
//       { title: 'Profile', route: 'Profile', icon: 'account-circle' },
//     ],
//     patient: [
//       { title: 'Dashboard', route: 'Dashboard', icon: 'dashboard' },
//       { title: 'Appointments', route: 'Appointments', icon: 'event' },
//       { title: 'Refer Friend', route: 'ReferFriend', icon: 'share' },
//     ],
//   };

//   // Filter menu items based on the search query
//   const filteredMenuItems = menuItems[role]?.filter((item) =>
//     item.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <View style={styles.container}>
//       {/* Profile Section */}
//       <View style={styles.profileSection}>
//         <Image
//           source={{
//             uri: 'https://lh3.googleusercontent.com/a-/AOh14Gjv7yKbT5RfBJkbLyvFTtK_8JtghyVVHJiQ6w9a', // Replace with Google profile picture
//           }}
//           style={styles.profileImage}
//         />
//         <Text style={styles.profileName}>{isLoggedIn ? userName : 'Guest'}</Text>
//         <Text style={styles.profileRole}>
//           {isLoggedIn ? role.charAt(0).toUpperCase() + role.slice(1) : 'Visitor'}
//         </Text>
//       </View>

//       {/* Search Bar */}
//       {isLoggedIn && (
//         <TextInput
//           style={styles.searchBar}
//           placeholder="Search..."
//           placeholderTextColor="#aaa"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//         />
//       )}

//       {/* Menu Items */}
//       <ScrollView style={styles.menuContainer}>
//         {isLoggedIn &&
//           filteredMenuItems?.map((item, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.menuItem}
//               onPress={() => navigation.navigate(item.route)}
//             >
//               <Icon name={item.icon} size={20} color="#FFFFFF" style={styles.menuIcon} />
//               <Text style={styles.menuText}>{item.title}</Text>
//             </TouchableOpacity>
//           ))}

//         {!isLoggedIn && (
//           <View>
//           <Text style={styles.guestMessage}>Please log in to view menu options.</Text>
          
//           </View>
//         )}
//       </ScrollView>

//       {/* Login/Logout or Sign Up Section */}
//       <View style={styles.footer}>
//         {isLoggedIn ? (
//           <TouchableOpacity
//             style={[styles.menuItem, { backgroundColor: '#FF4D4D' }]}
//             onPress={() => console.log('Logout pressed')}
//           >
//             <Icon name="logout" size={20} color="#FFFFFF" style={styles.menuIcon} />
//             <Text style={styles.menuText}>Logout</Text>
//           </TouchableOpacity>
//         ) : (
//           <View>
//             <TouchableOpacity
//               style={[styles.menuItem, { backgroundColor: '#00B4F6', marginBottom: 10 }]}
//               onPress={() => navigation.navigate('Login')}
//             >
//               <Icon name="login" size={20} color="#FFFFFF" style={styles.menuIcon} />
//               <Text style={styles.menuText}>Login</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.menuItem, { backgroundColor: '#00B4F6' }]}
//               onPress={() => navigation.navigate('SignUp')}
//             >
//               <Icon name="person-add" size={20} color="#FFFFFF" style={styles.menuIcon} />
//               <Text style={styles.menuText}>Sign Up</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   profileSection: {
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#00B4F6',
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     borderWidth: 2,
//     borderColor: '#FFFFFF',
//   },
//   profileName: {
//     marginTop: 10,
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
//   profileRole: {
//     fontSize: 14,
//     color: '#D9EFFF',
//   },
//   searchBar: {
//     margin: 15,
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: '#FFFFFF',
//     fontSize: 16,
//     color: '#333',
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   menuContainer: {
//     flex: 1,
//     paddingHorizontal: 15,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//     padding: 15,
//     backgroundColor: '#00B4F6',
//     borderRadius: 10,
//   },
//   menuIcon: {
//     marginRight: 10,
//   },
//   menuText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   footer: {
//     padding: 15,
//     borderTopWidth: 1,
//     borderColor: '#ddd',
//   },
//   guestMessage: {
//     color: '#757575',
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 16,
//   },
// });

// export default CustomSidebar;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet,
//   Image,
//   FlatList,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const CustomSidebar = ({ navigation, role, userName = 'srikanth reddy ', isLoggedIn = true, profileImage }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   // Generate dynamic username based on role
//   const getDynamicUserName = () => {
//     if (!isLoggedIn) return 'Guest';
//     switch (role) {
//       case 'admin':
//         return `  ${userName}`;
//       case 'doctor':
//         return `Dr. ${userName}`;
//       case 'patient':
//         return `Patient ${userName}`;
//       default:
//         return userName;
//     }
//   };

//   const dynamicUserName = getDynamicUserName();
//   const menuItems = {
//     admin: [
//       { title: 'Dashboard', route: 'Dashboard', icon: 'dashboard' },
//       { title: 'Manage Hospitals', route: 'ManageHospitals', icon: 'local-hospital' },
//       { title: 'Manage Doctors', route: 'ManageDoctors', icon: 'person' },
//       { title: 'Manage Patients', route: 'ManagePatients', icon: 'person' },
//       { title: 'Manage State', route: 'ManageStates', icon: 'person' },
//       { title: 'Manage Districts', route: 'ManageDistricts', icon: 'person' },
//       { title: 'Profile', route: 'Profile', icon: 'person' },
//     ],
//     doctor: [
//       { title: 'Dashboard', route: 'Dashboard', icon: 'dashboard' },
//       { title: 'Appointments', route: 'Appointments', icon: 'event' },
//       { title: 'Profile', route: 'Profile', icon: 'account-circle' },
//     ],
//     patient: [
//       { title: 'Dashboard', route: 'Dashboard', icon: 'dashboard' },
//       { title: 'Appointments', route: 'Appointments', icon: 'event' },
//       { title: 'Refer Friend', route: 'ReferFriend', icon: 'share' },
//     ],
//   };

//   const filteredMenuItems = menuItems[role]?.filter((item) =>
//     item.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const renderMenuItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.menuItem}
//       onPress={() => navigation.navigate(item.route)}
//     >
//       <Icon name={item.icon} size={20} color="#FFFFFF" style={styles.menuIcon} />
//       <Text style={styles.menuText}>{item.title}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Profile Section */}
//       <View style={styles.profileSection}>
//         <Image
//           source={{
//             uri: profileImage || 'https://via.placeholder.com/80', // Fallback if no image is provided
//           }}
//           style={styles.profileImage}
//         />
//         <Text style={styles.profileName}>{dynamicUserName}</Text>
//         <Text style={styles.profileRole}>
//           {isLoggedIn ? `Welcome, ${role.charAt(0).toUpperCase() + role.slice(1)}` : 'Visitor'}
//         </Text>
//       </View>

//       {/* Search Bar */}
//       {isLoggedIn && (
//         <View style={styles.searchWrapper}>
//           <TextInput
//             style={styles.searchBar}
//             placeholder="Search..."
//             placeholderTextColor="#aaa"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//           {searchQuery.length > 0 && (
//             <TouchableOpacity
//               style={styles.clearButton}
//               onPress={() => setSearchQuery('')}
//             >
//               <Icon name="close" size={18} color="#aaa" />
//             </TouchableOpacity>
//           )}
//         </View>
//       )}

//       {/* Menu Items */}
//       {isLoggedIn ? (
//         <FlatList
//           data={filteredMenuItems}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={renderMenuItem}
//           contentContainerStyle={styles.menuContainer}
//         />
//       ) : (
//         <Text style={styles.guestMessage}>Please log in to view menu options.</Text>
//       )}

//       {/* Footer Section */}
//       <View style={styles.footer}>
//         {isLoggedIn ? (
//           <TouchableOpacity
//             style={[styles.menuItem, { backgroundColor: '#FF4D4D' }]}
//             onPress={() => console.log('Logout pressed')}
//           >
//             <Icon name="logout" size={20} color="#FFFFFF" style={styles.menuIcon} />
//             <Text style={styles.menuText}>Logout</Text>
//           </TouchableOpacity>
//         ) : (
//           <View>
//             <TouchableOpacity
//               style={[styles.menuItem, { backgroundColor: '#00B4F6', marginBottom: 10 }]}
//               onPress={() => navigation.navigate('Login')}
//             >
//               <Icon name="login" size={20} color="#FFFFFF" style={styles.menuIcon} />
//               <Text style={styles.menuText}>Login</Text>
//             </TouchableOpacity>
//             {/* <TouchableOpacity
//               style={[styles.menuItem, { backgroundColor: '#00B4F6' }]}
//               onPress={() => navigation.navigate('SignUp')}
//             >
//               <Icon name="person-add" size={20} color="#FFFFFF" style={styles.menuIcon} />
//               <Text style={styles.menuText}>Sign Up</Text>
//             </TouchableOpacity> */}
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   profileSection: {
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#00B4F6',
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     borderWidth: 2,
//     borderColor: '#FFFFFF',
//   },
//   profileName: {
//     marginTop: 10,
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
//   profileRole: {
//     fontSize: 14,
//     color: '#D9EFFF',
//   },
//   searchWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: 15,
//     marginTop: 10,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     padding: 5,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   searchBar: {
//     flex: 1,
//     fontSize: 16,
//     color: '#333',
//   },
//   clearButton: {
//     padding: 5,
//   },
//   menuContainer: {
//     flex: 1,
//     paddingHorizontal: 15,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//     padding: 15,
//     backgroundColor: '#00B4F6',
//     borderRadius: 10,
//   },
//   menuIcon: {
//     marginRight: 10,
//   },
//   menuText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   footer: {
//     padding: 15,
//     borderTopWidth: 1,
//     borderColor: '#ddd',
//   },
//   guestMessage: {
//     color: '#757575',
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 16,
//   },
// });

// export default CustomSidebar;

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomSidebar = ({ navigation, role, userName = 'venky ', isLoggedIn = true, profileImage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Generate dynamic username based on role
  const getDynamicUserName = () => {
    if (!isLoggedIn) return 'Guest';
    switch (role) {
      case 'admin':
        return `  ${userName}`;
      case 'doctor':
        return `Dr. ${userName}`;
      case 'patient':
        return `Patient ${userName}`;
      default:
        return userName;
    }
  };

  const dynamicUserName = getDynamicUserName();
  const menuItems = {
    admin: [
      { title: 'Dashboard', route: 'Dashboard', icon: 'dashboard' },
      { title: 'Departments', route: 'Departments', icon: 'account-circle' },
      { title: 'Manage Hospitals', route: 'ManageHospitals', icon: 'local-hospital' },
      { title: 'Manage Doctors', route: 'ManageDoctors', icon: 'person' },
      { title: 'Manage Patients', route: 'ManagePatients', icon: 'person' },
      { title: 'Manage State', route: 'ManageStates', icon: 'map' },
      { title: 'Manage Districts', route: 'ManageDistricts', icon: 'location-city' },
      { title: 'EmergencyOPdata', route: 'EmergencyOPdata', icon: 'location-city' },
      { title: 'Profile', route: 'Profile', icon: 'account-circle' },
     

    ],
    doctor: [
      { title: 'Dashboard', route: 'Dashboard', icon: 'dashboard' }, 
      { title: 'Profile', route: 'Profile', icon: 'person' }, 
      { title: 'Manage Slots', route: 'ManageSlots', icon: 'access-time' }, 
      { title: 'Appointments', route: 'Appointments', icon: 'calendar-today' }, 
      { title: 'Change Password', route: 'ChangePassword', icon: 'lock' }
      
    ],
    patient: [
      { title: 'Dashboard', route: 'Dashboard', icon: 'dashboard' }, 
      { title: 'Book Appointments', route: 'BookAppointments', icon: 'event-available' }, 
      { title: 'My Appointments', route: 'MyAppointments', icon: 'event-note' },
      { title: 'Health Records', route: 'HealthRecords', icon: 'folder' },
      { title: 'Profile', route: 'PatientProfile', icon: 'person' }, 
      { title: 'Support & Help Center', route: 'SupportHelpCenter', icon: 'help-outline' }, 
      { title: 'Privacy & Policy', route: 'PrivacyPolicy', icon: 'privacy-tip' }, 
      { title: 'Refer Friend', route: 'ReferFriend', icon: 'share' },
    ],
    
  };

  const filteredMenuItems = menuItems[role]?.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderMenuItem = ({ item }) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => navigation.navigate(item.route)}
    >
      <Icon name={item.icon} size={20} color="#FFFFFF" style={styles.menuIcon} />
      <Text style={styles.menuText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: profileImage || "https://via.placeholder.com/80", // Fallback if no image is provided
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{dynamicUserName}</Text>
        <Text style={styles.profileRole}>
          {isLoggedIn
            ? `Welcome, ${role.charAt(0).toUpperCase() + role.slice(1)}`
            : "Visitor"}
        </Text>
      </View>

      {/* Search Bar */}
      {isLoggedIn && (
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            placeholderTextColor="#aaa"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => setSearchQuery("")}
            >
              <Icon name="close" size={18} color="#aaa" />
            </TouchableOpacity>
          )}
        </View>
      )}

      {/* Scrollable Menu Items */}
      {/* <ScrollView contentContainerStyle={styles.menuContainer}>
        {isLoggedIn ? (
          <FlatList
            data={filteredMenuItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderMenuItem}
          />
        ) : (
          <Text style={styles.guestMessage}>Please log in to view menu options.</Text>
        )}
      </ScrollView> */}
      <View style={styles.menuContainer}>
        {isLoggedIn ? (
          <FlatList
            data={filteredMenuItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderMenuItem}
            nestedScrollEnabled={true} // Fix for nested scrolling issue
          />
        ) : (
          <Text style={styles.guestMessage}>
            Please log in to view menu options.
          </Text>
        )}
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        {isLoggedIn ? (
          <TouchableOpacity
            style={[styles.menuItem, { backgroundColor: "#FF4D4D" }]}
            onPress={() => console.log("Logout pressed")}
          >
            <Icon
              name="logout"
              size={20}
              color="#FFFFFF"
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        ) : (
          <View>
            <TouchableOpacity
              style={[
                styles.menuItem,
                { backgroundColor: "#00B4F6", marginBottom: 10 },
              ]}
              onPress={() => navigation.navigate("Login")}
            >
              <Icon
                name="login"
                size={20}
                color="#FFFFFF"
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#00B4F6',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  profileRole: {
    fontSize: 14,
    color: '#D9EFFF',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  clearButton: {
    padding: 5,
  },
  menuContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#00B4F6',
    borderRadius: 10,
  },
  menuIcon: {
    marginRight: 10,
  },
  menuText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  guestMessage: {
    color: '#757575',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default CustomSidebar;
