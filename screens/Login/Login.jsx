const { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } = require("react-native")
import { useNavigation } from "@react-navigation/native";
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
            const response = await fetch(`http://{Your_IPv4_Address}:3000/api/auth`, {
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
                // Successful then go to Home
                navigation.navigate('Home');
            }
            else {
                console.error('Login failed: ', response.status);
                console.log('Inside responseData - False');
                setErrors('Invalid credentials');
            }
        } 
        // Invalid then display error message
        catch(error) {
            console.error(error);
            // Update error state
            setErrors('Error logging in: ' + error.message);
        }
        console.log(email, password);
    };

    return (
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
            { errors && <Text style={{color:'red'}}>{errors.message}</Text>}
        </View>
    );
}


export default Login;
