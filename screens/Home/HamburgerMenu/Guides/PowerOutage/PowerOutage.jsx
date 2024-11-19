import React from 'react'; 
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';

const PowerOutage = () => {
  // Function to open PDF link
  const openPdf = () => {
    Linking.openURL('https://riskmanagement.unt.edu/emergency/_images/power_outage_1.pdf'); // Open the PDF link in browser
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image Section */}
      <Image 
        source={require('../../../../../assets/PowerOutage.jpg')}
        style={styles.image} 
      />

      {/* Guide Title */}
      <Text style={styles.title}>Power Outage Response Guide</Text>

      {/* Information Section */}
      <Text style={styles.description}>
      Power outages can happen unexpectedly, and it is important to stay calm and take the right actions to stay safe and comfortable until power is restored.
      </Text>

      {/* Steps Section */}
      <View style={styles.stepsContainer}>
        <Text style={styles.stepTitle}>1. Stay Informed</Text>
        <Text style={styles.stepText}>
          - Check for updates from your local utility company regarding the status of the outage.
          - Use a battery-powered radio or a phone with data to stay informed if the power is out.
        </Text>

        <Text style={styles.stepTitle}>2. Turn Off Electrical Equipment</Text>
        <Text style={styles.stepText}>
          Unplug or turn off electrical appliances to avoid a power surge when the power returns.
        </Text>

        <Text style={styles.stepTitle}>3. Use Flashlights Instead of Candles</Text>
        <Text style={styles.stepText}>
          Flashlights are safer than candles. Ensure you have a battery-powered flashlight or a headlamp available.
        </Text>

        <Text style={styles.stepTitle}>4. Avoid Opening Refrigerators and Freezers</Text>
        <Text style={styles.stepText}>
          Keep refrigerators and freezers closed to preserve food. A full freezer will keep food frozen for up to 48 hours.
        </Text>

        <Text style={styles.stepTitle}>5. Stay Cool or Warm</Text>
        <Text style={styles.stepText}>
          If the weather is hot, stay in the shade and drink plenty of water. If it's cold, layer your clothing and use blankets.
        </Text>

        <Text style={styles.stepTitle}>6. Report the Outage</Text>
        <Text style={styles.stepText}>
          Report the outage to your local utility company if they are not already aware of it.
        </Text>
      </View>

      {/* PDF Link Section */}
      <View style={styles.pdfContainer}>
          <TouchableOpacity onPress={openPdf}>
            <Text style={styles.pdfLink}>- Power Outage PDF Guide</Text>
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

export default PowerOutage;
