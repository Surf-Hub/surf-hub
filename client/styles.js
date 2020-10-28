import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 'large',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  loginButton: {
    marginBottom: '1rem',
    padding: '0.5rem',
  },
  homePageLogo: {
    height: 40,
    width: 40,
  },
  profilePic: {
    height: 40,
    width: 40,
  },
  surfHubSplash: {
    fontWeight: 'bold',
    fontSize: 'large',
    color: '#2c5bb6',
  },
  homeNavBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '1rem',
  },
});

export default styles;
