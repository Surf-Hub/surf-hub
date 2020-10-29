/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Text, View, Image, Button, TextInput, Pressable } from 'react-native';
import styles from '../styles';

export default function SearchBar(props) {
  // Default search is empty strings for all input boxes
  const defaultSearch = {
    name: '',
    latitude: '',
    longitude: '',
  };
  // searchBar is the value of the text input in the search bar
  const [searchBar, setSearchBar] = useState(defaultSearch);
  // Function that gets invoked after submitting search bar
  const submitSearch = () => {
    // Fetch data about home break from backend
    // Set home break to the response object
    props.setHomeBreak({
      name: searchBar.name,
      latitude: searchBar.latitude,
      longitude: searchBar.longitude,
      swellHeight: '',
      h2oTemp: '',
      weather: '',
      windDirection: '',
      highLowTide: '',
    });
    // Reset inputs to empty strings
    setSearchBar(defaultSearch);
  };

  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Break Name"
        placeholderTextColor="white"
        style={styles.searchBreaks}
        value={searchBar.name}
        onChange={(e) => setSearchBar({ ...searchBar, name: e.target.value })}
      />
      <TextInput
        placeholder="Latitude"
        placeholderTextColor="white"
        style={styles.searchBreaks}
        value={searchBar.latitude}
        onChange={(e) => setSearchBar({ ...searchBar, latitude: e.target.value })}
      />
      <TextInput
        placeholder="Longitude"
        placeholderTextColor="white"
        style={styles.searchBreaks}
        value={searchBar.longitude}
        onChange={(e) => setSearchBar({ ...searchBar, longitude: e.target.value })}
      />
      <Pressable style={styles.searchButton} onPressIn={submitSearch}>
        <Text style={{ color: 'white' }}>Surfs Up Bra</Text>
      </Pressable>
    </View>
  );
}
