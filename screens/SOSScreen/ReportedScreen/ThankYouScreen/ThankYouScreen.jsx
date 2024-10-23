import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import styles from './styles'; // Import styles

function ThankYou({ navigation }) {
  const handleBackToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Thank You for Your Report!</Text>
      <Text style={styles.description}>
        Your report has been submitted successfully. We appreciate your vigilance!
      </Text>

      {/* Back to Home Button with Gradient */}
      <TouchableOpacity onPress={handleBackToHome}>
        <LinearGradient 
          style={styles.button} 
          colors={['#900404', '#010C80']} // Use the same gradient colors as in GradientButton
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

export default ThankYou;
