import React from 'react';
import { Text, View, Image, Button, TextInput } from 'react-native';
import styles from '../styles';
import HomeNav from './HomeNav';
import SearchBar from './SearchBar';

export default function HomePage() {
  return (
    <View>
      <HomeNav />
      <View style={styles.container}>
        <SearchBar />
      </View>
    </View>
  );
}
