import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import styles from '../styles';

const logo = require('../../assets/logo.jpg');

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.HomePageText}>Home Page</Text>
    </View>
  );
}
