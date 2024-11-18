import React from 'react'; 
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';

const CarAccident = () => {
  // Function to open PDF link
  const openPdf = () => {
    Linking.openURL('https://riskmanagement.unt.edu/emergency/_images/car_accident_0.pdf'); // Open the PDF link in browser
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image Section */}
      <Image 
        source={require('../../../../../assets/CarAccident.jpg')}
        style={styles.image} 
      />

      {/* Guide Title */}
      <Text style={styles.title}>Car Accident Response Guide</Text>

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
        A car accident can be traumatic, but knowing how to respond quickly can save lives. Follow these steps to ensure safety:
      </Text>

      {/* Steps and Resources */}
      <View style={styles.stepsContainer}>
        <Text style={styles.stepTitle}>1. Check for Injuries</Text>
        <Text style={styles.stepText}>
          Ensure everyone involved is safe. If possible, check for injuries and call emergency services if needed.
        </Text>

        <Text style={styles.stepTitle}>2. Move to a Safe Area</Text>
        <Text style={styles.stepText}>
          If the car is drivable, move it out of traffic. Otherwise, stay inside the car until help arrives.
        </Text>

        <Text style={styles.stepTitle}>3. Contact Authorities</Text>
        <Text style={styles.stepText}>
          Call the police and emergency services. Provide them with accurate information about the location and any injuries.
        </Text>
      </View>

      {/* PDF Link Section */}
      <View style={styles.pdfContainer}>
          <TouchableOpacity onPress={openPdf}>
            <Text style={styles.pdfLink}>- Car Accident PDF Guide</Text>
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

export default CarAccident;
