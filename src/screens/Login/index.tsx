import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import InputForm from 'src/components/InputForm';

const styles = StyleSheet.create({
  titleText: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 30,
  },
  subtitleText: {
    fontSize: 20,
    color: '',
    marginTop: 20,
  },
});

export default function Login() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{top: '20%'}}>
        <Text style={styles.titleText}>Login</Text>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              styles.subtitleText,
              {color: '#9B9B9B', marginLeft: 30, fontWeight: '500'},
            ]}>
            If you are new /
          </Text>
          <Text
            style={[
              styles.subtitleText,
              {color: '#595959', marginLeft: 10, fontWeight: '700'},
            ]}>
            Create New
          </Text>
        </View>

        <InputForm />

        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              styles.subtitleText,
              {color: '#9B9B9B', marginLeft: 30, fontWeight: '500'},
            ]}>
            Forgot Passcode? /
          </Text>
          <Text
            style={[
              styles.subtitleText,
              {color: '#595959', marginLeft: 10, fontWeight: '700'},
            ]}>
            Reset
          </Text>
        </View>

        <TouchableOpacity
          style={{
            height: 55,
            width: '80%',
            backgroundColor: '#AD1E3A',
            marginLeft: 30,
            marginTop: 50,
            borderRadius: 10,
            paddingLeft: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
