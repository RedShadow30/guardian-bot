import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import ActiveThreat from './ActiveThreat/ActiveThreat';
import BombThreat from './BombThreat/BombThreat';
import CarAccident from './CarAccident/CarAccident';
import MedicalEmergencies from './Medical Emergencies/MedicalEmergencies';
import CivilDisturbance from './CivilDisturbance/CivilDisturbance';
import NaturalGasLeak from './NaturalGasLeak/NaturalGasLeak';
import FireSafety from './FireSafety/FireSafety';
import SevereWeather from './SevereWeather/SevereWeather';
import PowerOutage from './PowerOutage/PowerOutage';
import CrimePrevention from './CrimePrevention/CrimePrevention';


const Guides = ({ navigation }) => {
  const [selectedGuide, setSelectedGuide] = useState(null);

  // Set up header options
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.headerContainer}>
          <Icon name="book" size={25} color="white" />
          <Text style={styles.headerText}>Guides</Text>
        </View>
      ),
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'white',
      // Conditionally render the back button or drawer button
      headerLeft: () => (
        selectedGuide ? (
          <TouchableOpacity onPress={() => setSelectedGuide(null)} style={{ marginLeft: 15 }}>
            <Icon name="arrow-left" size={25} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 15 }}>
            <Icon name="bars" size={25} color="white" />
          </TouchableOpacity>
        )
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('AI')} style={{ marginRight: 15 }}>
          <Icon name="rocket" size={25} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, selectedGuide]);

  const guideOptions = [
    'Active Threat',
    'Bomb Threat',
    'Car Accident',  
    'Medical Emergencies',
    'Civil Disturbance',
    'Natural Gas Leak',
    'Fire Safety',
    'Severe Weather',
    'Power Outage',
    'Crime Prevention',
  ];

  const handleOptionPress = (option) => {
    if (option === 'Active Threat') {   // Handle Active Threat option
      setSelectedGuide('ActiveThreat'); // Set state for Active Threat
    } else if (option === 'Bomb Threat') {
      setSelectedGuide('BombThreat');
    } else if (option === 'Car Accident') {
      setSelectedGuide('CarAccident');  
    } else if (option === 'Medical Emergencies') {  
      setSelectedGuide('MedicalEmergencies');
    } else if (option === 'Civil Disturbance') {
      setSelectedGuide('CivilDisturbance');
    } else if (option === 'Natural Gas Leak') {
      setSelectedGuide('NaturalGasLeak');
    } else if (option === 'Fire Safety') {
      setSelectedGuide('FireSafety');
    } else if (option === 'Severe Weather') {
      setSelectedGuide('SevereWeather');
    } else if (option === 'Power Outage') {
      setSelectedGuide('PowerOutage');
    } else if (option === 'Crime Prevention') {
      setSelectedGuide('CrimePrevention');
    }
      else {
      console.log(`${option} selected`);
    }
  };

  // If "Active Threat" is selected, render the ActiveThreat page
  if (selectedGuide === 'ActiveThreat') {
    return <ActiveThreat />;
  }
  if (selectedGuide === 'BombThreat') {
    return <BombThreat />;
  }
  if (selectedGuide === 'CarAccident') {
    return <CarAccident />;
  }
  if (selectedGuide === 'MedicalEmergencies') {
    return <MedicalEmergencies />;
  }
  if (selectedGuide === 'CivilDisturbance') {
    return <CivilDisturbance />;
  }
  if (selectedGuide === 'NaturalGasLeak') {
    return <NaturalGasLeak />;
  }
  if (selectedGuide === 'FireSafety') {
    return <FireSafety />;
  }
  if (selectedGuide === 'SevereWeather') {
    return <SevereWeather />;
  }
  if (selectedGuide === 'PowerOutage') {
    return <PowerOutage />;
  }
  if (selectedGuide === 'CrimePrevention') {
    return <CrimePrevention />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Safety Guides</Text>
      {guideOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionButton}
          onPress={() => handleOptionPress(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Guides;
