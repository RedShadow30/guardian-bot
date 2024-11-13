import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView, Modal, TouchableWithoutFeedback, TouchableOpacity  } from 'react-native';
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
  const { email } = route.params;
  const [selectedCrime, setSelectedCrime] = useState(null);
  const [text, setText] = useState('');
  const [inputHeight, setInputHeight] = useState(40); // Set initial input height
  const textInputRef = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(true); // Modal state


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
      navigation.navigate('ReportedPage', { crime: selectedCrime, message: text, email: email });
      
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
      keyboardVerticalOffset={20}
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
          <TouchableWithoutFeedback onPress={() => textInputRef.current.focus()}>
            <View style={styles.textBox}>
              <TextInput
                ref={textInputRef}
                editable
                multiline
                placeholder='Describe crime report here...'
                onChangeText={newText => setText(newText)}
                value={text}
                style={[styles.text, { height: inputHeight }]}
                onContentSizeChange={(e) => setInputHeight(e.nativeEvent.contentSize.height)}
                blurOnSubmit={true}
              />
            </View>
          </TouchableWithoutFeedback>

          {/* Submit Button */}
          <GradientButton 
            text={'Continue'} 
            onPress={handleSubmit} 
          />
        </View>
      </ScrollView>
      {/* Disclaimer Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              In case of an emergency, please call 911 instead.
            </Text>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Text style={styles.closeButton}>Understood</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

export default SOS;
