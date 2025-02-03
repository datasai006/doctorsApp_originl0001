
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BookAppointments = () => {
  const scrollViewRef = useRef(null);
  const [searchText, setSearchText] = useState('');
  
  const departments = [
    { id: 1, iconName: 'favorite', name: 'Cardiology' },
    { id: 2, iconName: 'psychology', name: 'Neurology' },
    { id: 3, iconName: 'healing', name: 'Orthopedics' },
    { id: 4, iconName: 'child-care', name: 'Pediatrics' },
  ];

  const hospitals = [
    { id: 1, name: 'City Hospital', address: '123 Main Street, Cityville' },
    { id: 2, name: 'Metro Hospital', address: '456 High Street, Metropolis' },
    { id: 3, name: 'Green Valley Hospital', address: '789 Elm Street, Green Town' },
    { id: 4, name: 'Lakeview Hospital', address: '101 River Road, Lake City' },
    { id: 5, name: 'Sunshine Hospital', address: '202 Sunshine Blvd, Sunnyvale' },
    { id: 6, name: 'Hilltop Hospital', address: '303 Hilltop Drive, Mountainview' },
  ];

  const recommendedHospitals = hospitals.slice(0, 3);

  const renderDepartment = ({ item }) => (
    <View style={styles.departmentCard}>
      <Icon name={item.iconName} size={40} color="#EC268F" style={styles.departmentIcon} />
      <Text style={styles.departmentName}>{item.name}</Text>
    </View>
  );

  const renderHospital = ({ item }) => (
    <View style={styles.hospitalCardImproved}>
      <View style={styles.hospitalCardHeader}>
        <Text style={styles.hospitalName}>{item.name}</Text>
      </View>
      <Text style={styles.hospitalAddress}>{item.address}</Text>
    </View>
  );

  const handleSearch = (text) => {
    setSearchText(text);
  };

  // Filtered lists based on the search text
  const filteredDepartments = departments.filter((department) =>
    department.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(searchText.toLowerCase()) ||
    hospital.address.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredRecommendedHospitals = recommendedHospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(searchText.toLowerCase()) ||
    hospital.address.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Icon name="search" size={24} color="#aaa" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for hospitals, departments, etc."
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>

        {/* Departments Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Departments</Text>
          {filteredDepartments.length > 0 ? (
            <FlatList
              data={filteredDepartments}
              renderItem={renderDepartment}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <Text style={styles.noResultsText}>No departments found.</Text>
          )}
        </View>

        {/* Recommended Hospitals Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommended Hospitals</Text>
          {filteredRecommendedHospitals.length > 0 ? (
            <FlatList
              data={filteredRecommendedHospitals}
              renderItem={renderHospital}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <Text style={styles.noResultsText}>No recommended hospitals found.</Text>
          )}
        </View>

        {/* Hospitals Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hospitals</Text>
          {filteredHospitals.length > 0 ? (
            <FlatList
              data={filteredHospitals}
              renderItem={renderHospital}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.hospitalsList}
              numColumns={1}
            />
          ) : (
            <Text style={styles.noResultsText}>No hospitals found.</Text>
          )}
        </View>
      </ScrollView>

      {/* Scroll to Top Button */}
      <TouchableOpacity
        style={styles.scrollToTopButton}
        onPress={() => scrollViewRef.current.scrollTo({ y: 0, animated: true })}
      >
        <Icon name="arrow-upward" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  searchInput: { marginLeft: 10, flex: 1 },
  section: { marginTop: 20, paddingHorizontal: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  departmentCard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  departmentIcon: { marginBottom: 10 },
  departmentName: { fontSize: 14, fontWeight: 'bold' },
  hospitalsList: { justifyContent: 'space-between', paddingHorizontal: 5 },
  hospitalCardImproved: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    padding: 15,
    borderWidth: 1,
    borderColor: '#e6e6e6',
  },
  hospitalCardHeader: {
    backgroundColor: '#00B4F6',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  hospitalName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  hospitalAddress: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 5,
  },
  scrollToTopButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#00B4F6',
    padding: 15,
    borderRadius: 50,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  noResultsText: { fontSize: 14, color: '#aaa', textAlign: 'center', marginTop: 10 },
});

export default BookAppointments;
