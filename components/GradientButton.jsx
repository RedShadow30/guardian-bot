import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const GradientButton = ({ text, onPress, isSelected }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient 
        style={[styles.button, isSelected && styles.selectedButton]} // Apply selected style
        colors={isSelected ? ['#010C80', '#900404'] : ['#900404', '#010C80']} // Change gradient when selected
        start={{ x: 0, y: 0 }}
        end={{ x: 2, y: 0 }}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

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
  selectedButton: {
    backgroundColor: '#010C80',  // Background color for the selected button
    borderColor: 'cyan',  //  Border color to highlight further
    borderWidth: 3,
  },
});

export default GradientButton;
