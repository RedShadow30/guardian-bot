import React from 'react'; 
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';
import Speaker from '../../../../../components/Speaker';

const CrimePrevention = () => {
  // Function to open PDF link
  const openPdf = () => {
    Linking.openURL('https://riskmanagement.unt.edu/emergency/_images/crime_prevention_0.pdf'); // Open the PDF link in browser
  };

  // Message to read out
  const message = `
    Preventing crime starts with awareness and taking the right actions to protect yourself and your community. Follow these tips to stay safe:
    1. Be Aware of Your Surroundings
    Stay alert when walking or in public spaces. Avoid distractions such as texting or wearing headphones that impair your awareness.
    2. Lock Doors and Windows
    Always ensure your doors and windows are locked when you leave home or when you’re in your dorm or apartment.
    3. Use Well-Lit Routes
    Choose well-lit paths when walking at night. Avoid dark alleys or poorly lit areas where crimes are more likely to occur.
    4. Travel in Groups
    Whenever possible, travel with friends or colleagues. There's safety in numbers, and it's harder for criminals to target groups.
    5. Trust Your Instincts
    If something feels wrong, trust your gut instinct. Leave the area and seek help if necessary.
    6. Report Suspicious Activity
    If you see something suspicious, report it immediately to campus security or local law enforcement.
  `;

  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Image Section */}
        <Image 
          source={require('../../../../../assets/CrimePrevention.jpg')}
          style={styles.image} 
        />

        {/* Guide Title */}
        <Text style={styles.title}>Crime Prevention Guide</Text>

        {/* YouTube Video Section */}
        <View style={styles.videoContainer}>
          <WebView
            source={{ uri: 'https://www.youtube.com/embed/RbObl2KKU7A' }} // Replace with a valid video URL
            style={styles.video}
            allowsFullscreenVideo
          />
        </View>

        {/* Information Section */}
        <Text style={styles.description}>
        Preventing crime starts with awareness and taking the right actions to protect yourself and your community. Follow these tips to stay safe:
        </Text>

        {/* Steps Section */}
        <View style={styles.stepsContainer}>
          <Text style={styles.stepTitle}>1. Be Aware of Your Surroundings</Text>
          <Text style={styles.stepText}>
            Stay alert when walking or in public spaces. Avoid distractions such as texting or wearing headphones that impair your awareness.
          </Text>

          <Text style={styles.stepTitle}>2. Lock Doors and Windows</Text>
          <Text style={styles.stepText}>
            Always ensure your doors and windows are locked when you leave home or when you’re in your dorm or apartment.
          </Text>

          <Text style={styles.stepTitle}>3. Use Well-Lit Routes</Text>
          <Text style={styles.stepText}>
            Choose well-lit paths when walking at night. Avoid dark alleys or poorly lit areas where crimes are more likely to occur.
          </Text>

          <Text style={styles.stepTitle}>4. Travel in Groups</Text>
          <Text style={styles.stepText}>
            Whenever possible, travel with friends or colleagues. There's safety in numbers, and it's harder for criminals to target groups.
          </Text>

          <Text style={styles.stepTitle}>5. Trust Your Instincts</Text>
          <Text style={styles.stepText}>
            If something feels wrong, trust your gut instinct. Leave the area and seek help if necessary.
          </Text>

          <Text style={styles.stepTitle}>6. Report Suspicious Activity</Text>
          <Text style={styles.stepText}>
            If you see something suspicious, report it immediately to campus security or local law enforcement.
          </Text>
        </View>

        {/* PDF Link Section */}
        <View style={styles.pdfContainer}>
            <TouchableOpacity onPress={openPdf}>
              <Text style={styles.pdfLink}>- Crime Prevention PDF Guide</Text>
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

      {/* Speaker to Read Page */}
      <Speaker message={message} />
    </View>
  );
};

export default CrimePrevention;
