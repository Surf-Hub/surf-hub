import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import HomePage from './client/components/HomePage';
import Login from './client/components/Login';
import styles from './client/styles';

// Create a Stack
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text>Come on man!</Text>
        <StatusBar style='auto' />
      </View> */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Surf Hub" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
