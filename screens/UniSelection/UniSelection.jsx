import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Animated, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';

function UniversitySelection() {
  const navigation = useNavigation(); // Access navigation

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [expandHeight] = useState(new Animated.Value(0));

  const universities = [
    { name: 'University of North Texas' },
    { name: 'Texas A&M University' },
    { name: 'Texas Christian University' },
    { name: 'Southern Methodist University' },
  ];

  const filteredUniversities = universities.filter(u =>
    searchQuery === '' || u.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNext = () => {
    if (selectedUniversity) {
      console.log('Selected University:', selectedUniversity.name);
      // Convert the university name to a filename-friendly identifier
      const logoIdentifier = selectedUniversity.name
        .toLowerCase()
        .replace(/\s+/g, '') // Remove spaces
        .replace(/&/g, 'and'); // Replace '&' with 'and' if needed
  
      // Navigate to the Login page and pass the logo identifier
      navigation.navigate('Login', {
        universityLogo: logoIdentifier, // Pass the identifier to the Login page
      });
    } else {
      alert('Please select a university');
    }
  };

  const toggleDropdown = () => {
    if (dropdownVisible) {
      Animated.timing(expandHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      setSearchQuery('');
      Animated.timing(expandHeight, {
        toValue: 150,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/GuardianBot.png')} />
      </View>
      <Text style={styles.selectText}>Select University</Text>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for university"
          onChangeText={(text) => {
            setSearchQuery(text);
            setDropdownVisible(true);
          }}
          value={selectedUniversity ? selectedUniversity.name : searchQuery}
          style={styles.searchBox}
        />
        <TouchableOpacity onPress={toggleDropdown} style={styles.arrowIconContainer}>
          <Ionicons name="chevron-down" size={24} color="black" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
      {dropdownVisible && (
        <Animated.View style={[styles.dropdown, { height: expandHeight }]}>
          <FlatList
            data={filteredUniversities}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.universityItem}
                onPress={() => {
                  setSelectedUniversity(item);
                  setSearchQuery(item.name);
                  setDropdownVisible(false);
                }}
              >
                <Text style={styles.universityName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </Animated.View>
      )}
      <TouchableOpacity onPress={handleNext}>
  <LinearGradient
    colors={['#900404', '#7D2D46', '#7D2D46', '#010C80']} 
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }} // Horizontal gradient
    style={styles.nextButton}
  >
    <Text style={styles.nextText}>Next</Text>
  </LinearGradient>
</TouchableOpacity>

    </View>
  );
}

export default UniversitySelection;
