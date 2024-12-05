import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding:20,
        backgroundColor: '#f9f9f9'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    detailBox: {
        width: '100%',
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    value: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
    },
    button: {
        marginTop: 20,
        fontSize: 18,
        color: '#ffffff',
        backgroundColor: '#900404',
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
    },
    editButton: {
        marginRight: 15, // Adjust to your preference
    },
    editButtonText: {
        fontSize: 16,
        color: '#900404', // Color to match your theme
        fontWeight: 'bold',
    },
    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    voiceContainer: {
        height: "20%",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: -30,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 40
      },
      fill: {
        flex: 1,
        margin: 15
      }
});

export default styles;