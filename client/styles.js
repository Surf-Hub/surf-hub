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
    marginTop: 10,
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
    borderRadius: 20,
  },
  surfHubSplash: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#2c5bb6',
  },
  backGroundImage: {
    left: 0,
    right: 0,
    height: 810,
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
    width: 200,
    left: 90,
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  searchButton: {
    borderWidth: 1,
    borderColor: '#669BBC',
    borderRadius: 5,
    backgroundColor: '#3AAED8',
    marginTop: 10,
    marginBottom: 10,
  },
  searchBreaks: {
    // padding: 5,
    // borderWidth: 1,
    // borderColor: 'black',
    // borderRadius: 5,
    // margin: 1,
    // color: 'white',
  },
  homeBreakBox: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 50,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'yellow',
    opacity: 1,
  },
  viewMore: {
    marginLeft: 'auto',
    marginBottom: 'auto',
    marginRight: 10,
  },
  modalContainer: {
    marginTop: 50,
  },

  listItem: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },

  textFont: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    borderColor: 'yellow',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default styles;
