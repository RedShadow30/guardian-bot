import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
    },
    title: {
        paddingBottom: 20,
        fontFamily: 'Halvetica',
        color: 'green',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 30,
    },
    inputLabels: {
        fontFamily: 'Halvetica',
        color: 'green',
        textAlign: 'center', // Change to left alignment for labels
        fontWeight: '600',
        fontSize: 20,
        marginBottom: 5,
    },
    loginContainer: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 35,
        paddingVertical: 10,
    },
    inputContainer1: {
        flexDirection: 'row', // Align label and input in a row
        alignItems: 'center', // Vertically center the label and input
        marginBottom: 15, // Space between each input group
        width: 200
    },
    inputContainer2: {
        flexDirection: 'column', // Align label and input in a row
        alignItems: 'center', // Vertically center the label and input
        marginBottom: 15,
    },
    textBubble: {
        flexDirection: 'row',
        paddingVertical: 5, // Reduced vertical padding
        paddingHorizontal: 10, // Reduced horizontal padding
        borderWidth: 2, // Slightly reduced border width
        borderColor: 'green',
        borderRadius: 50,
        marginBottom: 10,
        flex: 1,
    },
    textSmBubble: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 50,
        marginBottom: 10,
        marginLeft: 6,
        flex: 1,
    },
    textInput: {
        flex: 1, // Make the input field flexible to fill available space
        textAlign: 'center', // Center text within the input
        fontSize: 20,
        height: 40, // Set a fixed height for the input
        paddingVertical: 0, 
    },
    button: {
        alignItems: 'center',
        marginTop: 15,
        alignContent: 'center',
        textAlign: 'center',
        marginBottom: 100,
        marginTop: 4
    },
    inBut: {
        width: '50%',
        backgroundColor: 'green',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 50,
    },
    textSign: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    errorBox: {
        borderRadius: 5,
        marginTop: -80,
        padding: 15,
        alignItems: 'center',
        width: '80%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3, 
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    errorText: {
        width: 500,
        color:'red', 
        fontWeight: 'bold', 
        marginTop: -20, 
        fontSize: 18,
        textAlign: 'center',
    },
})

export default styles;