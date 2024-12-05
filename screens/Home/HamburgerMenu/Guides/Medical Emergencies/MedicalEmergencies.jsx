import React from 'react'; 
import { View, Text, Image, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';
import Speaker from '../../../../../components/Speaker';

const MedicalEmergencies = () => {
  // Message to read out
  const message = `
    A medical emergency requires quick and careful action. Follow these steps to provide immediate help:
    1. Assess the Situation
      Check for signs of life and any visible injuries. Be sure to keep yourself and others safe.
    2. Call for Help
      Dial 911 or the appropriate emergency number. Provide them with information on the condition of the victim.
    3. Perform CPR if Needed
      If the person is not breathing and you are trained in CPR, begin chest compressions and rescue breaths until help arrives.
  `;

  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Image Section */}
        <Image 
          source={require('../../../../../assets/MedicalEmergency.jpg')}
          style={styles.image} 
        />

        {/* Guide Title */}
        <Text style={styles.title}>Medical Emergency Response Guide</Text>

        {/* YouTube Video Section */}
        <View style={styles.videoContainer}>
          <WebView
            source={{ uri: 'https://www.youtube.com/embed/9zWPJR2u01w' }}
            style={styles.video}
            allowsFullscreenVideo
          />
        </View>

        {/* Information Section */}
        <Text style={styles.description}>
          A medical emergency requires quick and careful action. Follow these steps to provide immediate help:
        </Text>

        {/* Steps and Resources */}
        <View style={styles.stepsContainer}>
          <Text style={styles.stepTitle}>1. Assess the Situation</Text>
          <Text style={styles.stepText}>
            Check for signs of life and any visible injuries. Be sure to keep yourself and others safe.
          </Text>

          <Text style={styles.stepTitle}>2. Call for Help</Text>
          <Text style={styles.stepText}>
            Dial 911 or the appropriate emergency number. Provide them with information on the condition of the victim.
          </Text>

          <Text style={styles.stepTitle}>3. Perform CPR if Needed</Text>
          <Text style={styles.stepText}>
            If the person is not breathing and you are trained in CPR, begin chest compressions and rescue breaths until help arrives.
          </Text>
        </View>

        {/* Resources */}
        <View style={styles.resourcesContainer}>
          <Text style={styles.resourceTitle}>Additional Resources</Text>
          <Text style={styles.resourceItem}>- Emergency Services: Call 911</Text>
          <Text style={styles.resourceItem}>- Campus Health Center: Call 555-4321</Text>
          <Text style={styles.resourceItem}>- First Aid Training: Available through Red Cross</Text>
        </View>
      </ScrollView>

      {/* Speaker to Read Page */}
      <Speaker message={message} />
    </View>
  );
};

export default MedicalEmergencies;
