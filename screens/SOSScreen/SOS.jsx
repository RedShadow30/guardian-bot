import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-vector-icons/MaterialCommunityIcons';
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
  const [text, setText] = useState('Describe crime report here...')

  return (
    <SafeAreaView style={styles.container}>
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
              multiline
              numberOfLines={4}
              maxLength={40}
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
      
    </SafeAreaView>
  );
}

export default SOS;