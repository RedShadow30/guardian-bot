import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, TextInput, Button, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './styles'; // Importing styles from the styles.js file
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

function AI() {
  const [messages, setMessages] = useState([]); // Chat messages state
  const [inputText, setInputText] = useState(''); // Input text state

  useFocusEffect(
    React.useCallback(() => {
      const welcomeMsg = { id: Math.random().toString(), text: "Hello, how may I assist you?", sender: "agent"};
      setMessages([welcomeMsg]);
    }, []) // empty dependency array ensure this runs every time user navigates to this page
  );

  const sendMessage = async () => {
    if (inputText.trim()) {
      setMessages(prevMessages => [
        ...prevMessages,
        { id: Math.random().toString(), text: inputText, sender: "user" }, // Add message to chat
      ]);
      setInputText(''); // Clear input field after sending
    }

    // Send the message to backend
    console.log('Frontend sending: ' + inputText);
    try {
      // Send backend request in a different port
      const response = await axios.post('http://${REPLACE_IP_HERE}:3002/rag', {
        data: {
          message: inputText
        }
      })
  
       if(response.status == 200) {
        console.log('Response successful');
        // Display the agent response in console
        console.log('Agent Response: ' + response.data?.data?.content);
        const agentResponse = response.data?.data?.content || 'Sorry, I am unable to answer that.';

        if(agentResponse) {
          // Add agent response to chat messages
          setMessages(prevMessages => [
            ...prevMessages,
            { id: Math.random().toString(), text: response.data?.data?.content, sender: "agent"},
          ]);
        }
        else {
          console.error('Agent response is undefined');
        }

       }
       else {
        console.log('Response unsuccessful');
        // Display agent response as 'Sorry, I am unable to answer that.'
       }
    }
    catch(err) {
      console.error('Error communicating with backend: ', err);
    }
  };

  const renderMessage = ({ item }) => (
    // Color message based on who sent it
    <View style={[styles.messageContainer, item.sender === "agent"? styles.agentMessage : styles.userMessage]}>
      {/* Place respective icon based on who sent it */}
      {item.sender === "agent" && (
        <Icon name="rocket" size={25} style={styles.icon}/>
      )}
      {/* Change color of text to white if user message*/}
      <Text style={[styles.messageText, item.sender === "user" && { color: '#fff' }]}>{item.text}</Text>
      {item.sender === "user" && (
        <Icon name="user" size={30} style={styles.icon} />
      )}
    </View>
  );

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
      keyboardVerticalOffset={5} // Shifts input box above keyboard
    >
      {/* Chat messages */}
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderMessage}
        style={styles.chatContainer}
      />

      {/* Input and send button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </KeyboardAvoidingView>
  );
}

export default AI;
