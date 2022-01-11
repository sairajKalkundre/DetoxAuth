import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import NewMessageForm from './src/NewMesssageForm';
import {grays} from 'constants/colors';
const App = () => {
  const [messages, setMessages] = useState([]);
  const handleSend = newMessage => {
    setMessages([newMessage, ...messages]);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
