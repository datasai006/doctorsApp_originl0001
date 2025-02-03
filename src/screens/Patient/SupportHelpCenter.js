import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Card, Button, Avatar, Text, IconButton } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';

const SupportHelpCenter = () => {
  const handleFAQPress = () => {
    Alert.alert('FAQs', 'Here you can display a list of frequently asked questions.');
  };

  const handleContactSupportPress = () => {
    Alert.alert(
      'Contact Support',
      'You can reach us at support@example.com or call us at +1-800-123-4567.'
    );
  };

  const handleReportIssuePress = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // Allows all file types; change this to restrict formats (e.g., 'application/pdf')
        copyToCacheDirectory: true,
      });

      if (result.type === 'success') {
        Alert.alert(
          'File Selected',
          `You have selected: ${result.name}\nFile size: ${(result.size / 1024).toFixed(2)} KB`
        );

        // Implement logic to upload the file here, e.g., using fetch or axios
      } else {
        Alert.alert('No file selected.');
      }
    } catch (error) {
      Alert.alert('Error', `Could not open document picker: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Support & Help Center</Text>
      <Card style={styles.card}>
        <Card.Title
          title="FAQs"
          subtitle="Frequently Asked Questions"
          left={(props) => <Avatar.Icon {...props} icon="help-circle-outline" />}
        />
        <Card.Actions>
          <Button onPress={handleFAQPress}>View FAQs</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Title
          title="Contact Support"
          subtitle="Get in touch with us"
          left={(props) => <Avatar.Icon {...props} icon="phone" />}
        />
        <Card.Actions>
          <Button onPress={handleContactSupportPress}>Contact Us</Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Title
          title="Report an Issue"
          subtitle="Upload a document or screenshot"
          left={(props) => <Avatar.Icon {...props} icon="file-upload" />}
          right={(props) => (
            <IconButton {...props} icon="upload" onPress={handleReportIssuePress} />
          )}
        />
      </Card>
    </View>
  );
};

export default SupportHelpCenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 4,
  },
});
