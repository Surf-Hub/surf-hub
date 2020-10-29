import React from 'react';
import { Text, View, Image, Button, TextInput, ImageBackground, ScrollView } from 'react-native';
import styles from '../styles';
import HomeBreak from './HomeBreak';
import HomeNav from './HomeNav';
import SearchBar from './SearchBar';

// Image that serves as the background image of the homepage
const surferImg = {
  uri:
    'https://images.pexels.com/photos/1556796/pexels-photo-1556796.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260',
};

export default function HomePage() {
  return (
    <View>
      <HomeNav />
      <ScrollView>
        <ImageBackground source={surferImg} style={[styles.backGroundImage]}>
          <SearchBar />
          <HomeBreak />
        </ImageBackground>
      </ScrollView>
    </View>
  );
}
