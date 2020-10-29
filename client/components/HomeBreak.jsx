/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Modal, Button } from 'react-native';
import ViewMoreModal from './ViewMoreModal';
import styles from '../styles';

export default function HomeBreak(props) {
  // State that toggles whether modal is visible or not
  const [modalVisible, setModalVisible] = useState(false);
  // Home break data from props
  const { homeBreak } = props;
  // const dummyData = {
  //   location: 'Manhattan Beach',
  //   latitude: 46.9718,
  //   longitude: 73.2174,
  //   swellHeight: '1-2 ft',
  //   h2oTemp: '63-66 F',
  //   weather: '67 F',
  //   windDirection: '2 kts 119 SW',
  //   highLowTide: 'low 3.9 ft',
  // };

  return (
    <View style={styles.homeBreakBox}>
      {/* Weather Data for home break spot */}
      <Text>Name: {homeBreak.name}</Text>
      <Text>Latitude: {homeBreak.latitude}</Text>
      <Text>Longitude: {homeBreak.longitude}</Text>
      <Text>Swell Height: {homeBreak.swellHeight}</Text>
      <Text>H2O Temp: {homeBreak.h2oTemp}</Text>
      <Text>Weather: {homeBreak.weather}</Text>
      <Text>Wind Direction: {homeBreak.windDirection}</Text>
      <Text>High/Low Tide: {homeBreak.highLowTide}</Text>

      {/* Button to trigger modal popup */}
      <TouchableHighlight style={styles.viewMore} onPress={() => setModalVisible(true)}>
        {/* <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-three-dots-vertical"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg> */}
        <Text>See More</Text>
      </TouchableHighlight>

      {/* Modal that will popup if the user clicks to view more info */}
      <ViewMoreModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
}
