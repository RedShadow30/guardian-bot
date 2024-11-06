import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Guides = ({ navigation }) => {
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
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 15 }}>
          <Icon name="bars" size={25} color="white" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('AI')} style={{ marginRight: 15 }}>
          <Icon name="rocket" size={25} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const guideOptions = [
    'Active Threat',
    'Bomb Threat',
    'Car Accident',
    'Medical Emergencies',
    'Civil Disturbance',
    'Natural Disasters',
    'Fire Safety',
    'Lockdown Safety',
    'Transportation Safety',
    'Digital Safety',
    'Drug and Alcohol Awareness',
  ];

  const handleOptionPress = (option) => {
    // Handle what happens when an option is pressed, such as navigation or displaying more info
    console.log(`${option} selected`);
  };

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
