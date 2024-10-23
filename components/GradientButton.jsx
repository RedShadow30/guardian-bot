import React from 'react'
import { Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const GradientButton = ({ text }) => {
  return (
      <LinearGradient 
        style={styles.button}
        colors={['#900404', '#010C80', 'transparent']}
        start={{ x: 0, y: 0 }}
        end={{ x: 2, y: 0 }}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
  )
}

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    margin: 8,
  },
})

export default GradientButton;