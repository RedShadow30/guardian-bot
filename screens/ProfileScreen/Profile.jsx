import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import axios from 'axios';
import { FontAwesome5, MaterialIcons } from 'react-native-vector-icons'; // Import icons

const Profile = ({ route }) => {
  const [profileInfo, setProfileInfo] = useState({});
  const [error, setError] = useState(null);
  const { email } = route.params;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Retrieve user's profile info based on their email
        const response = await axios.get(`http://${REPLACE_IP_HERE}:${REPLACE_PORT_HERE}/api/profile?email=${email}`);
        
        // Update profile info based on the request
        if (response.status == 200) {
          setProfileInfo(response.data);
        } 
      }
      catch (err) {
        console.error(err.response.data.message);
        setError(err.response.data.message);
      }
    };

    fetchProfile();
  }, [email]);

  // Display the error if received
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  // Unable to retrieve profile info then display loading page
  if (!profileInfo) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const ProfileField = ({ label, value, icon }) => (
    <View style={styles.profileFieldContainer}>
      <FontAwesome5 name={icon} size={24} color="#1E88E5" style={styles.icon} />
      <Text style={styles.profileItem}>
        <Text style={{ fontWeight: 'bold' }}>{label}:</Text> {value}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image 
          source={require('../../assets/unt_logo.png')}
          style={styles.profileImage}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.sectionContainer}>
        <Text style={styles.emergencyContactsTitle}>My Info</Text>
        <ProfileField label="Full Name" value={profileInfo.fullName} icon="user" />
        <ProfileField label="University" value={profileInfo.university} icon="university" />
        <ProfileField label="Email" value={profileInfo.email} icon="envelope" />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.emergencyContactsTitle}>Emergency Contacts</Text>
        <View style={styles.contactsContainer}>
          
          {/* If contacts exists then loop through and display each phone number */}
          {profileInfo.contacts && profileInfo.contacts.length > 0 ? (
            profileInfo.contacts.map((contact, index) => (
              <View key={index} style={styles.contactItemContainer}>
                <MaterialIcons name="phone" size={24} color="#FF5722" />
                <Text style={styles.emergencyContactItem}> 
                  Contact {index + 1}: {contact}
                </Text>
              </View>
            ))
          ) : (
            <Text style={styles.emergencyContactItem}>No emergency contacts listed</Text>
          )}
        </View>
      </View>
    </View>
  );
}

export default Profile;
