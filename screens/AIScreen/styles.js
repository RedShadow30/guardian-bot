import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 60,
  },
  inputBar: {
    borderRadius: 16,
    marginHorizontal: 8,
    marginTop: 5,
    borderTopWidth: 0,
  },
  sendIcon: {
    margin:9, 
    marginBottom: 13, 
    marginTop: 3
  },
  bubbleWrapper: {
    left: {
      backgroundColor: '#e6e7e8',
    },
    right: {
      backgroundColor: '#3086fe',
    },
  },
  footer: {
    margin: 10,
  },
  typingText: {
    fontStyle:'italic', 
    color: 'gray'
  }
});

export default styles;
