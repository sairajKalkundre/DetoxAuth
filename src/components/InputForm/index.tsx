import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {grays} from '../../constants/colors';
import {strings} from '../../constants/strings';

const styles = StyleSheet.create({
  inputStyle: {
    height: 55,
    width: '80%',
    backgroundColor: '#F4F4F4',
    marginLeft: 30,
    borderRadius: 10,
    paddingLeft: 20,
    fontWeight: '800',
  },
});

export default function InputForm() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const vaidateUsername = (value: string) => {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    setEmail(value);
    if (!value) {
      setEmailError('');
    } else if (!value.match(pattern)) {
      setEmailError('Invalid Email provided');
    } else {
      setEmailError('');
    }
  };

  return (
    <View>
      <TextInput
        value={email}
        onChangeText={val => vaidateUsername(val)}
        style={[styles.inputStyle, {marginTop: 50}]}
        placeholder={strings.login.email}
        placeholderTextColor={grays.gray200}
      />
      <Text
        style={{fontSize: 14, color: 'red', marginLeft: 30, marginTop: 10}}
        testID="emailError">
        {emailError}
      </Text>
      <TextInput
        // value="sairaj"
        style={[styles.inputStyle, {marginTop: 10}]}
        placeholder={strings.login.password}
        placeholderTextColor={grays.gray200}
      />
    </View>
  );
}
