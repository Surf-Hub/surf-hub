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
    fontSize: 20,
    marginTop: 1,
    marginBottom: 1,
  },
  loginButton: {
    marginBottom: 1,
    padding: 0.5,
  },
  homePageLogo: {
    height: 40,
    width: 40,
    marginTop: 50,
  },
  profilePic: {
    height: 40,
    width: 40,
    marginTop: 50,
  },
  surfHubSplash: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#2c5bb6',
  },
  backGroundImage: {
    left: 0,
    right: 0,
    height: 605,
    justifyContent: 'center',
  },
  homeNavBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 999,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButton: {
    borderWidth: 1,
    borderColor: '#669BBC',
    borderRadius: 5,
    backgroundColor: '#3AAED8',
    padding: 5,
  },
  searchBreaks: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    margin: 1,
    color: 'white',
  },
  homeBreakBox: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  viewMore: {
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 0.75,
    marginRight: 0.75,
  },
  modalContainer: {
    marginTop: 50,
  },
});

export default styles;
