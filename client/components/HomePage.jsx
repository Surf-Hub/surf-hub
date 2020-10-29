import React, { useState } from 'react';
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

export default function HomePage({ route }) {
  console.log('this is the route:', route);
  const { photoUrl } = route.params;
  // homeBreak is what populates the main text area on the page
  const [homeBreak, setHomeBreak] = useState({
    name: 'Manhattan Beach',
    latitude: 46.9718,
    longitude: 73.2174,
    swellHeight: '1-2 ft',
    h2oTemp: '63-66 F',
    weather: '67 F',
    windDirection: '2 kts 119 SW',
    highLowTide: 'low 3.9 ft',
  });

  return (
    <View>
      <HomeNav photoUrl={photoUrl} />
      <ScrollView>
        <ImageBackground source={surferImg} style={[styles.backGroundImage]}>
          <SearchBar setHomeBreak={setHomeBreak} />
          {/* Render homebreak after the first one is added */}
          <HomeBreak homeBreak={homeBreak} />
        </ImageBackground>
      </ScrollView>
    </View>
  );
}
