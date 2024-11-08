import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Align items to the bottom
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'white', // Set text color to match your theme
    marginLeft: 8, // Optional margin
    fontSize: 20, // Font size for the header text
  },
  sosButton: {
    width: 100, // Width of the SOS button
    height: 100, // Height of the SOS button
    borderRadius: 50, // Make it circular
    backgroundColor: 'red', // Red color for emergency button
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -5, // Makes the button float higher in the tab bar
    position: 'absolute', // Position the SOS button absolutely
    bottom: 0, // Position it above the tab bar
    left: '45%', // Center horizontally
    transform: [{ translateX: -35 }], // Adjust for button size
    elevation: 5, // Add shadow for Android
    shadowColor: 'white', // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 20,
    shadowRadius: 15,
  },
  homeButton: {
    width: 70, // Set a larger width for the Home button
    height: 70, // Set a larger height for the Home button
    borderRadius: 40, // Make it circular
    backgroundColor: 'black', // Match with tab bar background
    justifyContent: 'center',
    alignItems: 'center',
    left: '50%', // Center horizontally

  },
  profileButton: {
    width: 70, // Set a larger width for the Home button
    height: 70, // Set a larger height for the Home button
    borderRadius: 40, // Make it circular
    left: 220, // Center horizontally
  },
});

export default styles;
