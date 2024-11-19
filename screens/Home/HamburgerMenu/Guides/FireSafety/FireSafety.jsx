import React from 'react'; 
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';

const FireSafety = () => {
  // Function to open PDF link
  const openPdf = () => {
    Linking.openURL('https://riskmanagement.unt.edu/emergency/_images/fire_0.pdf'); // Open the PDF link in browser
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image Section */}
      <Image 
        source={require('../../../../../assets/FireSafety.png')} 
        style={styles.image} 
      />

      {/* Guide Title */}
      <Text style={styles.title}>Fire Safety Guide</Text>

      {/* YouTube Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/zBKDxGeK5r0' }} // Replace with a valid video URL
          style={styles.video}
          allowsFullscreenVideo
        />
      </View>

      {/* Information Section */}
      <Text style={styles.description}>
      Fire emergencies require quick thinking and calm actions. Follow these steps to ensure your safety and the safety of others during a fire.
      </Text>

      {/* Steps Section */}
      <View style={styles.stepsContainer}>
        <Text style={styles.stepTitle}>1. Stay Calm and Alert Others</Text>
        <Text style={styles.stepText}>
          Alert everyone in the building by shouting "Fire!" or using an alarm system. Avoid panicking to ensure an orderly evacuation.
        </Text>

        <Text style={styles.stepTitle}>2. Evacuate Immediately</Text>
        <Text style={styles.stepText}>
          - Use the nearest fire exit. Avoid elevators.
          - Crawl low to the ground if there’s smoke to avoid inhaling toxic fumes.
          - If possible, close doors behind you to slow the spread of fire.
        </Text>

        <Text style={styles.stepTitle}>3. Call Emergency Services</Text>
        <Text style={styles.stepText}>
          Once safely outside, call 911 or your local fire department. Provide the exact location of the fire and any additional details.
        </Text>

        <Text style={styles.stepTitle}>4. If Trapped Inside</Text>
        <Text style={styles.stepText}>
          - Seal doors and vents with wet towels or clothing to block smoke.
          - Signal for help using a flashlight or waving a cloth at a window.
        </Text>

        <Text style={styles.stepTitle}>5. Use a Fire Extinguisher If Safe</Text>
        <Text style={styles.stepText}>
          Only attempt to extinguish small fires if you’ve been trained and can do so safely. Always keep a clear exit behind you.
        </Text>
      </View>

      {/* PDF Link Section */}
      <View style={styles.pdfContainer}>
          <TouchableOpacity onPress={openPdf}>
            <Text style={styles.pdfLink}>- Fire Safety PDF Guide</Text>
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

export default FireSafety;
