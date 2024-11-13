import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, TextInput, Button, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './styles'; // Importing styles from the styles.js file
import Icon from 'react-native-vector-icons/FontAwesome';

function AI() {
  const [messages, setMessages] = useState([]); // Chat messages state
  const [inputText, setInputText] = useState(''); // Input text state

  useFocusEffect(
    React.useCallback(() => {
      const welcomeMsg = { id: Math.random().toString(), text: "Hello, how may I assist you?", sender: "agent"};
      setMessages([welcomeMsg]);
    }, []) // empty dependency array ensure this runs every time user navigates to this page
  );

  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages(prevMessages => [
        ...prevMessages,
        { id: Math.random().toString(), text: inputText, sender: "user" }, // Add message to chat
      ]);
      setInputText(''); // Clear input field after sending
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
