import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import GradientButton from '../../../components/GradientButton'; 
import useLocation from '../../../components/LocationHook';
import axios from 'axios';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const VoiceReportPage = ({ route, navigation }) => {
  // Get email from route
  const {email} = route.params;
  const [profileInfo, setProfileInfo] = useState({});
  // Get user permission to get Location and store if granted
  const {latitude, longitude, street, district, subregion, errMsg} = useLocation();

  // Stores transcribed voice message
  const [transcript, setTransript] = useState("");
  // Check if recording or not
  const [isRecording, setIsRecording] = React.useState(false);

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

  // TODO: Starts recording
  const handleStart = async () => {
    // TODO: Get permissions
    setIsRecording(true);
    console.log('started rec');
  }

  // TODO: Stops recording
  const handleStop = async () => {
    setIsRecording(false);
    console.log('stopping rec');
  }

  const handleThankYouPage = () => {
    // Make sure user recorded their message
    if(transcript) {
      // Navigate to Thank You page and ensure previous data is cleared
      navigation.navigate('ThankYouPage');
      setTransript(null);
    }
    else {
      alert('Please send record your message.');
    }
  };

  // Go Home
  const handleBack = () => {
    navigation.navigate('Home');
  }
  
  // Set header options to include the Edit button
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={handleBack} >
          <Icon name="arrow-left" size={23} color={"#000000"} style={{marginLeft: 30}}/>
        </TouchableOpacity>
      ),
    });
  }, [navigation, email]);
    
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.title}>Voice Report Details</Text>

        <View style={styles.detailBox}>
          <Text style={styles.label}>Transcribed Message:</Text>
          {/* Display the Speech-to-Text message */}
          <TextInput 
            multiline
            style={styles.value}
            numberOfLines={6}
            value={transcript}
            maxLength={500}
            editable={true}
          />
        </View>

        {/* Record component */}
        <View style={styles.voiceContainer}>
          {!isRecording? (
          <GradientButton text="Start Recording" onPress={handleStart} isSelected={false}/>
          ) : (
            <GradientButton text="Stop Recording" onPress={handleStop} isSelected={true}/>
          )}
        </View>

        {/* Profile Details */}
        <View style={styles.detailBox}>
          <Text style={styles.label}>University:</Text>
          <Text style={styles.value}>{profileInfo.university}</Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.label}>Full Name:</Text>
          <Text style={styles.value}>{profileInfo.fullName}</Text>
        </View>

        {/* Display user location */}
        <View style={styles.detailBox}>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>Latitude: {latitude}</Text>
          <Text style={styles.value}>Longitude: {longitude}</Text>
          <Text style={styles.value}>Street: {street}</Text>
          <Text style={styles.value}>District: {district}</Text>
          <Text style={styles.value}>Subregion: {subregion}</Text>
        </View>

        {/* Change button to navigate to Thank You page */}
        <GradientButton 
          text="Submit Report" // Change this to indicate submission
          onPress={handleThankYouPage} 
        />
      </View>
    </ScrollView>
  );
};

export default VoiceReportPage;
