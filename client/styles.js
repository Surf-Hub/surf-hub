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
  backGroundImage: {
    width: '100vw',
    height: '100vh',
  },
  homeNavBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '1rem',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBreaks: {
    padding: '.2rem',
    border: '1px solid black',
    borderRadius: '5px',
    margin: '1rem',
    color: 'white',
  },
  homeBreakBox: {
    height: '20vh',
    width: '80vw',
    border: '1px solid black',
    borderRadius: '5px',
    opacity: '50%',
  },
});

export default styles;
