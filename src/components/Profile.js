// import React, { useState } from "react";
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Switch } from "react-native";
// import { Avatar, Button } from "react-native-elements";
// import Icon from "react-native-vector-icons/MaterialIcons";

// const Profile = () => {
//   const [isEditable, setIsEditable] = useState(false);
//   const [doctorDetails, setDoctorDetails] = useState({
//     name: "Dr. John Doe",
//     education: "MBBS, MD",
//     department: "Cardiology",
//     registrationId: "12345",
//     experience: "10 years",
//     hospitalName: "City Hospital",
//     city: "New York",
//     profileImage: "https://via.placeholder.com/150",
//     available: true,
//   });

//   const toggleEdit = () => {
//     setIsEditable(!isEditable);
//   };

//   const handleChange = (field, value) => {
//     setDoctorDetails({ ...doctorDetails, [field]: value });
//   };

//   const saveDetails = () => {
//     setIsEditable(false);
//     console.log("Saved Details: ", doctorDetails);
//     // Add API call to save the details
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Doctor Profile</Text>
//       <View style={styles.profileHeader}>
//         <Avatar
//           rounded
//           source={{ uri: doctorDetails.profileImage }}
//           size="large"
//           containerStyle={styles.avatar}
//         />
//         <View style={styles.headerDetails}>
//           <Text style={styles.name}>{doctorDetails.name}</Text>
//           <View style={styles.availability}>
//             <Switch
//               value={doctorDetails.available}
//               onValueChange={(value) => handleChange("available", value)}
//             />
//             <Text style={styles.availabilityText}>
//               {doctorDetails.available ? "Available" : "Unavailable"}
//             </Text>
//           </View>
//         </View>
//       </View>

//       <View style={styles.form}>
//         {Object.keys(doctorDetails).map((key) => {
//           if (key === "profileImage" || key === "available") return null; // Skip non-editable fields
//           return (
//             <TextInput
//               key={key}
//               style={[styles.input, isEditable ? styles.editable : styles.readOnly]}
//               value={doctorDetails[key]}
//               onChangeText={(value) => handleChange(key, value)}
//               editable={isEditable}
//               placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
//             />
//           );
//         })}
//       </View>

//       <View style={styles.actionButtons}>
//         {isEditable ? (
//           <Button
//             title="Save"
//             icon={<Icon name="save" size={20} color="white" />}
//             onPress={saveDetails}
//             buttonStyle={styles.saveButton}
//           />
//         ) : (
//           <TouchableOpacity onPress={toggleEdit}>
//             <Icon name="edit" size={30} color="#007BFF" />
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   profileHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   avatar: {
//     marginRight: 20,
//   },
//   headerDetails: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   availability: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   availabilityText: {
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   form: {
//     marginTop: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 15,
//   },
//   editable: {
//     backgroundColor: "#f9f9f9",
//   },
//   readOnly: {
//     backgroundColor: "#e9ecef",
//   },
//   actionButtons: {
//     marginTop: 20,
//     alignItems: "center",
//   },
//   saveButton: {
//     backgroundColor: "#007BFF",
//   },
// });

// export default Profile;


// import React, { useState } from "react";
// import { View, Text, TextInput, StyleSheet, Image, Switch, TouchableOpacity } from "react-native";
// import { useRouter } from "expo-router";

// const Profile = () => {
//   const [isEditable, setIsEditable] = useState(false);
//   const [doctorDetails, setDoctorDetails] = useState({
//     name: "Dr. John Doe",
//     education: "MBBS, MD",
//     department: "Cardiology",
//     registrationId: "12345",
//     experience: "10 years",
//     hospitalName: "City Hospital",
//     city: "New York",
//     profileImage: "https://via.placeholder.com/150",
//     available: true,
//   });

//   const router = useRouter();

//   const toggleEdit = () => {
//     setIsEditable(!isEditable);
//   };

//   const handleChange = (field, value) => {
//     setDoctorDetails({ ...doctorDetails, [field]: value });
//   };

//   const saveDetails = () => {
//     setIsEditable(false);
//     console.log("Saved Details: ", doctorDetails);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Doctor Profile</Text>
//       <View style={styles.profileContainer}>
//         <Image source={{ uri: doctorDetails.profileImage }} style={styles.avatar} />
//         <View style={styles.infoContainer}>
//           <Text style={styles.name}>{doctorDetails.name}</Text>
//           <View style={styles.switchContainer}>
//             <Switch
//               value={doctorDetails.available}
//               onValueChange={() => handleChange("available", !doctorDetails.available)}
//             />
//             <Text style={styles.availability}>
//               {doctorDetails.available ? "Available" : "Unavailable"}
//             </Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.form}>
//         <TextInput
//           style={[styles.input, isEditable ? null : styles.disabledInput]}
//           value={doctorDetails.name}
//           onChangeText={(value) => handleChange("name", value)}
//           editable={isEditable}
//           placeholder="Name"
//         />
//         <TextInput
//           style={[styles.input, isEditable ? null : styles.disabledInput]}
//           value={doctorDetails.education}
//           onChangeText={(value) => handleChange("education", value)}
//           editable={isEditable}
//           placeholder="Education"
//         />
//         <TextInput
//           style={[styles.input, isEditable ? null : styles.disabledInput]}
//           value={doctorDetails.department}
//           onChangeText={(value) => handleChange("department", value)}
//           editable={isEditable}
//           placeholder="Department"
//         />
//         <TextInput
//           style={[styles.input, isEditable ? null : styles.disabledInput]}
//           value={doctorDetails.registrationId}
//           onChangeText={(value) => handleChange("registrationId", value)}
//           editable={isEditable}
//           placeholder="Registration ID"
//         />
//         <TextInput
//           style={[styles.input, isEditable ? null : styles.disabledInput]}
//           value={doctorDetails.experience}
//           onChangeText={(value) => handleChange("experience", value)}
//           editable={isEditable}
//           placeholder="Experience"
//         />
//         <TextInput
//           style={[styles.input, isEditable ? null : styles.disabledInput]}
//           value={doctorDetails.hospitalName}
//           onChangeText={(value) => handleChange("hospitalName", value)}
//           editable={isEditable}
//           placeholder="Hospital Name"
//         />
//         <TextInput
//           style={[styles.input, isEditable ? null : styles.disabledInput]}
//           value={doctorDetails.city}
//           onChangeText={(value) => handleChange("city", value)}
//           editable={isEditable}
//           placeholder="City/Town"
//         />
//       </View>
//       <View style={styles.buttonContainer}>
//         {isEditable ? (
//           <TouchableOpacity style={styles.saveButton} onPress={saveDetails}>
//             <Text style={styles.buttonText}>Save</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.editButton} onPress={toggleEdit}>
//             <Text style={styles.buttonText}>Edit</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f5f5f5",
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   profileContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginRight: 20,
//   },
//   infoContainer: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   switchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   availability: {
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   form: {
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//     backgroundColor: "#fff",
//   },
//   disabledInput: {
//     backgroundColor: "#e0e0e0",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "flex-end",
//   },
//   saveButton: {
//     backgroundColor: "#4caf50",
//     padding: 10,
//     borderRadius: 5,
//   },
//   editButton: {
//     backgroundColor: "#2196f3",
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default Profile;


// import React, { useState } from "react";
// import { View, Text, TextInput, StyleSheet, Image, Switch, TouchableOpacity } from "react-native";
// import * as ImagePicker from 'expo-image-picker';

// const Profile = () => {
//   const [isEditable, setIsEditable] = useState(false); // Edit mode state
//   const [doctorDetails, setDoctorDetails] = useState({
//     name: "Dr. John Doe",
//     education: "MBBS, MD",
//     department: "Cardiology",
//     registrationId: "12345",
//     experience: "10 years",
//     hospitalName: "City Hospital",
//     city: "New York",
//     profileImage: "https://via.placeholder.com/150",
//     available: true, // Availability status
//   });

//   // Toggle edit mode
//   const toggleEdit = () => {
//     setIsEditable(!isEditable);
//   };

//   // Handle image change
//   const handleImageChange = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permissionResult.granted) {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaType: ImagePicker.MediaTypeOptions.Images,
//         quality: 1,
//       });

//       if (!result.canceled) {
//         setDoctorDetails({ ...doctorDetails, profileImage: result.assets[0].uri });
//       } else {
//         console.log("User canceled the image picker");
//       }
//     } else {
//       console.log("Permission to access media library is denied");
//     }
//   };

//   // Save the details when in editable mode
//   const saveDetails = () => {
//     setIsEditable(false);
//     console.log("Saved Details:", doctorDetails);
//   };

//   // Handle availability toggle
//   const handleAvailabilityToggle = () => {
//     setDoctorDetails((prevDetails) => ({
//       ...prevDetails,
//       available: !prevDetails.available,
//     }));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Doctor Profile</Text>
//       <View style={styles.profileContainer}>
//         <TouchableOpacity onPress={isEditable ? handleImageChange : null} style={styles.imageContainer}>
//           <Image source={{ uri: doctorDetails.profileImage }} style={styles.avatar} />
//           {isEditable && <Text style={styles.editImageText}>Edit Image</Text>}
//         </TouchableOpacity>
//         <View style={styles.infoContainer}>
//           <Text style={styles.name}>{doctorDetails.name}</Text>
//           <View style={styles.switchContainer}>
//             <Switch
//               value={doctorDetails.available}
//               onValueChange={handleAvailabilityToggle} // Independent toggle
//             />
//             <Text style={styles.availability}>
//               {doctorDetails.available ? "Available" : "Unavailable"}
//             </Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.form}>
//         <TextInput
//           style={[styles.input, isEditable ? null : styles.disabledInput]}
//           value={doctorDetails.name}
//           onChangeText={(value) =>
//             setDoctorDetails({ ...doctorDetails, name: value })
//           }
//           editable={isEditable}
//           placeholder="Name"
//         />
//         <TextInput
//           style={[styles.input, isEditable ? null : styles.disabledInput]}
//           value={doctorDetails.education}
//           onChangeText={(value) =>
//             setDoctorDetails({ ...doctorDetails, education: value })
//           }
//           editable={isEditable}
//           placeholder="Education"
//         />
//         <TextInput
//           style={[styles.input, isEditable ? null : styles.disabledInput]}
//           value={doctorDetails.department}
//           onChangeText={(value) =>
//             setDoctorDetails({ ...doctorDetails, department: value })
//           }
//           editable={isEditable}
//           placeholder="Department"
//         />
//         <TextInput
//           style={[styles.input, isEditable ? null : styles.disabledInput]}
//           value={doctorDetails.registrationId}
//           onChangeText={(value) =>
//             setDoctorDetails({ ...doctorDetails, registrationId: value })
//           }
//           editable={isEditable}
//           placeholder="Registration ID"
//         />
//         <TextInput
//           style={[styles.input, isEditable ? null : styles.disabledInput]}
//           value={doctorDetails.experience}
//           onChangeText={(value) =>
//             setDoctorDetails({ ...doctorDetails, experience: value })
//           }
//           editable={isEditable}
//           placeholder="Experience"
//         />
//         <TextInput
//           style={[styles.input, isEditable ? null : styles.disabledInput]}
//           value={doctorDetails.hospitalName}
//           onChangeText={(value) =>
//             setDoctorDetails({ ...doctorDetails, hospitalName: value })
//           }
//           editable={isEditable}
//           placeholder="Hospital Name"
//         />
//         <TextInput
//           style={[styles.input, isEditable ? null : styles.disabledInput]}
//           value={doctorDetails.city}
//           onChangeText={(value) =>
//             setDoctorDetails({ ...doctorDetails, city: value })
//           }
//           editable={isEditable}
//           placeholder="City"
//         />
//       </View>
//       <View style={styles.buttonContainer}>
//         {isEditable ? (
//           <TouchableOpacity style={styles.saveButton} onPress={saveDetails}>
//             <Text style={styles.buttonText}>Save</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.editButton} onPress={toggleEdit}>
//             <Text style={styles.buttonText}>Edit</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f5f5f5",
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   profileContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderWidth: 1,
//     borderColor: "#ccc",
//   },
//   imageContainer: {
//     alignItems: "center",
//   },
//   editImageText: {
//     color: "#007BFF",
//     fontSize: 14,
//     marginTop: 5,
//   },
//   infoContainer: {
//     flex: 1,
//     marginLeft: 20,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   switchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   availability: {
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   form: {
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//     backgroundColor: "#fff",
//   },
//   disabledInput: {
//     backgroundColor: "#e0e0e0",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "flex-end",
//   },
//   saveButton: {
//     backgroundColor: "#4caf50",
//     padding: 10,
//     borderRadius: 5,
//   },
//   editButton: {
//     backgroundColor: "#2196f3",
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default Profile;


import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, Switch, TouchableOpacity, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Profile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [doctorDetails, setDoctorDetails] = useState({
    name: "Dr. John Doe",
    education: "MBBS, MD",
    department: "Cardiology",
    registrationId: "12345",
    experience: "10 years",
    hospitalName: "City Hospital",
    city: "New York",
    profileImage: "https://via.placeholder.com/150",
    available: true,
  });

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleImageChange = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaType: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.canceled) {
        setDoctorDetails({ ...doctorDetails, profileImage: result.assets[0].uri });
      } else {
        console.log("User canceled the image picker");
      }
    } else {
      console.log("Permission to access media library is denied");
    }
  };

  const saveDetails = () => {
    setIsEditable(false);
    console.log("Saved Details:", doctorDetails);
  };

  const handleAvailabilityToggle = () => {
    setDoctorDetails((prevDetails) => ({
      ...prevDetails,
      available: !prevDetails.available,
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Doctor Profile</Text>
      <View style={styles.card}>
        <TouchableOpacity onPress={isEditable ? handleImageChange : null} style={styles.imageContainer}>
          <Image source={{ uri: doctorDetails.profileImage }} style={styles.avatar} />
          {isEditable && <Text style={styles.editImageText}>Edit Image</Text>}
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{doctorDetails.name}</Text>
          <View style={styles.switchContainer}>
            <Switch value={doctorDetails.available} onValueChange={handleAvailabilityToggle} />
            <Text style={styles.availability}>
              {doctorDetails.available ? "Available" : "Unavailable"}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.form}>
        {[
          { placeholder: "Name", value: doctorDetails.name, key: "name" },
          { placeholder: "Education", value: doctorDetails.education, key: "education" },
          { placeholder: "Department", value: doctorDetails.department, key: "department" },
          { placeholder: "Registration ID", value: doctorDetails.registrationId, key: "registrationId" },
          { placeholder: "Experience", value: doctorDetails.experience, key: "experience" },
          { placeholder: "Hospital Name", value: doctorDetails.hospitalName, key: "hospitalName" },
          { placeholder: "City", value: doctorDetails.city, key: "city" },
        ].map((field, index) => (
          <TextInput
            key={index}
            style={[styles.input, isEditable ? null : styles.disabledInput]}
            value={field.value}
            onChangeText={(value) => setDoctorDetails({ ...doctorDetails, [field.key]: value })}
            editable={isEditable}
            placeholder={field.placeholder}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {isEditable ? (
          <TouchableOpacity style={styles.saveButton} onPress={saveDetails}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.editButton} onPress={toggleEdit}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#374151",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#4ade80",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  editImageText: {
    color: "#3b82f6",
    fontSize: 14,
    marginTop: 8,
  },
  infoContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 8,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  availability: {
    marginLeft: 8,
    fontSize: 16,
    color: "#6b7280",
  },
  form: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#f9fafb",
    color: "#1f2937",
  },
  disabledInput: {
    backgroundColor: "#e5e7eb",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  saveButton: {
    backgroundColor: "#10b981",
    padding: 12,
    borderRadius: 8,
    minWidth: 120,
    alignItems: "center",
    marginBottom:25,
  },
  editButton: {
    backgroundColor: "#3b82f6",
    padding: 12,
    borderRadius: 8,
    minWidth: 120,
    alignItems: "center",
    marginBottom:20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Profile;


// import React, { useState } from "react";
// import { View, Text, TextInput, StyleSheet, Image, Switch, TouchableOpacity, FlatList } from "react-native";
// import * as ImagePicker from 'expo-image-picker';

// const Profile = () => {
//   const [isEditable, setIsEditable] = useState(false); // Edit mode state
//   const [doctorDetails, setDoctorDetails] = useState({
//     name: "Dr. John Doe",
//     education: "MBBS, MD",
//     department: "Cardiology",
//     registrationId: "12345",
//     experience: "10 years",
//     hospitalName: "City Hospital",
//     city: "New York",
//     profileImage: "https://via.placeholder.com/150",
//     available: true, // Availability status
//   });

//   // Define fields for FlatList
//   const fields = [
//     { id: "1", key: "name", label: "Name" },
//     { id: "2", key: "education", label: "Education" },
//     { id: "3", key: "department", label: "Department" },
//     { id: "4", key: "registrationId", label: "Registration ID" },
//     { id: "5", key: "experience", label: "Experience" },
//     { id: "6", key: "hospitalName", label: "Hospital Name" },
//     { id: "7", key: "city", label: "City" },
//   ];

//   // Toggle edit mode
//   const toggleEdit = () => {
//     setIsEditable(!isEditable);
//   };

//   // Handle image change
//   const handleImageChange = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permissionResult.granted) {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaType: ImagePicker.MediaTypeOptions.Images,
//         quality: 1,
//       });

//       if (!result.canceled) {
//         setDoctorDetails({ ...doctorDetails, profileImage: result.assets[0].uri });
//       } else {
//         console.log("User canceled the image picker");
//       }
//     } else {
//       console.log("Permission to access media library is denied");
//     }
//   };

//   // Save the details when in editable mode
//   const saveDetails = () => {
//     setIsEditable(false);
//     console.log("Saved Details:", doctorDetails);
//   };

//   // Handle availability toggle
//   const handleAvailabilityToggle = () => {
//     setDoctorDetails((prevDetails) => ({
//       ...prevDetails,
//       available: !prevDetails.available,
//     }));
//   };

//   // Render FlatList item
//   const renderItem = ({ item }) => (
//     <View>
//       <Text style={styles.label}>{item.label}</Text>
//       <TextInput
//         style={[styles.input, isEditable ? null : styles.disabledInput]}
//         value={doctorDetails[item.key]}
//         onChangeText={(value) => setDoctorDetails({ ...doctorDetails, [item.key]: value })}
//         editable={isEditable}
//         placeholder={item.label}
//       />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Doctor Profile</Text>
//       <View style={styles.profileContainer}>
//         <TouchableOpacity onPress={isEditable ? handleImageChange : null} style={styles.imageContainer}>
//           <Image source={{ uri: doctorDetails.profileImage }} style={styles.avatar} />
//           {isEditable && <Text style={styles.editImageText}>Edit Image</Text>}
//         </TouchableOpacity>
//         <View style={styles.infoContainer}>
//           <Text style={styles.name}>{doctorDetails.name}</Text>
//           <View style={styles.switchContainer}>
//             <Switch
//               value={doctorDetails.available}
//               onValueChange={handleAvailabilityToggle} // Independent toggle
//             />
//             <Text style={styles.availability}>
//               {doctorDetails.available ? "Available" : "Unavailable"}
//             </Text>
//           </View>
//         </View>
//       </View>
//       <FlatList
//         data={fields}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.form}
//       />
//       <View style={styles.buttonContainer}>
//         {isEditable ? (
//           <TouchableOpacity style={styles.saveButton} onPress={saveDetails}>
//             <Text style={styles.buttonText}>Save</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.editButton} onPress={toggleEdit}>
//             <Text style={styles.buttonText}>Edit</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f5f5f5",
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   profileContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderWidth: 1,
//     borderColor: "#ccc",
//   },
//   imageContainer: {
//     alignItems: "center",
//   },
//   editImageText: {
//     color: "#007BFF",
//     fontSize: 14,
//     marginTop: 5,
//   },
//   infoContainer: {
//     flex: 1,
//     marginLeft: 20,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   switchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   availability: {
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   form: {
//     paddingBottom: 20,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: "bold",
//     marginBottom: 5,
//     color: "#333",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//     backgroundColor: "#fff",
//   },
//   disabledInput: {
//     backgroundColor: "#e0e0e0",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "flex-end",
//   },
//   saveButton: {
//     backgroundColor: "#4caf50",
//     padding: 10,
//     borderRadius: 5,
//   },
//   editButton: {
//     backgroundColor: "#2196f3",
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default Profile;
