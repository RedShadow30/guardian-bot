import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const About = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.headerContainer}>
          <Icon name="info-circle" size={25} color="white" />
          <Text style={styles.headerText}>About</Text>
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About GuardianBot</Text>
      <Text style={styles.description}>
        GuardianBot is designed to enhance campus safety by enabling real-time crime reporting, 
        providing access to emergency resources, and offering features like location tracking, 
        AI chatbot support, and voice command-based reporting. Our mission is to streamline communication 
        between students and law enforcement and ensure a safer campus environment.
      </Text>
    </View>
  );
};

export default About;
