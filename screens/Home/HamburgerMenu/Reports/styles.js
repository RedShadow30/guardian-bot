import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Background color of the page
    padding: 20, // Padding around the content
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black', // White text color
    marginBottom: 10, // Space below the title
  },
  description: {
    fontSize: 16,
    color: 'black', // Light gray text color for the description
    lineHeight: 22, // Space between lines for better readability
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10, // Space between the icon and the text
    fontWeight: 'bold',
  },
});

export default styles;
