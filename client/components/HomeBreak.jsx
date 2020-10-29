/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Modal, Button } from 'react-native';
import { List } from 'react-native-paper';
import ViewMoreModal from './ViewMoreModal';
import styles from '../styles';

export default function HomeBreak(props) {
  // State that toggles whether modal is visible or not
  const [modalVisible, setModalVisible] = useState(false);
  // Sets whether accordion is expanded or not
  const [expanded, setExpanded] = useState(false);
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
  // Function to expand accordion
  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <List.Accordion
      style={styles.homeBreakBox}
      title="Home Break"
      expanded={expanded}
      onPress={handlePress}
      // theme={{ color: { background: 'red' } }}
    >
      {/* Button to trigger modal popup */}
      <TouchableHighlight style={styles.viewMore} onPress={() => setModalVisible(true)}>
        <Text style={styles.textFont}>Friends List</Text>
      </TouchableHighlight>
      {/* Weather Data for home break spot */}
      <List.Item titleStyle={styles.listItem} title={`Name: ${homeBreak.name}`} />
      <List.Item titleStyle={styles.listItem} title={`Latitude: ${homeBreak.latitude}`} />
      <List.Item titleStyle={styles.listItem} title={`Longitude: ${homeBreak.longitude}`} />
      <List.Item titleStyle={styles.listItem} title={`Swell Height: ${homeBreak.swellHeight}`} />
      <List.Item titleStyle={styles.listItem} title={`H2O Temp: ${homeBreak.h2oTemp}`} />
      <List.Item titleStyle={styles.listItem} title={`Weather: ${homeBreak.weather}`} />
      <List.Item
        titleStyle={styles.listItem}
        title={`Wind Direction: ${homeBreak.windDirection}`}
      />
      <List.Item titleStyle={styles.listItem} title={`High/Low Tide: ${homeBreak.highLowTide}`} />
      {/* <List.Item>Latitude: {homeBreak.latitude}</List.Item>
      <List.Item>Longitude: {homeBreak.longitude}</List.Item>
      <List.Item>Swell Height: {homeBreak.swellHeight}</List.Item>
      <List.Item>H2O Temp: {homeBreak.h2oTemp}</List.Item>
      <List.Item>Weather: {homeBreak.weather}</List.Item>
      <List.Item>Wind Direction: {homeBreak.windDirection}</List.Item>
      <List.Item>High/Low Tide: {homeBreak.highLowTide}</List.Item> */}

      {/* Modal that will popup if the user clicks to view more info */}
      <ViewMoreModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </List.Accordion>
  );
}
