const { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } = require("react-native")
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import styles from './styles';

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
                <View style ={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/unt_logo.png')} />
                </View>
            </View>

            {/* Text Inputs */}
            <View style={styles.loginContainer}>
            <Text style={styles.inputLabels}>EUID </Text>
                <View style={styles.textBubble}>
                    <TextInput 
                        placeholder="Type EUID here" style={styles.textInput}
                        onChange={e => handleName(e)}/>
                </View>
                <Text style={styles.inputLabels}>Password </Text>
                <View style={styles.textBubble}>
                    <TextInput placeholder="Type Password here" style={styles.textInput}/>
                    </View>
            </View>

            {/* Button */}
            <View style={styles.button}>
                <TouchableOpacity style={styles.inBut} 
                    onPress={() => {
                        navigation.navigate('Home');
                    }}>
                    <Text style={styles.textSign}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default Login;
