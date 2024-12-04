import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import GradientButton from '../../../components/GradientButton'; // Adjust the import based on your file structure
import useLocation from '../../../components/LocationHook';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './styles';

const AnonymousReportPage = ({ navigation }) => {
  // Stores selected crime
  const [value, setValue] = useState(null);
  // Get user permission to get Location and store if granted
  const {latitude, longitude, street, district, subregion, errMsg} = useLocation();

  const crimes = [
    { label: 'Break-In', value: '1' },
    { label: 'Harassment', value: '2' },
    { label: 'Hazard', value: '3' },
    { label: 'Stalking', value: '4' },
    { label: 'Theft', value: '5' },
    { label: 'Vandalism', value: '6' },
    { label: 'Other', value: '7' },
  ];

  const handleThankYouPage = () => {
    // Navigate to Thank You page and ensure previous data is cleared
    navigation.navigate('ThankYouPage');
    setValue(null);
  };  
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Details</Text>

      <View style={styles.detailBox}>
        <Text style={styles.label}>Crime Type:</Text>
        {/* Display the crimes via dropdown menu */}
        <Dropdown 
            style={styles.dropdown}
            placeholderStyle={styles.value}
            selectedTextStyle={styles.value}
            inputSearchStyle={styles.inputSearchStyle}
            data={crimes} // crimes to display
            search
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder="Select crime type"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
                setValue(item.value); // update state variable to selected crime
            }}
        />
      </View>

      {/* Allow user to optionally send a message */}
      <View style={styles.detailBox}>
        <Text style={styles.label}>Message:</Text>
        <TextInput style={styles.value} placeholder='Type here... (Optional)'></TextInput>
      </View>

      {/* Display user location */}
      <View style={styles.detailBox}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>Latitude: {latitude}</Text>
        <Text style={styles.value}>Longitude: {longitude}</Text>
        <Text style={styles.value}>Street: {street}</Text>
        <Text style={styles.value}>District: {district}</Text>
        <Text style={styles.value}>Subregion: {subregion}</Text>
      </View>

      {/* Change button to navigate to Thank You page */}
      <GradientButton 
        text="Submit Report" // Change this to indicate submission
        onPress={handleThankYouPage} 
      />
    </View>
  );
};

export default AnonymousReportPage;
