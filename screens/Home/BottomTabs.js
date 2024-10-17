import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home'; 
import AI from '../AIScreen/AI';
import SOS from '../SOSScreen/SOS';
import Profile from '../ProfileScreen/Profile';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles'; // Import styles from styles.js

const Tab = createBottomTabNavigator();

// Custom button for the Home tab
const CustomHomeTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.homeButton} // Apply styles for the Home button
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

// Custom button for the SOS tab
const CustomSOSTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.sosButton} // Apply styles for the SOS button
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

// Custom button for the Profile tab
const CustomProfileTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.profileButton} // Apply styles for the Profile button
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

function BottomTabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
          height: 75, // Height of the tab bar
          position: 'absolute', // Keep the tab bar positioned at the bottom
          bottom: 10, // Position it above the screen edge
          left: 20, // Center the tab bar horizontally
          right: 20, // Center the tab bar horizontally
          borderRadius: 15, // Rounded corners
          elevation: 0, // Shadow for Android
        },
        tabBarActiveTintColor: "white",     // Active tab color
        tabBarInactiveTintColor: "#BED3F3"  // Inactive tab color
      })}
    >
      {/* Home Screen */}
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarButton: (props) => <CustomHomeTabBarButton {...props} />, // Use custom button for Home
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Icon name="globe" size={25} color="white" />{/* Globe icon */}
              <Text style={styles.headerText}>Home</Text>{/* Header Name */}
            </View>
          ),
          headerStyle: {
            backgroundColor: '#00B7B7', // Header background color
          },
          headerTintColor: 'white', // Header text color
          headerLeft: () => (
            <TouchableOpacity onPress={() => alert('Hamburger menu pressed!')} style={{ marginLeft: 15 }}>
              <Icon name="bars" size={25} color="white" />{/* Hamburger icon */}
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('AI')} style={{ marginRight: 15 }}>
              <Icon name="rocket" size={25} color="white" />{/* Rocket icon for AI */}
            </TouchableOpacity>
          ),
        }} 
      />

      {/* SOS Screen */}
      <Tab.Screen 
        name="SOS" 
        component={SOS} 
        options={{
          tabBarButton: (props) => <CustomSOSTabBarButton {...props} />, // Use custom button for SOS
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Icon name="exclamation-circle" size={25} color="white" />{/* SOS icon */}
              <Text style={styles.headerText}>Report</Text>{/* Header Name */}
            </View>
          ),
          headerStyle: {
            backgroundColor: '#00B7B7', // Header background color
          },
          headerTintColor: 'white', // Header text color
        }} 
      />

      {/* Profile Screen */}
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarButton: (props) => <CustomProfileTabBarButton {...props} />, // Use custom button for Profile
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Icon name="user" size={25} color="white" />{/* User icon */}
              <Text style={styles.headerText}>Profile</Text>{/* Header Name */}
            </View>
          ),
          headerStyle: {
            backgroundColor: '#00B7B7', // Header background color
          },
          headerTintColor: 'white', // Header text color
        }} 
      />

      {/* AI Screen */}
      <Tab.Screen 
        name="AI" 
        component={AI} 
        options={{
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Icon name="rocket" size={25} color="white" />{/* Rocket icon for AI */}
              <Text style={styles.headerText}>AI chat</Text>{/* Header Name */}
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

export default BottomTabs;
