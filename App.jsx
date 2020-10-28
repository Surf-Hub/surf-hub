import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import Homescreen from './client/components/Homescreen';
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
      <Stack.Navigator>
        <Stack.Screen name="Home of Surfers" component={Homescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
