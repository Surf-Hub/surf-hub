/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import * as Linking from 'expo-linking';
import styles from '../styles';

const logo = require('../../assets/logo.png');

export default function Login({ navigation }) {
  // const handlePress = () => {
  //   Linking.openURL('http://localhost:3000/auth/linkedin');
  // }
  const navToHome = () => {
    navigation.navigate('Surf Hub');
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 75, height: 75 }} />
      <Text style={styles.loginText}>Login</Text>
      <Button style={styles.loginButton} title="Sign in with Google" onPress={navToHome} />
    </View>
  );
}
