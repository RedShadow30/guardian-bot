import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // Add some padding around the container
    backgroundColor: 'white', // White background
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'white', // Header text color
    fontWeight: 'bold',
    fontSize: 20, // Font size for the header text
    marginLeft: 8, // Margin between icon and text
  },
  title: {
    fontSize: 24, // Title font size
    fontWeight: 'bold', // Title text weight
    marginBottom: 20, // Space below the title
    color: 'black', // Color of the title text
  },
  resourceItem: {
    fontSize: 18, // Font size for each resource item
    marginVertical: 10, // Space between resource items
    color: 'black', // Color for the resource item text
  },
});

export default styles;
