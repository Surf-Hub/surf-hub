import React, { useState } from 'react';
import { Text, View, Image, Button, TextInput } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import styles from '../styles';

export default function SearchBar() {
  // Default search is empty strings for all input boxes
  const defaultSearch = {
    name: '',
    latitude: '',
    longitude: '',
  };
  // searchBar is the value of the text input in the search bar
  const [searchBar, setSearchBar] = useState(defaultSearch);

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
      <TouchableHighlight style={styles.searchButton} onPress={() => setSearchBar(defaultSearch)}>
        <Text style={{ color: 'white' }}>Surf's Up Bra</Text>
      </TouchableHighlight>
    </View>
  );
}
