// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   FlatList,
//   Alert,
//   TouchableOpacity,
//   Image,
//   Platform,
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { MaterialIcons } from '@expo/vector-icons';
// import axios from 'axios';

// const ManageDepartments = () => {
//   const [activeTab, setActiveTab] = useState('add'); // Track active tab
//   const [departmentName, setDepartmentName] = useState(''); // Department name input
//   const [departmentImage, setDepartmentImage] = useState(null); // Department image
//   const [departments, setDepartments] = useState([]); // Departments list
//   const [isEditing, setIsEditing] = useState(false);
//   const [editDepartmentId, setEditDepartmentId] = useState(null);

//   const handleAddOrUpdateDepartment = async () => {
//     if (!departmentName.trim()) {
//       Alert.alert('Validation Error', 'Department name is required.');
//       return;
//     }

//     if (!departmentImage) {
//       Alert.alert('Validation Error', 'Please select an image.');
//       return;
//     }

//     try {
//       if (isEditing) {
//         // Update existing department
//         await axios.put(`https://your-backend-url/departments/${editDepartmentId}`, {
//           name: departmentName,
//           image: departmentImage,
//         });

//         setDepartments((prevDepartments) =>
//           prevDepartments.map((department) =>
//             department.id === editDepartmentId
//               ? { id: department.id, name: departmentName, image: departmentImage }
//               : department
//           )
//         );
//         setIsEditing(false);
//         setEditDepartmentId(null);
//       } else {
//         // Add new department
//         const response = await axios.post('https://your-backend-url/departments', {
//           name: departmentName,
//           image: departmentImage,
//         });

//         setDepartments([
//           ...departments,
//           { id: response.data.id, name: departmentName, image: departmentImage },
//         ]);
//       }

//       setDepartmentName('');
//       setDepartmentImage(null);
//       setActiveTab('view');
//     } catch (error) {
//       console.error('Error saving department:', error);
//       Alert.alert('Error', 'Failed to save department. Please try again.');
//     }
//   };

//   const handleEditDepartment = (id) => {
//     const departmentToEdit = departments.find((department) => department.id === id);
//     setDepartmentName(departmentToEdit.name);
//     setDepartmentImage(departmentToEdit.image);
//     setIsEditing(true);
//     setEditDepartmentId(id);
//     setActiveTab('add');
//   };

//   const handleDeleteDepartment = (id) => {
//     setDepartments(departments.filter((department) => department.id !== id));
//   };

//   const pickImage = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permissionResult.granted === false) {
//       Alert.alert('Permission Denied', 'You need to allow access to the media library.');
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDepartmentImage(result.assets[0].uri);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Manage Departments</Text>

//       {/* Tabs */}
//       <View style={styles.tabs}>
//         <TouchableOpacity
//           style={[styles.tab, activeTab === 'add' && styles.activeTab]}
//           onPress={() => setActiveTab('add')}
//         >
//           <Text style={[styles.tabText, activeTab === 'add' && styles.activeTabText]}>
//             Add Department
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.tab, activeTab === 'view' && styles.activeTab]}
//           onPress={() => setActiveTab('view')}
//         >
//           <Text style={[styles.tabText, activeTab === 'view' && styles.activeTabText]}>
//             View Departments
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Add Department Form */}
//       {activeTab === 'add' && (
//         <View style={styles.formContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Department Name *"
//             value={departmentName}
//             onChangeText={(text) => setDepartmentName(text)}
//           />
//           <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
//             <Text style={styles.imagePickerText}>
//               {departmentImage ? 'Change Image' : 'Pick Image'}
//             </Text>
//           </TouchableOpacity>
//           {departmentImage && (
//             <Image source={{ uri: departmentImage }} style={styles.imagePreview} />
//           )}
//           <TouchableOpacity style={styles.addButton} onPress={handleAddOrUpdateDepartment}>
//             <Text style={styles.addButtonText}>
//               {isEditing ? 'Update Department' : 'Add Department'}
//             </Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       {/* View Departments */}
//       {activeTab === 'view' && (
//         <FlatList
//           style={styles.list}
//           data={departments}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.listItem}>
//               <Image source={{ uri: item.image }} style={styles.listItemImage} />
//               <View style={styles.listContent}>
//                 <Text style={styles.listText}>Department: {item.name}</Text>
//               </View>
//               <View style={styles.iconContainer}>
//                 <TouchableOpacity onPress={() => handleEditDepartment(item.id)}>
//                   <MaterialIcons name="edit" size={24} color="#4CAF50" />
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => handleDeleteDepartment(item.id)}>
//                   <MaterialIcons name="delete" size={24} color="#F44336" />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
//         />
//       )}
//     </View>
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
//   imagePickerButton: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   imagePickerText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   imagePreview: {
//     width: '100%',
//     height: 200,
//     marginBottom: 10,
//     borderRadius: 8,
//   },
//   addButton: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
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
//   listItemImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
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

// export default ManageDepartments;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   FlatList,
//   Alert,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { MaterialIcons } from 'react-native-vector-icons';
// import axios from 'axios';

// const ManageDepartments = () => {
//   const [activeTab, setActiveTab] = useState('add');
//   const [departmentName, setDepartmentName] = useState('');
//   const [departmentImage, setDepartmentImage] = useState(null);
//   const [departments, setDepartments] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [editDepartmentId, setEditDepartmentId] = useState(null);

//   const handleAddOrUpdateDepartment = async () => {
//     if (!departmentName.trim()) {
//       Alert.alert('Validation Error', 'Department name is required.');
//       return;
//     }

//     if (!departmentImage) {
//       Alert.alert('Validation Error', 'Please select an image.');
//       return;
//     }

//     try {
//       if (isEditing) {
//         // Update existing department
//         setDepartments((prevDepartments) =>
//           prevDepartments.map((department) =>
//             department.id === editDepartmentId
//               ? { ...department, name: departmentName, image: departmentImage }
//               : department
//           )
//         );
//         setIsEditing(false);
//         setEditDepartmentId(null);
//       } else {
//         // Add new department
//         const newDepartment = {
//           id: Date.now().toString(), // Temporary ID
//           name: departmentName,
//           image: departmentImage,
//           active: true, // Default status is active
//         };
//         setDepartments([...departments, newDepartment]);
//       }

//       setDepartmentName('');
//       setDepartmentImage(null);
//       setActiveTab('view');
//     } catch (error) {
//       console.error('Error saving department:', error);
//       Alert.alert('Error', 'Failed to save department. Please try again.');
//     }
//   };

//   const handleEditDepartment = (id) => {
//     const departmentToEdit = departments.find((department) => department.id === id);
//     setDepartmentName(departmentToEdit.name);
//     setDepartmentImage(departmentToEdit.image);
//     setIsEditing(true);
//     setEditDepartmentId(id);
//     setActiveTab('add');
//   };

//   const handleDeleteDepartment = (id) => {
//     setDepartments(departments.filter((department) => department.id !== id));
//   };

//   const toggleDepartmentStatus = (id) => {
//     setDepartments((prevDepartments) =>
//       prevDepartments.map((department) =>
//         department.id === id ? { ...department, active: !department.active } : department
//       )
//     );
//   };

//   const pickImage = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permissionResult.granted === false) {
//       Alert.alert('Permission Denied', 'You need to allow access to the media library.');
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDepartmentImage(result.assets[0].uri);
//     }
//   };

//   const filteredDepartments = departments.filter((department) =>
//     department.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Manage Departments</Text>

//       {/* Tabs */}
//       <View style={styles.tabs}>
//         <TouchableOpacity
//           style={[styles.tab, activeTab === 'add' && styles.activeTab]}
//           onPress={() => setActiveTab('add')}
//         >
//           <Text style={[styles.tabText, activeTab === 'add' && styles.activeTabText]}>
//             Add Department
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.tab, activeTab === 'view' && styles.activeTab]}
//           onPress={() => setActiveTab('view')}
//         >
//           <Text style={[styles.tabText, activeTab === 'view' && styles.activeTabText]}>
//             View Departments
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Add Department Form */}
//       {activeTab === 'add' && (
//         <View style={styles.formContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Department Name *"
//             value={departmentName}
//             onChangeText={(text) => setDepartmentName(text)}
//           />
//           <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
//             <Text style={styles.imagePickerText}>
//               {departmentImage ? 'Change Image' : 'Pick Image'}
//             </Text>
//           </TouchableOpacity>
//           {departmentImage && (
//             <Image source={{ uri: departmentImage }} style={styles.imagePreview} />
//           )}
//           <TouchableOpacity style={styles.addButton} onPress={handleAddOrUpdateDepartment}>
//             <Text style={styles.addButtonText}>
//               {isEditing ? 'Update Department' : 'Add Department'}
//             </Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       {/* View Departments */}
//       {activeTab === 'view' && (
//         <View>
//           <TextInput
//             style={styles.input}
//             placeholder="Search Departments..."
//             value={searchQuery}
//             onChangeText={(text) => setSearchQuery(text)}
//           />
//           {filteredDepartments.length > 0 ? (
//             <FlatList
//               style={styles.list}
//               data={filteredDepartments}
//               keyExtractor={(item) => item.id}
//               renderItem={({ item }) => (
//                 <View style={styles.listItem}>
//                   <Image source={{ uri: item.image }} style={styles.listItemImage} />
//                   <View style={styles.listContent}>
//                     <Text style={styles.listText}>Department: {item.name}</Text>
//                     <Text style={styles.listText}>
//                       Status: {item.active ? 'Active' : 'Inactive'}
//                     </Text>
//                   </View>
//                   <View style={styles.iconContainer}>
//                     <TouchableOpacity onPress={() => toggleDepartmentStatus(item.id)}>
//                       <MaterialIcons
//                         name={item.active ? 'cancel' : 'check-circle'}
//                         size={24}
//                         color={item.active ? '#F44336' : '#4CAF50'}
//                       />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => handleEditDepartment(item.id)}>
//                       <MaterialIcons name="edit" size={24} color="#4CAF50" />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => handleDeleteDepartment(item.id)}>
//                       <MaterialIcons name="delete" size={24} color="#F44336" />
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               )}
//             />
//           ) : (
//             <Text style={styles.noDataText}>No data found</Text>
//           )}
//         </View>
//       )}
//     </View>
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
//   imagePickerButton: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   imagePickerText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   imagePreview: {
//     width: '100%',
//     height: 200,
//     marginBottom: 10,
//     borderRadius: 8,
//   },
//   addButton: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
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
//   listItemImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
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
//   noDataText: {
//     textAlign: 'center',
//     fontSize: 18,
//     color: '#999',
//     marginTop: 20,
//   },
// });

// export default ManageDepartments;

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "react-native-vector-icons";
import axios from "axios";

const API_BASE_URL = "http://147.93.104.185:5000/api";

const ManageDepartments = () => {
  const [activeTab, setActiveTab] = useState("add");
  const [departmentName, setDepartmentName] = useState("");
  const [departmentImage, setDepartmentImage] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editDepartmentId, setEditDepartmentId] = useState(null);

  // Fetch departments from the API
  const fetchDepartments = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/departments`);
      setDepartments(response.data);
    } catch (error) {
      console.error("Error fetching departments:", error);
      Alert.alert("Error", "Failed to fetch departments. Please try again.");
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const handleAddOrUpdateDepartment = async () => {
    if (!departmentName.trim()) {
      Alert.alert("Validation Error", "Department name is required.");
      return;
    }

    if (!departmentImage) {
      Alert.alert("Validation Error", "Please select an image.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", departmentName);
      formData.append("image", {
        uri: departmentImage,
        name: "department_image.jpg",
        type: "image/jpeg",
      });

      if (isEditing) {
        // Update existing department
        await axios.put(
          `${API_BASE_URL}/departments/${editDepartmentId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        // Add new department
        await axios.post(`${API_BASE_URL}/departments`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      fetchDepartments(); // Refresh the list
      setDepartmentName("");
      setDepartmentImage(null);
      setIsEditing(false);
      setEditDepartmentId(null);
      setActiveTab("view");
    } catch (error) {
      console.error("Error saving department:", error);
      Alert.alert("Error", "Failed to save department. Please try again.");
    }
  };

  // const handleEditDepartment = (id) => {
  //   const departmentToEdit = departments.find(
  //     (department) => department._id === id
  //   );
  //   setDepartmentName(departmentToEdit.name);
  //   setDepartmentImage(departmentToEdit.image);
  //   setIsEditing(true);
  //   setEditDepartmentId(id);
  //   setActiveTab("add");
  // };

  const handleEditDepartment = (id) => {
    Alert.alert(
      "Edit Department",
      "Are you sure you want to edit this department?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Edit Cancelled"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            const departmentToEdit = departments.find(
              (department) => department._id === id
            );
            if (departmentToEdit) {
              setDepartmentName(departmentToEdit.name);
              setDepartmentImage(departmentToEdit.image);
              setIsEditing(true);
              setEditDepartmentId(id);
              setActiveTab("add");
            }
          },
        },
      ]
    );
  };
  
  // const handleDeleteDepartment = async (id) => {
  //   try {
  //     await axios.delete(`${API_BASE_URL}/departments/${id}`);
  //     fetchDepartments(); // Refresh the list
  //   } catch (error) {
  //     console.error("Error deleting department:", error);
  //     Alert.alert("Error", "Failed to delete department. Please try again.");
  //   }
  // };
  const handleDeleteDepartment = (id) => {
    Alert.alert(
      "Confirm Deletion", 
      "Are you sure you want to delete this department?", 
      [
        {
          text: "Cancel",
          onPress: () => console.log("Deletion Cancelled"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            try {
              await axios.delete(`${API_BASE_URL}/departments/${id}`);
              fetchDepartments(); // Refresh the list
            } catch (error) {
              console.error("Error deleting department:", error);
              Alert.alert("Error", "Failed to delete department. Please try again.");
            }
          },
        },
      ]
    );
  };
  

  // const toggleDepartmentStatus = async (id) => {
  //   try {
  //     const department = departments.find(
  //       (department) => department._id === id
  //     );
  //     await axios.put(`${API_BASE_URL}/departments/${id}`, {
  //       active: !department.active,
  //     });
  //     fetchDepartments(); // Refresh the list
  //   } catch (error) {
  //     console.error("Error toggling department status:", error);
  //     Alert.alert(
  //       "Error",
  //       "Failed to toggle department status. Please try again."
  //     );
  //   }
  // };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert(
        "Permission Denied",
        "You need to allow access to the media library."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setDepartmentImage(result.assets[0].uri);
    }
  };

  const filteredDepartments = departments.filter((department) =>
    department.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Departments</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "add" && styles.activeTab]}
          onPress={() => setActiveTab("add")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "add" && styles.activeTabText,
            ]}
          >
            Add Department
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "view" && styles.activeTab]}
          onPress={() => setActiveTab("view")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "view" && styles.activeTabText,
            ]}
          >
            View Departments
          </Text>
        </TouchableOpacity>
      </View>

      {/* Add Department Form */}
      {activeTab === "add" && (
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Department Name *"
            value={departmentName}
            onChangeText={(text) => setDepartmentName(text)}
          />
          <TouchableOpacity
            style={styles.imagePickerButton}
            onPress={pickImage}
          >
            <Text style={styles.imagePickerText}>
              {departmentImage ? "Change Image" : "Pick Image"}
            </Text>
          </TouchableOpacity>
          {departmentImage && (
            <Image
              source={{ uri: departmentImage }}
              style={styles.imagePreview}
            />
          )}
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddOrUpdateDepartment}
          >
            <Text style={styles.addButtonText}>
              {isEditing ? "Update Department" : "Add Department"}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* View Departments */}
      {activeTab === "view" && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Search Departments..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          {filteredDepartments.length > 0 ? (
            <FlatList
              style={styles.list}
              data={filteredDepartments}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <Image
                    source={{ uri: `http://147.93.104.185:5000/${item.image}` }}
                    style={styles.listItemImage}
                  />
                  <View style={styles.listContent}>
                    <Text style={styles.listText}>Department: {item.name}</Text>
                    <Text style={styles.listText}>
                      Status: {item.status ? "Active" : "Inactive"}
                    </Text>
                  </View>

                  {/* Make icons appear in a row */}
                  <View style={styles.iconContainer}>
                    {/* <TouchableOpacity
                      onPress={() => toggleDepartmentStatus(item._id)}
                    >
                      <MaterialIcons
                        name={item.status ? "cancel" : "check-circle"}
                        size={24}
                        color={item.inactive ? "#F44336" : "#4CAF50"}
                      />
                    </TouchableOpacity> */}
                    <TouchableOpacity
                      onPress={() => handleEditDepartment(item._id)}
                    >
                      <MaterialIcons name="edit" size={24} color="#4CAF50" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleDeleteDepartment(item._id)}
                    >
                      <MaterialIcons name="delete" size={24} color="#F44336" />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          ) : (
            <Text style={styles.noDataText}>No data found</Text>
          )}
        </View>
      )}
    </View>
  );
};

// Styles (same as before)
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  tabs: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "center",
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  tabText: {
    color: "#333",
    fontSize: 16,
  },
  activeTabText: {
    color: "#fff",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
  },
  input: {
    height: 52,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  imagePickerButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  imagePickerText: {
    color: "#fff",
    fontSize: 16,
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  list: {
    marginTop: 20,
  },
  listItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
  },
  listItemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  listContent: {
    flex: 1,
  },
  listText: {
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: "row", // Arrange icons horizontally
    justifyContent: "space-around", // Adjust spacing between icons
    alignItems: "center",
    width: 100, // Adjust width if needed
  },

  noDataText: {
    textAlign: "center",
    fontSize: 18,
    color: "#999",
    marginTop: 20,
  },
});

export default ManageDepartments;
