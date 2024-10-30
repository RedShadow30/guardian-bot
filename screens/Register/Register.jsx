const { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } = require("react-native")
import { CommonActions } from '@react-navigation/native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import styles from './styles';

function Register() {
    // Provides navigation and route
    const navigation = useNavigation();
    const route = useRoute();

    // Get email from route param or store empty if not found
    const { email: enteredEmail } = route.params || {};

    //  Will store the user-entered values
    const [fullName, setFullName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [contacts, setContacts] = useState(['', '', '']); // 3 phone numbers
    const [email, setEmail] = useState(enteredEmail || ''); // Set initial email
    const [errors, setErrors] = useState(null);

    // Form validation -> Able to display required msg when empty. 
    const handleRegister = async() => {
        const checkInputs = async() => {
            // Check if any of fields are empty
            if(!fullName || !street || !city || !state || !zipCode) {
                console.log('Please fill in all fields');
                setErrors('Please fill in all fields');
                return true; // Indicate errors
            }
    
            // Check if at least one contact is filled
            if(!contacts.some(contact => contact.trim() !== '')) {
                console.log('Provide at least one phone number');
                setErrors('Provide at least one phone number');
                return true; // Indicate errors
            }

            return false; // No errors
        }

        const hasErrors = await checkInputs();
        if(hasErrors) return; // Exit if errors

        // Else clear errors
        setErrors(null);

        // Profile Creation
        try {
            // API request to backend API to create profile
            const response = await fetch(`http://IP:PORT/api/registerProfile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: fullName,
                    email: email,
                    street: street,
                    city: city,
                    state: state,
                    zipCode: zipCode,
                    contacts: contacts.filter(contact => contact.trim() !== ''), // Only include non-empty contacts
                }),
            });

            if(response.ok) {
                // Parse response text
                const data = await response.json();
                console.log('Profile created successfully: ', data);
                // Successful then go to Registration Successful page
                navigation.navigate('RegisterSuccess')
            }
            else {
                console.log('Error in response');
                // Display error message
                setErrors('Error: Fill out correctly');
            }
        } 
        // Invalid then display error message
        catch(error) {
            // Update error state
            setErrors('Error: ' + error.message);
            console.log('Error registering profile: ' + error.message);
            
        }
        console.log(email, street, city, state, contacts);
    };

    return (
        <KeyboardAvoidingView 
            style={styles.mainContainer} 
            behavior={'padding'} 
        >
            <ScrollView 
                contentContainerStyle={{ margin: 50, flexGrow: 1, justifyContent: 'center' }} // Adds space below button
                keyboardShouldPersistTaps='handled' // Ensures taps are handled properly
            >
            <View>

                <Text style={styles.title}>Profile Registration </Text>
                
                {/* Text Inputs for Profile */}
                <View style={styles.loginContainer}>
                    {/* Full Name */}
                    <Text style={styles.inputLabels}>Full Name: </Text>
                    <View style={styles.textBubble}>
                        <TextInput 
                            placeholder="Type Full Name here"
                            onChangeText={ text => setFullName(text) }
                            value={fullName}
                            autoCorrect={false}
                            style={styles.textInput}
                        />
                    </View>

                    {/* Street */}
                    <Text  style={styles.inputLabels}>Street: </Text>
                    <View style={styles.textBubble}>
                        <TextInput 
                            placeholder="Type Street here"
                            onChangeText={ text => setStreet(text) }
                            value={street}
                            autoCorrect={false} 
                            style={styles.textInput}
                        />
                    </View>

                    {/* City */}
                    <Text style={styles.inputLabels}>City: </Text>
                    <View style={styles.textBubble}>
                        <TextInput
                            placeholder="Type City here"
                            onChangeText={text => setCity(text)}
                            value={city}
                            autoCorrect={false}
                            style={styles.textInput}
                        />
                    </View>

                    {/* State */}
                    <Text  style={styles.inputLabels}>State: </Text>
                    <View style={styles.textBubble}>
                        <TextInput 
                            placeholder="Type State here"
                            onChangeText={ text => setState(text) }
                            value={state}
                            autoCorrect={false} 
                            style={styles.textInput}
                            maxLength={2}
                        />
                    </View>

                    {/* Zip Code */}
                    <Text  style={styles.inputLabels}>Zip Code: </Text>
                    <View style={styles.textBubble}>
                        <TextInput 
                            placeholder="Type Zip Code here"
                            onChangeText={ text => setZipCode(text) }
                            value={zipCode}
                            autoCorrect={false} 
                            style={styles.textInput}
                            maxLength={5}
                        />
                    </View>

                    {/* Contacts */}
                    <Text style={styles.inputLabels}>Emergency Contacts: </Text>
                    {/* Use map function to render a TextInput for each contact */}
                    {contacts.map((contact, index) => (
                        <View key={index} style={styles.textBubble}>
                            <TextInput
                                placeholder={`Phone Number ${index + 1}`} // To count the Phone Number 1 to 3
                                onChangeText={text => {
                                    // Create a new contacts array with the updated contact
                                    const newContacts = [...contacts];
                                    newContacts[index] = text;
                                    setContacts(newContacts);
                                }}
                                value={contact}
                                autoCorrect={false}
                                style={styles.textInput}
                                maxLength={10}
                            />
                        </View>
                    ))}
                </View>

                {/* Button */}
                <View style={styles.button}>
                    <TouchableOpacity style={styles.inBut} 
                        onPress={ handleRegister }
                    >
                    <Text style={styles.textSign}>Register</Text>
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

export default Register;