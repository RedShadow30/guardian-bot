import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';

const ActiveThreat = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image Section */}
      <Image 
        source={require('../../../../../assets/ActiveThreat.png')} 
        style={styles.image} 
      />

      {/* Guide Title */}
      <Text style={styles.title}>Active Threat Response Guide</Text>

      {/* YouTube Video Section */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/w9nldEZv16k' }}
          style={styles.video}
          allowsFullscreenVideo
        />
      </View>

      {/* Information Section */}
      <Text style={styles.description}>
        In an active threat situation, quick and calm responses are crucial. Follow these steps to stay safe:
      </Text>

      {/* Steps and Resources */}
      <View style={styles.stepsContainer}>
        <Text style={styles.stepTitle}>1. Run</Text>
        <Text style={styles.stepText}>If there is an accessible escape path, attempt to evacuate the premises.</Text>

        <Text style={styles.stepTitle}>2. Hide</Text>
        <Text style={styles.stepText}>If evacuation isn’t possible, find a place to hide that is out of the threat’s view.</Text>

        <Text style={styles.stepTitle}>3. Fight</Text>
        <Text style={styles.stepText}>As a last resort, and only if your life is in immediate danger, attempt to disrupt or incapacitate the threat.</Text>
      </View>

      {/* Resources */}
      <View style={styles.resourcesContainer}>
        <Text style={styles.resourceTitle}>Additional Resources</Text>
        <Text style={styles.resourceItem}>- Campus Security: Call 555-1234</Text>
        <Text style={styles.resourceItem}>- Emergency Guide App</Text>
        <Text style={styles.resourceItem}>- Counseling Services: Available 24/7 for support</Text>
      </View>
    </ScrollView>
  );
};

export default ActiveThreat;
