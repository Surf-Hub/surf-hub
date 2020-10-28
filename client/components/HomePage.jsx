import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import styles from '../styles';

const logo = require('../../assets/logo.jpg');
const liamProfilePic = require('../../assets/Surfer_Liam.png');
export default function HomePage() {
  return (
    <View>
      <View style={styles.homeNavBar}>
        <Image source={logo} style={styles.homePageLogo} />
        <Text style={styles.surfHubSplash}>Surf Hub</Text>
        <Image source={liamProfilePic} style={styles.profilePic} />
      </View>

      <View style={styles.container}>
        <Text style={styles.HomePageText}>Home Page</Text>
      </View>
    </View>
  );
}
