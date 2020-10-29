/* eslint-disable prettier/prettier */
import React,  from 'react';
import { Text, View, Image, Button } from 'react-native';
import * as Linking from 'expo-linking';
import * as Google from 'expo-google-app-auth';
import styles from '../styles';


const logo = require('../../assets/logo.png');

export default function Login({ navigation }) {
  // const handlePress = () => {
  //   Linking.openURL('http://localhost:3000/auth/linkedin');
  // }

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

  const signInWithGoogle = () => {
    signInWithGoogleAsync()
    }

  const navToHome = () => {
    
    // Linking.openURL('http://localhost:3000/auth');
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 75, height: 75 }} />
      <Text style={styles.loginText}>Login</Text>
      <Button style={styles.loginButton} title="Sign in with Google" onPress={() => signInWithGoogle()} />
    </View>
  );
}
