import React, { useState } from 'react';
import { Text, View, Image, Button, TextInput } from 'react-native';
import styles from '../styles';

export default function SearchBar() {
  // searchBar is the value of the text input in the search bar
  const [searchBar, setSearchBar] = useState('');

  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search Breaks"
        placeholderTextColor="white"
        style={styles.searchBreaks}
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
      />
      <Button title="Surfs Up Bra" style={styles.searchButton} onPress={() => setSearchBar('')} />
    </View>
  );
}
