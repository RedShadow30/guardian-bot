import React, { useState, useCallback, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, TextInput, Button, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './styles'; // Importing styles from the styles.js file
import Icon from 'react-native-vector-icons/FontAwesome';
import { Bubble, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat';
import axios from 'axios';

function AI() {
  const [messages, setMessages] = useState([]); // Chat messages state
  const [isAgentTyping, setIsAgentTyping] = useState(false); // Agent typing state

  // Reset messages using useFocusEffect
  useFocusEffect(

    useCallback(() => {
    // Default message to display
    setMessages([
      {
        _id: 1,
        text: "Hi I'm Jarvis, how may I assist you?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'GuardianBot',
          avatar: require('../../assets/GB_IMG2.png'),
        },
      },
    ])
  }, [])
);

  const onSend = useCallback(async (messages = []) => {
    // Add user message to chat    
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));

    // Extract user's text message
    const userMessage = messages[0].text;
    console.log('Frontend sending: ' + userMessage);

    try {
      // Set Agent typing state to true
      setIsAgentTyping(true);

      // Send backend request in DIFFERENT port (3002)
      const response = await axios.post('http://${REPLACE_IP_HERE}:3002/rag', {
        data: { message: userMessage }
      })
  
      if(response.status == 200) {
        // Store and display Agent response
        const agentResponse = response.data?.data?.content || 'Sorry, I am unable to answer that.';
        console.log('Agent Response: ' + agentResponse);

        // Add Agent Message to chat
        setMessages(previousMessages => 
          GiftedChat.append(previousMessages, [
            {
              _id: Math.random().toString(),
              text: agentResponse,
              createdAt: new Date(),
              user: {
                _id: 2, // ID of Agent
                name: 'GuardianBot',
                avatar: require('../../assets/GB_IMG2.png'),
              },
            },
          ])
        );
      }
      else {
        console.log('Response unsuccessful');
      }
    }
    catch(err) {
      console.error('Error communicating with backend: ', err);
    }
    // Hide typing indicator after response returned
    setIsAgentTyping(false);
  }, [])

  // Render typing box
  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={styles.inputBar}
      />
    )
  };

  // Add a send icon
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={styles.sendIcon}>
          <Icon name="send" size={24} color="#0075FD" />
        </View>
      </Send>
    )
  }

  // Render the chat bubble colors
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={styles.bubbleWrapper}
        />
    );
  };

  const CustomScroll = () => {
    return (
      <View>
        <Icon name="arrow-down" size={25} color={"#000000"} />
      </View>
    );
  };

  const renderFooter = () => {
    if(isAgentTyping) {
      return (
      <View style={styles.footer}>
        <Text style={styles.typingText}>Agent thinking...</Text>
      </View>
    
    )
    }
    return null;
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container}>
        {/* Chat messages */}
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
          scrollToBottom={true}
          renderInputToolbar={renderInputToolbar}
          renderSend={renderSend}
          renderBubble={renderBubble}
          scrollToBottomComponent={CustomScroll}
          isTyping={isAgentTyping}
          renderFooter={renderFooter}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

export default AI;
