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
    padding: 9,
    paddingEnd: 13,
    backgroundColor: '#D0D0D0',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 8,
    flexDirection: 'row', // align icon and text in a row
    alignItems: 'center', // center vertically
    elevation: 5,
    shadowColor: '#000', // shadow for Android
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  agentMessage: {
    backgroundColor: '#D0D0D0',
    alignSelf: 'flex-start', // align agent messages to left
    marginRight: 50,
  },
  userMessage: {
    backgroundColor: '#0084FF',
    alignSelf: 'flex-end', // align user messages to the right
    paddingStart: 15,
    paddingEnd: 5,
  },
  messageText: {
    color: '#000',
    fontSize: 20,
    maxWidth: '100%'
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 2,
    alignItems: 'center',
    marginBottom: 110, // for the input box to be above bottom tabs
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical:15,
    marginRight: 10,
    fontSize:15,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 6,
    marginTop: 5,
  }
});

export default styles;
