import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'center',
    backgroundColor: '#E8F9F9', // Light background color
    paddingTop: 40, // Add padding at the top for spacing
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#900404', // Main color for text matching SOS button color
    textAlign: 'center',
    marginBottom: 10, // Reduced bottom margin for closer button
  },
  description: {
    fontSize: 18,
    color: '#010C80', // A complementary color for description (matching SOS button color)
    textAlign: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  button: {
    // Match GradientButton styles if needed, or leave it to GradientButton component
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white', // Button text color
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
