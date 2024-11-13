import React from 'react';
import { useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Map'; 
import AI from '../AIScreen/AI';
import SOS from '../SOSScreen/SOS'; 
import Profile from '../ProfileScreen/Profile';
import ReportedPage from '../SOSScreen/ReportedScreen/ReportedPage';
import ThankYouPage from '../SOSScreen/ReportedScreen/ThankYouScreen/ThankYouScreen';
import About from './HamburgerMenu/About/About'; 
import Guides from './HamburgerMenu/Guides/Guides';
import Reports from './HamburgerMenu/Reports/Reports';
import Resources from './HamburgerMenu/Resources/Resources';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles'; 

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Custom button for the Home tab
const CustomHomeTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.homeButton} 
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

// Custom button for the SOS tab
const CustomSOSTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.sosButton} 
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

// Custom button for the Profile tab
const CustomProfileTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.profileButton} 
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

function BottomTabs() {
  const route = useRoute();
  const email = route.params?.email; // Retrieve email passed from Login  

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home'; 
          } else if (route.name === 'SOS') {
            iconName = 'exclamation-circle'; 
          } else if (route.name === 'Profile') {
            iconName = 'user'; 
          }
          return <Icon name={iconName} size={40} color={color} />; 
        },
        tabBarLabelStyle: {
          fontSize: 20, 
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: 'black', 
          height: 75, 
          position: 'absolute', 
          bottom: 10, 
          left: 20, 
          right: 20, 
          borderRadius: 15, 
          elevation: 0, 
        },
        tabBarActiveTintColor: "white",     
        tabBarInactiveTintColor: "#b7b7b7",
      })}
    >
      {/* Home Screen */}
      <Tab.Screen 
  name="Home" 
  component={Home} 
  options={({ navigation }) => ({
    tabBarButton: (props) => <CustomHomeTabBarButton {...props} />, 
    headerTitle: () => (
      <View style={styles.headerContainer}>
        <Icon name="globe" size={25} color="white" />
        <Text style={styles.headerText}>Home</Text>
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
  })} 
/>

      {/* SOS Screen */}
      <Tab.Screen 
        name="SOS" 
        component={SOS}
        initialParams={{ email }} // Pass email to SOS screen
        options={{
          tabBarButton: (props) => <CustomSOSTabBarButton {...props} />,
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Icon name="exclamation-circle" size={25} color="white" />
              <Text style={styles.headerText}>SOS</Text>
            </View>
          ), 
          tabBarLabelStyle: {
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 5, // Adjust as needed
          },
          headerStyle: {
            backgroundColor: 'black', 
          },
          headerTintColor: 'white', 
        }} 
      />

      {/* Profile Screen */}
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        initialParams={{ email }} // Pass email to Profile screen
        options={{
          tabBarButton: (props) => <CustomProfileTabBarButton {...props} />, 
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Icon name="user" size={25} color="white" />
              <Text style={styles.headerText}>Profile</Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: 'black', 
          },
          headerTintColor: 'white', 
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
            backgroundColor: 'black', // Header background color
          },
          headerTintColor: 'white', // Header text color
          tabBarButton: () => null, // Hides the AI tab from the bottom
        }} 
      />

      <Tab.Screen 
        name="ReportedPage" 
        component={ReportedPage} 
        options={{
          tabBarButton: () => null, 
          tabBarStyle: { display: 'none' }
        }}
      />

      <Tab.Screen 
        name="ThankYouPage" 
        component={ThankYouPage} 
        options={{
          tabBarButton: () => null, // Hide the Thank You Page from the tab bar
          tabBarStyle: { display: 'none' } // Hides the tab bar when on this page
        
        }} 
      />
    </Tab.Navigator>
  );
}

//Hamburger Menu
function AppNavigator({ route }) {
  const { email } = route.params;

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: styles.drawerStyle,
        drawerActiveTintColor: styles.drawerActiveTintColor,
        drawerInactiveTintColor: styles.drawerInactiveTintColor,
        drawerLabelStyle: styles.drawerLabelStyle,
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={BottomTabs} 
        initialParams={{ email }} // Pass email here
        options={{ 
          headerShown: false,
          drawerIcon: () => <Icon name="home" size={25} color="white" />
        }} 
      />
      <Drawer.Screen 
        name="Reports" 
        component={Reports} 
        options={{
          drawerIcon: () => <Icon name="file-text" size={25} color="white" />
        }} 
      />
      <Drawer.Screen 
        name="Guides" 
        component={Guides} 
        options={{
          drawerIcon: () => <Icon name="book" size={25} color="white" />
        }} 
      />
      <Drawer.Screen 
        name="Resources" 
        component={Resources} 
        options={{
          drawerIcon: () => <Icon name="link" size={25} color="white" />
        }} 
      />
      <Drawer.Screen 
        name="About" 
        component={About} 
        options={{
          drawerIcon: () => <Icon name="info-circle" size={25} color="white" />
        }} 
      />
    </Drawer.Navigator>
  );
}

export default AppNavigator;