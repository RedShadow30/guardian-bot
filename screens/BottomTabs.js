import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home/Home'; 
import AI from './AIScreen/AI';
import SOS from './SOSScreen/SOS';
import Profile from './ProfileScreen/Profile';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Set the icon for each tab
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home'; // Icon for Home tab
          } else if (route.name === 'SOS') {
            iconName = 'exclamation-circle'; // Icon for SOS tab
          } else if (route.name === 'Profile') {
            iconName = 'user'; // Icon for Profile tab
          }
          return <Icon name={iconName} size={size} color={color} />; // Return the icon component
        },
        tabBarStyle: {
          backgroundColor: '#00B7B7', // Background color for the tab bar
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white', // Active tab color
        inactiveTintColor: '#BED3F3', // Inactive tab color
      }}
    >
      {/* Home Screen */}
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          // Custom header title with globe icon and text
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Icon name="globe" size={25} color="white" />{/* Globe icon */}
              <Text style={styles.headerText}>Home</Text>{/*Header Name*/}
            </View>
          ),
          headerStyle: {
            backgroundColor: '#00B7B7', // Header background color
          },
          headerTintColor: 'white', // Header text color
          headerLeft: () => (
            // Left header button for hamburger menu
            <TouchableOpacity onPress={() => alert('Hamburger menu pressed!')} style={{ marginLeft: 15 }}>
              <Icon name="bars" size={25} color="white" />{/* Hamburger icon and color */}
            </TouchableOpacity>
          ),
          // Right header button for navigating to AI page
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('AI')} style={{ marginRight: 15 }}>
              <Icon name="rocket" size={25} color="white" />{/* Rocket icon for AI and color */}
            </TouchableOpacity>
          ),
        }} 
      />
      
      {/* SOS Screen */}
      <Tab.Screen name="SOS" component={SOS} options={{
        headerStyle: { backgroundColor: '#00B7B7' }, // Header background color
        headerTintColor: 'white', // Header text color
      }} />

      {/* Profile Screen */}
      <Tab.Screen name="Profile" component={Profile} options={{
        headerStyle: { backgroundColor: '#00B7B7' }, // Header background color
        headerTintColor: 'white', // Header text color
      }} />

      {/* AI Screen */}
      <Tab.Screen 
        name="AI" 
        component={AI} 
        options={{
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Icon name="rocket" size={25} color="white" />{/* Rocket icon for AI */}
              <Text style={styles.headerText}>AI chat</Text>{/*Header Name*/}
            </View>
          ),
          headerStyle: {
            backgroundColor: '#00B7B7', // Header background color
          },
          headerTintColor: 'white', // Header text color
          tabBarButton: () => null, // Hides the AI tab from the bottom
        }} 
      />
    </Tab.Navigator>
  );
}

// Styles for header container and text
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'white', // Set text color to match your theme
    marginLeft: 8, // Optional margin
    fontSize: 20, // Font size for the header text
  },
});

export default BottomTabs;
