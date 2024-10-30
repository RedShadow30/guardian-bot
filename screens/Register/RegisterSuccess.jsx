import { CommonActions, useNavigation, useRoute } from '@react-navigation/native';
import React from "react";
import { View, Button, Text } from "react-native"
import styles from './styles'

function RegisterSuccess() {
    const navigation = useNavigation();
    const route = useRoute();

    // Navigate to HomeScreen
    const getStarted = async() => {
        console.log('Going to HomeScreen');
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'HomeScreen'}],
            })
        );
    }

    console.log('Finished Profile Registration successfully');

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