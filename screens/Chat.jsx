
import {View, StyleSheet, Text, TextInput, Button} from "react-native";
import { useState } from "react";

function Chat() {
    const [message, setMessage] = useState('');
    const [response, setResponses] = useState([]);

    const handleMessage = () => {
        // Send msg to NLP library or service
        // Get response from chatbot brain
        // Update responses state with new response
    };

    return (
        <View style={styles.container}>
            {/* Upper Navigation */}
            <View id="upper-nav" style={styles.navbar}>
                <Text style={styles.text}>AI Chat</Text>

            </View>

            <View style={styles.chatMain}>

            </View>

            {/* Text box for User to type prompt */}
            <View style={styles.box}>
                <View style={styles.userEntry}>
                    <TextInput
                        style={styles.inputBar}
                        value={message}
                        onChangeText={(text) => setMessage(text)}
                        placeholder="Type a message"
                        />
                    <Button title="Send" style={styles.button} onPress={handleMessage} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '100%'
    },
    navbar:{
        backgroundColor: '#9fe2bf',
        alignItems: 'center',
        height: '12%',
    },
    chatMain:{
        height: '60%',
        marginTop: 80,
    },
    userEntry:{
        flexDirection: 'row',
        alignContent: 'space-between',
        marginTop: 50,
        marginLeft: 30,
    },
    inputBar:{
        width: '75%',
    },
    text:{
        paddingTop: 37,
        fontSize: 30,
    },
    box:{
        backgroundColor: 'lightgrey',
    }
});

export default Chat;

// Look for a per charge basis for AI Chatbot - Amazon Bedrock