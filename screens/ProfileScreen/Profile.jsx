import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

const Profile = ({ route }) => {
  const [profileInfo, setProfileInfo] = useState({});
  const [error, setError] = useState(null)
  const { email } = route.params;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Request to backend to receive backend info
        const response = await fetch(`http://${REPLACE_IP_HERE}:${REPLACE_PORT_HERE}/api/profile?email=${email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('GET Request for Profile sent');

        const responseText = await response.text();
        
        // Convert received profile to JSON for easier info accessing
        if(response.ok) {
          const jsonData = JSON.parse(responseText);
          setProfileInfo(jsonData);
        }
        else {
          throw new Error(responseText);
        }
      }
      catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    // Call the function to get profile info
    fetchProfile();
  }, [email]);

  // If error then display error caught in useEffect code 
  if(error) {
    return (
      <View style={styles.emergencyContactsTitle}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  // Still finding profile then creating loading screen
  if(!profileInfo) {
    return (
      <View style={styles.emergencyContactsTitle}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Refactored code for Profile field
  const ProfileField = ({ label, value }) => (
    <Text style={styles.profileItem}>
      <Text style={{fontWeight: 'bold'}}>{label}:</Text> {value}
    </Text>
  );

  // Render profile information
  return (
    <View style={styles.container}>
      
      {/* Profile Details */}
      <View style={styles.sectionContainer}>
        <Text style={styles.emergencyContactsTitle}>My Info</Text>
        <ProfileField label="Full Name" value={profileInfo.fullName} />
        <ProfileField label="University" value={profileInfo.university} />
        <ProfileField label="Email" value={profileInfo.email} />
      </View>

      {/* Emergency Contacts */}
      <View style={styles.sectionContainer}>
        <Text style={styles.emergencyContactsTitle}>Emergency Contacts</Text>
        
        <View style={styles.contactsContainer}>
          {/* Map over each phone number and display it */}
          {profileInfo.contacts && profileInfo.contacts.length > 0 ? (
            profileInfo.contacts.map((contact, index) => (
              <View key={index} style={styles.contactItemContainer}>
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