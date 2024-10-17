import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: -40,
    },
    content: {
      flex: 1,
      alignItems: 'center'
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
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    button: {
      paddingVertical: 15,
      paddingHorizontal: 25,
      borderRadius: 8,
      margin: 8,
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
    }
  })
  
export default styles;