import React, {useState} from 'react';
import {View, StatusBar, StyleSheet, TextInput, Button} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});

export default function NewMessageForm({onSend}) {
  const [message, setMessage] = useState('');
  const handleSend = () => {
    onSend(message);
    setMessage('');
  };

  return (
    <View>
      <TextInput
        testID="messageText"
        style={styles.textInput}
        placeholder="Message"
        onChangeText={value => setMessage(value)}
        value={message}
      />
      <Button testID="sendButton" title="Send" onPress={() => handleSend()} />
    </View>
  );
}
