import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import styles from '../styles';

// imported our logo and generic profile pic for now.
const logo = require('../../assets/logo.png');
const liamProfilePic = require('../../assets/Surfer_Liam.png');

// created the navBar component with logo, user image and app name.
export default function HomeNav() {
  return (
    <View style={styles.homeNavBar}>
      <Image source={logo} style={styles.homePageLogo} />
      <Text style={styles.surfHubSplash}>Surf Hub</Text>
      <Image source={liamProfilePic} style={styles.profilePic} />
    </View>
  );
}
