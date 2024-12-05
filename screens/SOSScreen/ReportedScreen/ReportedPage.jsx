import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GradientButton from '../../../components/GradientButton'; // Adjust the import based on your file structure
import useLocation from '../../../components/LocationHook';
import axios from 'axios';
import styles from './styles';

const ReportedPage = ({ route, navigation }) => {
  const { crime, message } = route.params; // Receive crime and message from SOS
  const { email } = route.params;
  const [error, setError] = useState(null);
  const [ profileInfo, setProfileInfo ] = useState({});
  // Get user permission to get Location and store if granted
  const {latitude, longitude, street, streetNum, district, subregion, errMsg} = useLocation();

  useEffect(() => {
    const fetchProfile = async() => {
      try {
        // Request to backend to receive backend info
        const response = await axios.get(`http://${REPLACE_IP_HERE}:${REPLACE_PORT_HERE}/api/profile?email=${email}`);
        console.log('GET Request for Profile sent');

        // Received profile then store JSON format for easier info accessing
        if(response.status == 200) {
          setProfileInfo(response.data);
        }
      }
      catch(err) {
        console.error(err);
        setError(err.message);
      }
    };

    // Call the function to get profile info
    fetchProfile();
  }, [email]);      // Update email if it changed

  // Edit button function
  const handleEdit = () => {
    navigation.navigate('SOS', { crime, message }); // Pass existing data back
  };

  if(error) {
    return (
      <View style={styles.title}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  // Set header options to include the Edit button
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, crime, message]);

  const handleThankYouPage = () => {
    // Navigate to Thank You page and ensure previous data is cleared
    navigation.navigate('ThankYouPage', { resetSOS: true });
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
        <Text style={styles.value}>{profileInfo.university}</Text>
      </View>

      <View style={styles.detailBox}>
        <Text style={styles.label}>Full Name:</Text>
        <Text style={styles.value}>{profileInfo.fullName}</Text>
      </View>

      <View style={styles.detailBox}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>Latitude: {latitude}</Text>
        <Text style={styles.value}>Longitude: {longitude}</Text>
        <Text style={styles.value}>Street: {streetNum + ' ' + street}</Text>
        <Text style={styles.value}>Subregion: {subregion}</Text>
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
