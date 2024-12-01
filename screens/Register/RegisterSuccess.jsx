import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from "react";
import { View, Button, Text } from "react-native"
import styles from './styles'

function RegisterSuccess() {
    const navigation = useNavigation();
    const route = useRoute();

    const {email: enteredEmail} = route.params || {};

    // Navigate to HomeScreen
    const getStarted = async() => {
        console.log('Going to HomeScreen');
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'HomeScreen', params: {email: enteredEmail}}], // Pass email through route
            })
        );
    }

    console.log('Finished Profile Registration successfully');
    console.log('Passing email from register success: ' + enteredEmail);
    

    return(
        <View style={{margin: 50}}>
            <Text style={styles.title}>Registration Successful!</Text>
            <Button 
                style={styles.button} 
                title="Get Started with GuardianBot"
                onPress={ getStarted }
            />
        </View>    
    );
}

export default RegisterSuccess;