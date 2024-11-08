import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 3,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 13,
  },
  text: {
    color: 'gray',
  },
  textBox: {
    backgroundColor: '#eeedeb',
    borderColor: '#dddddd',
    borderWidth: 2,
    padding: 75,
    marginBottom: 1,
    borderRadius: 10,
    width: '80%', // Fixed width size
  },
  disclaimer: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    color: '#FF6347', // Red color for emergency feel
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
