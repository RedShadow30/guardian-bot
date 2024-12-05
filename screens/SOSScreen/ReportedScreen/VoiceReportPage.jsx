import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Button } from 'react-native';
import GradientButton from '../../../components/GradientButton'; 
import useLocation from '../../../components/LocationHook';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Audio } from 'expo-av';
import axios from 'axios';
import styles from './styles';

const VoiceReportPage = ({ route, navigation }) => {
  // Get email from route
  const {email} = route.params;
  const [profileInfo, setProfileInfo] = useState({});
  // Get user permission to get Location and store if granted
  const {latitude, longitude, street, streetNum, district, subregion, errMsg} = useLocation();

  // Checks if recording
  const [recording, setRecording] = useState();
  // Stores audio messages
  const [recordings, setRecordings] = useState([]);

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

  // Start recording
  async function startRecording() {
    try {
      // Get permission
      const perm = await Audio.requestPermissionsAsync();
      if(perm.status === 'granted') {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        // Start the recording and update state var storing latest recording
        const { recording } = await Audio.Recording.createAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        setRecording(recording)
      }
    } catch (err) {
      console.log('Start recording error:', err);
    }
  }

  // Stop recording
  async function stopRecording() {
    setRecording(undefined);

    await recording.stopAndUnloadAsync();
    let allRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();

    // Add new recording to array of other recordings
    allRecordings.push({
      sound: sound,
      duration: getDuration(status.durationMillis),
      file: recording.getURI()
    });

    // Update state var holding all recordings
    setRecordings(allRecordings);
  }

  // Get duration of the audio
  function getDuration(ms) {
    const minutes = ms / 1000 /60;
    const seconds = Math.round((minutes - Math.floor(minutes)) * 60);
    // Return formatted time duration
    return seconds < 10 ? `${Math.floor(minutes)}:0${seconds}` : `${Math.floor(minutes)}:${seconds}`
  }

  // Function to display each recording
  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      // Return each audio message as a separate view
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>Recording {index + 1}</Text>
          <Text>{recordingLine.duration}</Text>
          {/* Play Button - Below is iOS configs ONLY. TODO: Android */}
          <Button onPress={async () => {
            await recordingLine.sound.setVolumeAsync(1.0); // Set volume to maximum
              recordingLine.sound.replayAsync();
              console.log('Played recording');
            }} title='Play'
          />
        </View>
      );
    });
  }

  // Function to erase all recordings
  function clearRecordings() { setRecordings([]); }

  const handleThankYouPage = () => {
    // Make sure user recorded their message
    if(recordings.length > 0) {
      // Navigate to Thank You page and ensure previous data is cleared
      navigation.navigate('ThankYouPage');
      setRecordings([]);

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
            <Text style={styles.label}>Audio Message:</Text>
            {/* Display the recorded audio messages */}
            {getRecordingLines()}
            {/* Given option to clear the messages */}
            {recordings.length > 0? <Button title='Clear' onPress={clearRecordings} /> : <></>}
          </View>

        {/* Record component */}
        <View style={styles.voiceContainer}>
          <GradientButton text={recording ? 'Stop Recording' : 'Start Recording'} onPress={recording ? stopRecording : startRecording} />
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
            <Text style={styles.value}>Street: {streetNum + ' ' + street}</Text>
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
