import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default function HomeBreak() {
  const dummyData = {
    location: 'Manhattan Beach',
    swellHeight: '1-2 ft',
    h2oTemp: '63-66 F',
    weather: '67 F',
    windDirection: '2 kts 119 SW',
    highLowTide: 'low 3.9 ft',
  };

  return (
    <View style={styles.homeBreakBox}>
      <Text>Location: {dummyData.location}</Text>
      <Text>Swell Height: {dummyData.swellHeight}</Text>
      <Text>H2O Temp: {dummyData.h2oTemp}</Text>
      <Text>Weather: {dummyData.weather}</Text>
      <Text>Wind Direction: {dummyData.windDirection}</Text>
      <Text>High/Low Tide: {dummyData.highLowTide}</Text>
    </View>
  );
}
