import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles'

{/* List each crime from list */}
const CrimeItem = ({ crime }) => {
  return (
    <LinearGradient 
      style={styles.button}
      colors={['#900404', '#010C80', 'transparent']}
      start={{ x: 0, y: 0 }}
      end={{ x: 2, y: 0 }}
    >
      <Text style={styles.buttonText}>{crime}</Text>
    </LinearGradient>
  );
};

function SOS() {
  const crimes = ['Theft', 'Stalking', 'Harrassment', 'Break-In', 'Hazard', 'Vandalism', 'Other']
  const [text, setText] = useState()

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={'position'} // Scrolls the whole page up
      keyboardVerticalOffset={50} // Adds space below button
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 16, justifyContent: 'center', paddingBottom: 80 }} // Adds space below button
        keyboardShouldPersistTaps='handled' // Ensures taps are handled properly
      >
        {/* First part of SOS Page - Crime Buttons */}
        <View style={styles.content}>
          <Text style={styles.title}>Select crime to report</Text>
          
          {/* Display crimes */}
          <View style={styles.grid}>
            {crimes.slice(0, 6).map((crime, index) => (
              <CrimeItem key={index} crime={crime} />
            ))}
          </View>
          <CrimeItem crime={crimes[6]} />
        </View>

      {/* Second part of SOS Page - Description */}
      <View style={styles.content}>
          <Text style={styles.title}>Explain the report</Text>
          
          {/* Description Input */}
          <View style={styles.textBox}>
            <TextInput
              editable 
              placeholder='Describe crime report here...'
              onChangeText={newText => setText(newText)}
              defaultValue={text}
              style={styles.text}
            />
          </View>

          {/* Submit Button */}
          <LinearGradient 
            style={styles.button}
            colors={['#900404', '#010C80', 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 2, y: 0 }}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </LinearGradient>
        </View>
      </ScrollView> 
    </KeyboardAvoidingView>
  );
}

export default SOS;