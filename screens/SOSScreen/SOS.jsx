import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import GradientButton from '../../components/GradientButton';
import styles from './styles';

const CrimeItem = ({ crime, isSelected, onPress }) => {
  return (
    <GradientButton 
      text={crime} 
      onPress={onPress} 
      isSelected={isSelected} 
    />
  );
};

function SOS({ navigation, route }) {
  const crimes = ['Theft', 'Stalking', 'Harassment', 'Break-In', 'Hazard', 'Vandalism', 'Other'];
  const [selectedCrime, setSelectedCrime] = useState(null);
  const [text, setText] = useState('');
  const [inputHeight, setInputHeight] = useState(40); // Set initial input height

  // Check for existing data when the component mounts or when navigating back from ReportedPage
  useEffect(() => {
    if (route.params?.crime) {
      setSelectedCrime(route.params.crime);
    }
    if (route.params?.message) {
      setText(route.params.message);
    }
  }, [route.params]);

  const handleSubmit = () => {
    if (selectedCrime && text.trim()) {
      navigation.navigate('ReportedPage', { crime: selectedCrime, message: text });
      
      // Reset the state only if you are not editing
      setSelectedCrime(null);
      setText('');
      setInputHeight(40); // Reset the input height if necessary
    } else {
      alert('Please select a crime and provide a description.');
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={'position'} 
      keyboardVerticalOffset={50}
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingBottom: 80 }}
        keyboardShouldPersistTaps='handled'
      >
        {/* Crime Selection */}
        <View style={styles.content}>
          <Text style={styles.title}>Select crime to report</Text>
          <View style={styles.grid}>
            {crimes.map((crime, index) => (
              <CrimeItem 
                key={index} 
                crime={crime} 
                isSelected={selectedCrime === crime} 
                onPress={() => setSelectedCrime(crime)} 
              />
            ))}
          </View>
        </View>

        {/* Description Input */}
        <View style={styles.content}>
          <Text style={styles.title}>Explain the report</Text>
          <View style={styles.textBox}>
            <TextInput
              editable 
              multiline={true} // Enable multi-line input
              placeholder='Describe crime report here...'
              onChangeText={newText => setText(newText)}
              value={text}
              style={[styles.text, { height: inputHeight }]} // Dynamically adjust height
              onContentSizeChange={(e) => setInputHeight(e.nativeEvent.contentSize.height)} // Adjust height as text grows
              blurOnSubmit={true} // Prevent new line on submit
            />
          </View>

          {/* Submit Button */}
          <GradientButton 
            text={'Continue'} 
            onPress={handleSubmit} 
          />
        </View>
      </ScrollView> 
    </KeyboardAvoidingView>
  );
}

export default SOS;
