import React from 'react'; 
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';

const CivilDisturbance = () => {
  // Function to open PDF link
  const openPdf = () => {
    Linking.openURL('https://riskmanagement.unt.edu/emergency/_images/civil_disturbance_0.pdf'); // Open the PDF link in browser
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image Section */}
      <Image 
        source={require('../../../../../assets/CivilDisturbance.jpg')}
        style={styles.image} 
      />

      {/* Guide Title */}
      <Text style={styles.title}>Civil Disturbance Response Guide</Text>

      {/* YouTube Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/4-Sf4EQi4vQ' }} // Replace with a valid video URL
          style={styles.video}
          allowsFullscreenVideo
        />
      </View>

      {/* Information Section */}
      <Text style={styles.description}>
      Civil disturbances, such as protests, riots, or other disruptive events, can escalate quickly. It's essential to stay informed and prepared to ensure your safety and the safety of others. Here are some critical steps to take during a civil disturbance:
      </Text>

      {/* Steps and Resources */}
      <View style={styles.stepsContainer}>
        <Text style={styles.stepTitle}>1. Stay Informed</Text>
        <Text style={styles.stepText}>
        Monitor local news, social media, or campus alerts to stay updated about the situation. Follow guidance from campus or local authorities.
        </Text>

        <Text style={styles.stepTitle}>2. Avoid the Area</Text>
        <Text style={styles.stepText}>
        If possible, stay away from areas where disturbances are occurring. Avoid engaging with demonstrators or law enforcement.
        </Text>

        <Text style={styles.stepTitle}>3. Shelter in Place</Text>
        <Text style={styles.stepText}>
        If you cannot leave safely, find a secure location indoors. Lock doors, close windows, and stay away from entry points. Keep communication devices charged.
        </Text>

        <Text style={styles.stepTitle}>4. Contact Authorities</Text>
        <Text style={styles.stepText}>
          If you feel unsafe or witness escalating violence, contact campus security or local authorities immediately.
        </Text>
      </View>

      {/* PDF Link Section */}
      <View style={styles.pdfContainer}>
          <TouchableOpacity onPress={openPdf}>
            <Text style={styles.pdfLink}>- Civil Disturbance PDF Guide</Text>
          </TouchableOpacity>
        </View>

      {/* Resources */}
      <View style={styles.resourcesContainer}>
        <Text style={styles.resourceTitle}>Additional Resources</Text>
        <Text style={styles.resourceItem}>- Emergency Services: Call 911</Text>
        <Text style={styles.resourceItem}>- Campus Security: Call 555-1234</Text>
        <Text style={styles.resourceItem}>- First Aid Kit: Available in campus medical centers</Text>
      </View>
    </ScrollView>
  );
};

export default CivilDisturbance;
