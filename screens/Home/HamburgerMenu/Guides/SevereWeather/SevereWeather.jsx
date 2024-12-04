import React from 'react'; 
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';
import Speaker from '../../../../../components/Speaker';

const SevereWeather = () => {
  // Function to open PDF link
  const openPdf = () => {
    Linking.openURL('https://riskmanagement.unt.edu/emergency/_images/severe_weather_0.pdf'); // Open the PDF link in browser
  };

  // Message to read out
  const message = `
    Severe weather events like tornadoes, hurricanes, or heavy storms can be unpredictable. Following these safety measures can help you stay safe during such emergencies.
    1. Stay Informed
    Monitor weather alerts through official channels, radio, or apps. Ensure you receive emergency notifications.
    2. Seek Shelter
    Move to a safe, sturdy location, preferably indoors. Avoid windows and doors. 
    For tornadoes, seek shelter in a basement or an interior room on the lowest floor.
    3. Prepare Emergency Supplies
    Have a basic emergency kit ready, including water, food, flashlights, batteries, and a first aid kit.
    4. Avoid Dangerous Areas
    Stay away from flooded areas, downed power lines, or trees that could fall due to strong winds.
    5. Wait for Official Updates
    Do not leave your shelter until authorities announce that it is safe to do so.
  `;

  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Image Section */}
        <Image 
          source={require('../../../../../assets/SevereWeather.jpg')}
          style={styles.image} 
        />

        {/* Guide Title */}
        <Text style={styles.title}>Severe Weather Response Guide</Text>

        {/* Information Section */}
        <Text style={styles.description}>
        Severe weather events like tornadoes, hurricanes, or heavy storms can be unpredictable. Following these safety measures can help you stay safe during such emergencies.
        </Text>

        {/* Steps Section */}
        <View style={styles.stepsContainer}>
          <Text style={styles.stepTitle}>1. Stay Informed</Text>
          <Text style={styles.stepText}>
            Monitor weather alerts through official channels, radio, or apps. Ensure you receive emergency notifications.
          </Text>

          <Text style={styles.stepTitle}>2. Seek Shelter</Text>
          <Text style={styles.stepText}>
            - Move to a safe, sturdy location, preferably indoors. Avoid windows and doors. 
            - For tornadoes, seek shelter in a basement or an interior room on the lowest floor.
          </Text>

          <Text style={styles.stepTitle}>3. Prepare Emergency Supplies</Text>
          <Text style={styles.stepText}>
            Have a basic emergency kit ready, including water, food, flashlights, batteries, and a first aid kit.
          </Text>

          <Text style={styles.stepTitle}>4. Avoid Dangerous Areas</Text>
          <Text style={styles.stepText}>
            Stay away from flooded areas, downed power lines, or trees that could fall due to strong winds.
          </Text>

          <Text style={styles.stepTitle}>5. Wait for Official Updates</Text>
          <Text style={styles.stepText}>
            Do not leave your shelter until authorities announce that it is safe to do so.
          </Text>
        </View>

        {/* PDF Link Section */}
        <View style={styles.pdfContainer}>
            <TouchableOpacity onPress={openPdf}>
              <Text style={styles.pdfLink}>- Severe Weather PDF Guide</Text>
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

export default SevereWeather;
