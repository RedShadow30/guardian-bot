import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  animatedContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: '100%',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginBottom: 30,
  },
  stepsContainer: {
    marginBottom: 30,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 5,
  },
  stepText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 15,
  },
  resourcesContainer: {
    marginTop: 30,
  },
  resourceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff4c4c',
    marginBottom: 10,
  },
  resourceItem: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  videoContainer: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  pdfLink: {
    color: '#007AFF', // Bright blue for visibility
    textDecorationLine: 'underline', // Underline to indicate a hyperlink
    fontWeight: 'bold', // Bold for emphasis
    fontSize: 16, // Slightly larger font size
  },
});

export default styles;
