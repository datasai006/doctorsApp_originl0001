
// import React, { useState } from "react";
// import { View, Text, TextInput, StyleSheet, Image, Switch, TouchableOpacity, ScrollView } from "react-native";
// import * as ImagePicker from "expo-image-picker";

// const PatientProfile = () => {
//   const [isEditable, setIsEditable] = useState(false);
//   const [doctorDetails, setDoctorDetails] = useState({
//     name: "Mr. venky",
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

//   const saveDetails = () => {
//     setIsEditable(false);
//     console.log("Saved Details:", doctorDetails);
//   };

//   const handleAvailabilityToggle = () => {
//     setDoctorDetails((prevDetails) => ({
//       ...prevDetails,
//       available: !prevDetails.available,
//     }));
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.header}>Patient Profile</Text>
//       <View style={styles.card}>
//         <TouchableOpacity onPress={isEditable ? handleImageChange : null} style={styles.imageContainer}>
//           <Image source={{ uri: doctorDetails.profileImage }} style={styles.avatar} />
//           {isEditable && <Text style={styles.editImageText}>Edit Image</Text>}
//         </TouchableOpacity>
//         <View style={styles.infoContainer}>
//           <Text style={styles.name}>{doctorDetails.name}</Text>
//           <View style={styles.switchContainer}>
//             <Switch value={doctorDetails.available} onValueChange={handleAvailabilityToggle} />
//             <Text style={styles.availability}>
//               {doctorDetails.available ? "Available" : "Unavailable"}
//             </Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.form}>
//         {[
//           { placeholder: "Name", value: doctorDetails.name, key: "name" },
//           { placeholder: "Education", value: doctorDetails.education, key: "education" },
//           { placeholder: "Department", value: doctorDetails.department, key: "department" },
//           { placeholder: "Registration ID", value: doctorDetails.registrationId, key: "registrationId" },
//           { placeholder: "Experience", value: doctorDetails.experience, key: "experience" },
//           { placeholder: "Hospital Name", value: doctorDetails.hospitalName, key: "hospitalName" },
//           { placeholder: "City", value: doctorDetails.city, key: "city" },
//         ].map((field, index) => (
//           <TextInput
//             key={index}
//             style={[styles.input, isEditable ? null : styles.disabledInput]}
//             value={field.value}
//             onChangeText={(value) => setDoctorDetails({ ...doctorDetails, [field.key]: value })}
//             editable={isEditable}
//             placeholder={field.placeholder}
//           />
//         ))}
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
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f3f4f6",
//     padding: 16,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#374151",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   card: {
//     backgroundColor: "#ffffff",
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 20,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderWidth: 2,
//     borderColor: "#4ade80",
//   },
//   imageContainer: {
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   editImageText: {
//     color: "#3b82f6",
//     fontSize: 14,
//     marginTop: 8,
//   },
//   infoContainer: {
//     alignItems: "center",
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: "600",
//     color: "#1f2937",
//     marginBottom: 8,
//   },
//   switchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   availability: {
//     marginLeft: 8,
//     fontSize: 16,
//     color: "#6b7280",
//   },
//   form: {
//     backgroundColor: "#ffffff",
//     borderRadius: 12,
//     padding: 16,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 4,
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#d1d5db",
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 12,
//     backgroundColor: "#f9fafb",
//     color: "#1f2937",
//   },
//   disabledInput: {
//     backgroundColor: "#e5e7eb",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   saveButton: {
//     backgroundColor: "#10b981",
//     padding: 12,
//     borderRadius: 8,
//     minWidth: 120,
//     alignItems: "center",
//     marginBottom:25,
//   },
//   editButton: {
//     backgroundColor: "#3b82f6",
//     padding: 12,
//     borderRadius: 8,
//     minWidth: 120,
//     alignItems: "center",
//     marginBottom:20,
//   },
//   buttonText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
// });

// export default PatientProfile;

import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";

const PatientProfile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [patientDetails, setPatientDetails] = useState({
    name: "John Doe",
    age: "35",
    gender: "Male",
    medicalHistory: "None",
    profileImage: "https://via.placeholder.com/150",
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
        setPatientDetails({ ...patientDetails, profileImage: result.assets[0].uri });
      } else {
        console.log("User canceled the image picker");
      }
    } else {
      console.log("Permission to access media library is denied");
    }
  };

  const saveDetails = () => {
    setIsEditable(false);
    console.log("Saved Details:", patientDetails);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Patient Profile</Text>
      <View style={styles.card}>
        <TouchableOpacity onPress={isEditable ? handleImageChange : null} style={styles.imageContainer}>
          <Image source={{ uri: patientDetails.profileImage }} style={styles.avatar} />
          {isEditable && <Text style={styles.editImageText}>Edit Image</Text>}
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        {[
          { placeholder: "Name", value: patientDetails.name, key: "name" },
          { placeholder: "Age", value: patientDetails.age, key: "age" },
          { placeholder: "Gender", value: patientDetails.gender, key: "gender" },
          { placeholder: "Medical History", value: patientDetails.medicalHistory, key: "medicalHistory" },
        ].map((field, index) => (
          <TextInput
            key={index}
            style={[styles.input, isEditable ? null : styles.disabledInput]}
            value={field.value}
            onChangeText={(value) => setPatientDetails({ ...patientDetails, [field.key]: value })}
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
  },
  editButton: {
    backgroundColor: "#3b82f6",
    padding: 12,
    borderRadius: 8,
    minWidth: 120,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default PatientProfile;
