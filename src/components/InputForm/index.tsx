import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {grays} from '../../constants/colors';
import {strings} from '../../constants/strings';

const styles = StyleSheet.create({
  inputStyle: {
    height: 55,
    width: '85%',
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
  const [password, setPassword] = useState<string>();
  const [passwordError, setPasswordError] = useState('');

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

  const validatePassword = (value: string) => {
    setPassword(value);
    if (!value || value.length >= 8) {
      setPasswordError('');
    } else if (value.length < 8) {
      setPasswordError('Password length should be more than 8 characters.');
    }
  };

  return (
    <View>
      <TextInput
        testID="email"
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
        testID="password"
        value={password}
        style={[styles.inputStyle, {marginTop: 10}]}
        placeholder={strings.login.password}
        placeholderTextColor={grays.gray200}
        onChangeText={validatePassword}
      />
      <Text style={{fontSize: 14, color: 'red', marginLeft: 30, marginTop: 10}}>
        {passwordError}
      </Text>
    </View>
  );
}
