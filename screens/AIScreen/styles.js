import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    padding: 10,
    backgroundColor: '#D0D0D0',
    borderRadius: 10,
    marginVertical: 5,
    alignSelf: 'flex-start', // Aligns the messages to the left
  },
  messageText: {
    color: '#000',
    fontSize: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 2,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical:15,
    marginRight: 10,
    marginTop: 130,
    marginBottom: 130,
    fontSize:15,
  },
});

export default styles;
