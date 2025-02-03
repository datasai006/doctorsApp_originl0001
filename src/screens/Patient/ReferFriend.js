// import React from 'react';
// import { View, StyleSheet, Alert } from 'react-native';
// import { Text, Button, Card, TextInput } from 'react-native-paper';
// import * as Clipboard from 'expo-clipboard';
// import * as Sharing from 'expo-sharing';

// const ReferFriend = () => {
//   const referralCode = 'REF12345'; // Replace with your actual referral code or generate dynamically

//   const handleCopyCode = () => {
//     Clipboard.setStringAsync(referralCode);
//     Alert.alert('Copied to Clipboard', 'Referral code copied successfully!');
//   };

//   const handleShare = async () => {
//     const message = `Hey! Check out this amazing app. Use my referral code "${referralCode}" to sign up and enjoy benefits!`;
//     try {
//       if (await Sharing.isAvailableAsync()) {
//         await Sharing.shareAsync(null, { dialogTitle: 'Share Referral Code', message });
//       } else {
//         Alert.alert('Error', 'Sharing is not supported on this device.');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to share the referral code.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Refer a Friend</Text>
//       <Card style={styles.card}>
//         <Card.Content>
//           <Text style={styles.description}>
//             Share your referral code with your friends and earn rewards when they sign up using your code.
//           </Text>
//           <TextInput
//             label="Your Referral Code"
//             value={referralCode}
//             mode="outlined"
//             editable={false}
//             style={styles.input}
//           />
//           <View style={styles.buttonContainer}>
//             <Button mode="outlined" onPress={handleCopyCode} style={styles.button}>
//               Copy Code
//             </Button>
//             <Button mode="contained" onPress={handleShare} style={styles.button}>
//               Share Code
//             </Button>
//           </View>
//         </Card.Content>
//       </Card>
//     </View>
//   );
// };

// export default ReferFriend;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#333',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 20,
//     elevation: 4,
//   },
//   description: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   button: {
//     flex: 1,
//     marginHorizontal: 5,
//   },
// });


// import React from 'react';
// import { View, StyleSheet, Alert, Linking } from 'react-native';
// import { Text, Button, Card, TextInput } from 'react-native-paper';
// import * as Clipboard from 'expo-clipboard';

// const ReferFriend = () => {
//   const referralCode = 'REF12345'; // Replace with your actual referral code or generate dynamically

//   const handleCopyCode = () => {
//     Clipboard.setStringAsync(referralCode);
//     Alert.alert('Copied to Clipboard', 'Referral code copied successfully!');
//   };

//   const handleShareWhatsApp = async () => {
//     const message = `Hey! Check out this amazing app. Use my referral code "${referralCode}" to sign up and enjoy benefits!`;
//     const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;

//     try {
//       const supported = await Linking.canOpenURL(whatsappUrl);
//       if (supported) {
//         Linking.openURL(whatsappUrl);
//       } else {
//         Alert.alert('Error', 'WhatsApp is not installed on this device.');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to share the referral code via WhatsApp.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Refer a Friend</Text>
//       <Card style={styles.card}>
//         <Card.Content>
//           <Text style={styles.description}>
//             Share your referral code with your friends and earn rewards when they sign up using your code.
//           </Text>
//           <TextInput
//             label="Your Referral Code"
//             value={referralCode}
//             mode="outlined"
//             editable={false}
//             style={styles.input}
//           />
//           <View style={styles.buttonContainer}>
//             <Button
//               mode="outlined"
//               onPress={handleCopyCode}
//               style={styles.button}
//               buttonColor="#00B4F6"
//               textColor="#fff"
//             >
//               Copy Code
//             </Button>
//             <Button
//               mode="contained"
//               onPress={handleShareWhatsApp}
//               style={styles.button}
//               buttonColor="#00B4F6"
//             >
//               Share on WhatsApp
//             </Button>
//           </View>
//         </Card.Content>
//       </Card>
//     </View>
//   );
// };

// export default ReferFriend;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#333',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 20,
//     elevation: 4,
//   },
//   description: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   button: {
//     flex: 1,
//     marginHorizontal: 5,
//   },
// });


import React from 'react';
import { View, StyleSheet, Alert, Linking, ImageBackground } from 'react-native';
import { Text, Button, Card, TextInput } from 'react-native-paper';
import * as Clipboard from 'expo-clipboard';

const ReferFriend = () => {
  const referralCode = 'REF12345'; // Replace with your actual referral code or generate dynamically

  const handleCopyCode = () => {
    Clipboard.setStringAsync(referralCode);
    Alert.alert('Copied to Clipboard', 'Referral code copied successfully!');
  };

  const handleShareWhatsApp = async () => {
    const message = `Hey! Check out this amazing app. Use my referral code "${referralCode}" to sign up and enjoy benefits!`;
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;

    try {
      const supported = await Linking.canOpenURL(whatsappUrl);
      if (supported) {
        Linking.openURL(whatsappUrl);
      } else {
        Alert.alert('Error', 'WhatsApp is not installed on this device.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to share the referral code via WhatsApp.');
    }
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://i.ibb.co/VNydQQ8/background.jpg',
      }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.header}>Refer a Friend</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.description}>
              Share your referral code with your friends and earn rewards when they sign up using your code.
            </Text>
            <TextInput
              label="Your Referral Code"
              value={referralCode}
              mode="outlined"
              editable={false}
              style={styles.input}
            />
            <View style={styles.buttonContainer}>
              <Button
                mode="outlined"
                onPress={handleCopyCode}
                style={styles.button}
                buttonColor="#00B4F6"
                textColor="#fff"
              >
                Copy Code
              </Button>
              <Button
                mode="contained"
                onPress={handleShareWhatsApp}
                style={styles.button}
                buttonColor="#00B4F6"
              >
                Share on WhatsApp
              </Button>
            </View>
          </Card.Content>
        </Card>
      </View>
    </ImageBackground>
  );
};

export default ReferFriend;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 22,
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 3,
    borderRadius: 8,
  },
});
