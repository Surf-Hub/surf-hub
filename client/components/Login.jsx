/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import * as Linking from 'expo-linking';
import styles from '../styles';
import * as Google from 'expo-google-app-auth';

const logo = require('../../assets/logo.png');

export default function Login({ navigation }) {
  // const handlePress = () => {
  //   Linking.openURL('http://localhost:3000/auth/linkedin');
  // }
  const navToHome = () => {
    navigation.navigate('Surf Hub');
  };

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        behavior: 'web',
        iosClientId: '1058697755214-0b78knknlj6lalfvetlor712mbq1dbad.apps.googleusercontent.com',
        // androidClientId: AND_CLIENT_ID,
        scopes: ['profile', 'email'],
      });
      if (result.type === 'success') {
        navigation.navigate('Surf Hub');
        console.log(result);
        return result.accessToken;
      }
      return { cancelled: true };
    } catch (e) {
      return { error: true };
    }
  }
  // Invokes signin OAuth process
  const signInWithGoogle = () => {
    signInWithGoogleAsync();
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 75, height: 75 }} />
      <Text style={styles.loginText}>Login</Text>
      <Button style={styles.loginButton} mode="outlined" onPress={navToHome}>
        Sign in with Google
      </Button>
    </View>
  );
}
