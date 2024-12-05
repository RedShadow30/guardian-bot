import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';
import Speaker from '../../../../../components/Speaker';

const BombThreat = () => {
  // Function to open PDF link
  const openPdf = () => {
    Linking.openURL('https://riskmanagement.unt.edu/emergency/_images/bomb_threat_0.pdf'); // Open the PDF link in browser
  };

  // Message to read out
  const message = `
    A bomb threat requires calm and prompt action. Follow these steps to ensure your safety and that of others:
    1. Stay Calm
    Avoid panic. Listen carefully if the threat is verbal or on a call, and take note of any specific details.
    2. Evacuate Safely
    If directed to evacuate, leave the area immediately but avoid running or causing alarm.
    3. Report the Threat
    Contact campus security or local authorities. Provide all details, including suspicious items or individuals.
  `;

  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Image Section */}
        <Image 
          source={require('../../../../../assets/BombThreat.png')} 
          style={styles.image} 
        />

        {/* Guide Title */}
        <Text style={styles.title}>Bomb Threat Response Guide</Text>

        {/* YouTube Video Section */}
        <View style={styles.videoContainer}>
          <WebView
            source={{ uri: 'https://www.youtube.com/embed/pg7yVTBciWg' }} // Replace with a valid video ID
            style={styles.video}
            allowsFullscreenVideo
          />
        </View>

        {/* Information Section */}
        <Text style={styles.description}>
          A bomb threat requires calm and prompt action. Follow these steps to ensure your safety and that of others:
        </Text>

        {/* Steps and Resources */}
        <View style={styles.stepsContainer}>
          <Text style={styles.stepTitle}>1. Stay Calm</Text>
          <Text style={styles.stepText}>
            Avoid panic. Listen carefully if the threat is verbal or on a call, and take note of any specific details.
          </Text>

          <Text style={styles.stepTitle}>2. Evacuate Safely</Text>
          <Text style={styles.stepText}>
            If directed to evacuate, leave the area immediately but avoid running or causing alarm.
          </Text>

          <Text style={styles.stepTitle}>3. Report the Threat</Text>
          <Text style={styles.stepText}>
            Contact campus security or local authorities. Provide all details, including suspicious items or individuals.
          </Text>
        </View>

        {/* PDF Link Section */}
        <View style={styles.pdfContainer}>
            <TouchableOpacity onPress={openPdf}>
              <Text style={styles.pdfLink}>- Bomb Threat PDF Guide</Text>
            </TouchableOpacity>
          </View>

        {/* Resources */}
        <View style={styles.resourcesContainer}>
          <Text style={styles.resourceTitle}>Additional Resources</Text>
          <Text style={styles.resourceItem}>- Campus Security: Call 555-5678</Text>
          <Text style={styles.resourceItem}>- Emergency Response Plan</Text>
          <Text style={styles.resourceItem}>- Counseling Services: Support available after the incident</Text>
        </View>
      </ScrollView>

      {/* Speaker to Read Page */}
      <Speaker message={message} />
    </View>
  );
};

export default BombThreat;
