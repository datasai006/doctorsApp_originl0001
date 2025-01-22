import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import { Card, Avatar, Button, Chip } from 'react-native-paper';

const EmergencyOPScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([
    {
      id: '1',
      patientName: 'John Doe',
      mobileNumber: '9876543210',
      hospitalName: 'City Hospital',
      doctorName: 'Dr. Smith',
      status: 'Approved',
    },
    {
      id: '2',
      patientName: 'Jane Doe',
      mobileNumber: '8765432109',
      hospitalName: 'Apollo Clinic',
      doctorName: 'Dr. Brown',
      status: 'Pending',
    },
    {
      id: '3',
      patientName: 'Sam Wilson',
      mobileNumber: '7654321098',
      hospitalName: 'Fortis Hospital',
      doctorName: 'Dr. White',
      status: 'Rejected',
    },
  ]);

  // Filtered data based on search query
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title
        title={item.patientName}
        subtitle={`Mobile: ${item.mobileNumber}`}
        left={(props) => <Avatar.Text {...props} label={item.patientName.charAt(0)} />}
      />
      <Card.Content>
        <Text>Hospital: {item.hospitalName}</Text>
        <Text>Doctor: {item.doctorName}</Text>
        <Chip
          style={[
            styles.chip,
            {
              backgroundColor:
                item.status === 'Approved'
                  ? 'green'
                  : item.status === 'Pending'
                  ? 'orange'
                  : 'red',
            },
          ]}
        >
          {item.status}
        </Chip>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.emptyMessage}>No results found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  searchBar: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  card: {
    marginBottom: 10,
  },
  chip: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#FFF',
    textAlign: 'center',
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#999',
  },
});

export default EmergencyOPScreen;
