import React from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';

const PrivacyPolicy = () => {
  const handleAcknowledgePress = () => {
    Alert.alert('Acknowledged', 'Thank you for reading our Privacy Policy.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Privacy & Policy</Text>
      <ScrollView style={styles.scrollView}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.content}>
              Welcome to our app! We are committed to protecting your privacy and
              ensuring your data is handled securely. Below is a summary of our privacy policy:
            </Text>

            <Text style={styles.title}>1. Data Collection</Text>
            <Text style={styles.content}>
              We collect personal information such as name, email address, phone number, 
              and usage data when you use our app. This data is used to improve the app's 
              performance and provide better services.
            </Text>

            <Text style={styles.title}>2. Data Usage</Text>
            <Text style={styles.content}>
              Your data is used for the following purposes:
              - To provide app functionalities.
              - To improve app features and user experience.
              - To communicate updates and important information.
            </Text>

            <Text style={styles.title}>3. Data Sharing</Text>
            <Text style={styles.content}>
              We do not sell or share your personal information with third parties, 
              except as required by law or to provide services through trusted partners.
            </Text>

            <Text style={styles.title}>4. Security</Text>
            <Text style={styles.content}>
              We implement strict measures to secure your data and prevent unauthorized access. 
              However, no system is completely foolproof, and we cannot guarantee absolute security.
            </Text>

            <Text style={styles.title}>5. Your Rights</Text>
            <Text style={styles.content}>
              You have the right to access, update, and delete your personal data at any time. 
              For inquiries, contact our support team at support@example.com.
            </Text>

            <Text style={styles.title}>6. Updates</Text>
            <Text style={styles.content}>
              This Privacy Policy may be updated periodically. We encourage you to review 
              it regularly for any changes.
            </Text>
          </Card.Content>
        </Card>
      </ScrollView>
      <Button
        mode="contained"
        style={styles.button}
        onPress={handleAcknowledgePress}
      >
        I Acknowledge
      </Button>
    </View>
  );
};

export default PrivacyPolicy;

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
  scrollView: {
    marginBottom: 20,
  },
  card: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    color: '#555',
  },
  content: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
});
