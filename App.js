import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login/Login';
import BottomTabs from './screens/Home/BottomTabs';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Define the Login screen in the stack */}
        {/*<Stack.Screen name="Login" component={Login} />*/}
        {/* Define the HomeScreen that contains the BottomTabs */}
        <Stack.Screen name="HomeScreen" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}