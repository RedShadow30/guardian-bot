import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#333', // Dark gray background for the button
    padding: 15,
    borderRadius: 10,
    marginBottom: 10, // Space between buttons
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: 'white', // White text color for the options
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
  },
});

export default styles;
