import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import styles from '../styles';
import HomeNav from './HomeNav';

export default function HomePage() {
  return (
    <View>
      <HomeNav />
      <View style={styles.container}>
        <Text style={styles.HomePageText}>Home Page</Text>
      </View>
    </View>
  );
}
