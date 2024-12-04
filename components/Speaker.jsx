import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Speech from 'expo-speech';

const Speaker = ({ message }) => {

    const speakMsg = () => {
        // Read out message
        if(message) {
            console.log('Speech begun.');
            Speech.speak(message, {
                onError: (error) => console.log('Speech error: ', error), // Log any errors
                onDone: () => console.log('Speech finished.'), // Log when completed
            });
        }
        else {
            console.log('No message provided for speech');
        }
    };

    // Return the button component to display
    return (
        <View>
            <TouchableOpacity
            style={styles.floatingButton}
            onPress={speakMsg}
        >
            <Icon name="book" size={25} color={"#FFFFFF"} />
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        right: 20,
        bottom: 50,
        width: 60,
        height: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // alpha value adjusted for transparency,
        alignItems: 'center', // centers horizontally
        justifyContent: 'center', // center vertically
        borderRadius: 50,
    }
});

export default Speaker;