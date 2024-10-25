import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GradientButton from '../../../components/GradientButton'; // Adjust the import based on your file structure
import styles from './styles';

const ReportedPage = ({ route, navigation }) => {
  const { crime, message } = route.params; // Receive crime and message from SOS

  // Edit button function
  const handleEdit = () => {
    navigation.navigate('SOS', { crime, message }); // Pass existing data back
  };

  // Set header options to include the Edit button
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleThankYouPage = () => {
    navigation.navigate('ThankYouPage'); // Navigate to Thank You page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Details</Text>

      <View style={styles.detailBox}>
        <Text style={styles.label}>Crime Type:</Text>
        <Text style={styles.value}>{crime || 'Not provided'}</Text>
      </View>

      <View style={styles.detailBox}>
        <Text style={styles.label}>Message:</Text>
        <Text style={styles.value}>{message || 'No message'}</Text>
      </View>

      <View style={styles.detailBox}>
        <Text style={styles.label}>University:</Text>
        <Text style={styles.value}>Placeholder University</Text>
      </View>

      <View style={styles.detailBox}>
        <Text style={styles.label}>Full Name:</Text>
        <Text style={styles.value}>Placeholder EUID</Text>
      </View>

      <View style={styles.detailBox}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>Placeholder Location</Text>
      </View>

      {/* Change button to navigate to Thank You page */}
      <GradientButton 
        text="Submit Report" // Change this to indicate submission
        onPress={handleThankYouPage} 
      />
    </View>
  );
};

export default ReportedPage;
