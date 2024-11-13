import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register'
import AppNavigator from './screens/Home/Home';
import RegisterSuccess from './screens/Register/RegisterSuccess';
import ActiveThreat from './screens/Home/HamburgerMenu/Guides/ActiveThreat/ActiveThreat';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Define the Login screen in the stack */}
        <Stack.Screen name="Login" component={Login} />
        {/* Define the Register screen in the stack */}
        <Stack.Screen name="Register" component={Register} />
        {/* Define the Registration Success screen in the stack */}
        <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} />
        {/* Define the HomeScreen that contains the BottomTabs */}
        <Stack.Screen name="HomeScreen" component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}