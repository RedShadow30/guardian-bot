import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { FontAwesome5, MaterialIcons } from 'react-native-vector-icons'; // Import icons

const Profile = ({ route }) => {
  const [profileInfo, setProfileInfo] = useState({});
  const [error, setError] = useState(null);
  const { email } = route.params;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://${REPLACE_IP_HERE}:${REPLACE_PORT_HERE}/api/profile?email=${email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const responseText = await response.text();
        
        if (response.ok) {
          const jsonData = JSON.parse(responseText);
          setProfileInfo(jsonData);
        } else {
          throw new Error(responseText);
        }
      }
      catch (err) {
        setError(err.message);
      }
    };

    fetchProfile();
  }, [email]);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

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
  source={require('../../assets/GuardianBot.png')}
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
