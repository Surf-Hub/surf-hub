import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import HomePage from './client/components/HomePage';
import Login from './client/components/Login';
import styles from './client/styles';

// Create a Stack
const Stack = createStackNavigator();

// Theme for react native paper
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2c5bb6',
  },
};

export default function App() {
  // Ensures no warnings show up regarding deprecated dependencies
  LogBox.ignoreAllLogs(true);

  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Surf Hub" component={HomePage} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
