import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 50,
    marginTop: 50,
  },
  sectionContainer: {
    marginBottom: 20,
    alignItems: 'center', // Center the section
  },
  profileItem: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Helvetica',
    textAlign: 'center',
    margin: 10,
  },
  emergencyContactsTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
    color: 'black',
  },
  contactsContainer: {
    width: '100%', // Full width
    alignItems: 'center', // Center the contacts
  },
  contactItemContainer: {
    width: '90%', // Slightly less than full width
    alignItems: 'flex-start', // Align text to start
  },
  emergencyContactItem: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Helvetica',
    textAlign: 'left',
    marginLeft: 23,
    marginTop: 5,
  }
});