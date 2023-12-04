import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import firebase from '../firebase';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const chatRef = firebase.database().ref('chat');

    // Listen for changes in the database and update the messages state
    const onMessage = (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messagesArray = Object.values(data);
        setMessages(messagesArray);
      }
    };

    chatRef.on('value', onMessage);

    // Cleanup function to unsubscribe when the component unmounts
    return () => {
      chatRef.off('value', onMessage);
    };
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  const sendMessage = () => {
    const chatRef = firebase.database().ref('chat');
    chatRef.push({
      text,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    });
    setText('');
  };

  return (
    <View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.timestamp.toString()}
        renderItem={({ item }) => (
          <Text>
            {item.text}
          </Text>
        )}
      />
      <View>
        <TextInput
          placeholder="Type your message"
          value={text}
          onChangeText={(newText) => setText(newText)}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

export default ChatScreen;
