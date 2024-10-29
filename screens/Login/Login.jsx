const { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } = require("react-native")
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useState } from "react";
import styles from './styles';

function Login() {
    // Provides navigation
    const navigation = useNavigation();

    //  Will store the user-entered values
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState(null);

    // Form validation -> Able to display required msg when empty and regex implemented. 
    const validateForm = async() => {
        if(!email || !password) {
            console.log('Please fill in both email and password');
            setErrors('Please fill in both email and password');
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailRegex.test(email)) {
            console.log('Invalid email address');
            setErrors('Invalid email address');
            return;
        }

        // Authentication
        try {
            console.log('Authenticating...');

            // API request to backend API to authenticate user
            const response = await fetch(`http://IP:PORT/api/auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if(response.ok) {
                const data = await response.json();
                console.log('Login successful: ', data);

                // Check for user profile existence before registering a profile
                const profileResponse = await fetch(`http://IP:PORT/api/registerProfile?email=${email}`)
                
                // Check returned response to see if profile exists with exists property
                if(profileResponse.ok) {
                    const profileData = await profileResponse.json();

                    // Profile exists then go to HomeScreen
                    if(profileData.exists) {
                        console.log('Returned True for Profile Existence');
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'HomeScreen'}],
                            })
                        );
                    } 
                    // Profile does not exist then go to Register page
                    else {
                        console.log('Returned False for Profile Existence');
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'Register', params: { email: email } }], // Pass email (key)
                            })
                        );
                    }
                }
                // Error when finding profile then display error message
                else {
                    console.log('Error checking profile existence');
                    setErrors('Error checking profile existence')
                }
            }
            else {
                console.log('Invalid credentials');
                setErrors('Invalid credentials');
            }
        } 
        // Invalid then display error message
        catch(error) {
            console.error(error);
            // Update error state
            setErrors('Error logging in: ' + error.message);
            console.log(error.message);
            
        }
        console.log(email, password);
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={'position'} // Scrolls the whole page up
        >
            <ScrollView 
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} // Adds space below button
                keyboardShouldPersistTaps='handled' // Ensures taps are handled properly
            >
            <View>
                {/* UNT logo */}
                <View>
                    <View style ={styles.logoContainer}>
                        <Image  style={styles.logo} source={require('../../assets/unt_logo.png')} />
                    </View>
                </View>

                {/* Text Inputs */}
                <View style={styles.loginContainer}>
                <Text style={styles.inputLabels}>Email: </Text>
                    <View style={styles.textBubble}>
                        <TextInput 
                            placeholder="Type Email here"
                            onChangeText={ text => setEmail(text) }
                            value={email}
                            autoCorrect={false}
                            style={styles.textInput}
                        />
                    </View>
                    <Text  style={styles.inputLabels}>Password: </Text>
                    <View style={styles.textBubble}>
                        <TextInput 
                            placeholder="Type Password here"
                            onChangeText={ text => setPassword(text) }
                            value={password}
                            secureTextEntry
                            autoCorrect={false} 
                            style={styles.textInput}
                        />
                    </View>
                </View>

                {/* Button */}
                <View style={styles.button}>
                    <TouchableOpacity style={styles.inBut} 
                        onPress={ validateForm }
                    >
                    <Text style={styles.textSign}>Sign In</Text>
                    </TouchableOpacity>
                </View>

                {/* Display Error Message */}
                <View style={{alignItems: 'center',}}>
                    {errors && <View style={styles.errorBox}>
                        <Text style={styles.errorText}>{errors}</Text>
                    </View>}
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
    );
}


export default Login;
