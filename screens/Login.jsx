const { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } = require("react-native")
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";


function Login() {
    // Provides navigation
    const navigation = useNavigation();

    // Will store the user-entered values
    const [euid, setEuid] = useState('');
    const [password, setPassword] = useState('');
    // Will store whether entered values are acceptable characters/length
    const [euidVerify, setEuidVerify] = useState(false);
    const [passwordVerify, setPasswordVerify] = useState(false);

    // TODO: Form validation
    function handleName(e) {
        console.log(e);
    }


    return (
        <View>
            {/* UNT logo */}
            <View>
                <Image source={require('../assets/unt_logo.png')} />
            </View>

            {/* Text Inputs */}
            <View>
                <View>
                    <Text>EUID: </Text>
                    <TextInput 
                        placeholder="Type EUID here"
                        onChange={e => handleName(e)}
                    />
                    <Text>Password: </Text>
                    <TextInput placeholder="Type Password here" />
                </View>
            </View>

            {/* Button */}
            <View>
                <TouchableOpacity 
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                    style={styles.buttonStyle}
                >
                    <Text>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    /* Below is just for testing purposes, can be removed by designer */
    buttonStyle:{
        textAlign: 'center',
        marginTop: 30,
    }
});

export default Login;
