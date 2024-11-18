import React from 'react'; 
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';

const NaturalGasLeak = () => {
  // Function to open PDF link
  const openPdf = () => {
    Linking.openURL('https://riskmanagement.unt.edu/emergency/_images/gas_leak_0.pdf'); // Open the PDF link in browser
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image Section */}
      <Image 
        source={require('../../../../../assets/NaturalGasLeak.png')}
        style={styles.image} 
      />

      {/* Guide Title */}
      <Text style={styles.title}>Natural Gas Leak Response Guide</Text>

      {/* YouTube Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/R3R4pi86hjY' }}
          style={styles.video}
          allowsFullscreenVideo
        />
      </View>

      {/* Information Section */}
      <Text style={styles.description}>
      A natural gas leak can lead to fires, explosions, or severe health risks due to gas inhalation. Knowing how to detect and respond to a gas leak is crucial for your safety and those around you.
      </Text>

      {/* Steps Section */}
      <View style={styles.stepsContainer}>
        <Text style={styles.stepTitle}>1. Recognize the Signs of a Leak</Text>
        <Text style={styles.stepText}>
          - Smell: Natural gas has a distinct sulfur-like "rotten egg" odor.
          - Sound: Listen for a hissing or whistling noise near gas appliances or pipelines.
          - Sight: Look for dead vegetation, bubbles in water, or a dust cloud near pipelines.
        </Text>

        <Text style={styles.stepTitle}>2. Evacuate Immediately</Text>
        <Text style={styles.stepText}>
          Leave the building or area without turning off lights, using electronics, or creating any sparks. Avoid open flames or smoking.
        </Text>

        <Text style={styles.stepTitle}>3. Call Emergency Services</Text>
        <Text style={styles.stepText}>
          Once you are in a safe location, call 911 or the local gas company to report the leak. Do not return until authorities declare it safe.
        </Text>

        <Text style={styles.stepTitle}>4. Do Not Attempt Repairs</Text>
        <Text style={styles.stepText}>
          Leave all repairs to trained professionals. Avoid entering the area until it has been inspected and cleared.
        </Text>
      </View>

      {/* PDF Link Section */}
      <View style={styles.pdfContainer}>
          <TouchableOpacity onPress={openPdf}>
            <Text style={styles.pdfLink}>- Natural Gas Leak PDF Guide</Text>
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

export default NaturalGasLeak;
