import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 40,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      marginTop: 25,
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
      borderWidth: 1,
      padding: 75,
      marginBottom: 1,
      borderRadius: 10,
      width: '80%', // Fixed width size
    }
  })
  
export default styles;