import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
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
    inputLabels:{
        fontFamily: 'Halvetica',
        color: 'green',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 20,
    },
    loginContainer: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 35,
        paddingVertical: 10,
    },
    textBubble: {
        flexDirection: 'row',
        paddingTop: 14,
        paddingBottom: 3,
        marginTop: 5,
        marginBottom: 25,
        paddingHorizontal: 15,
        borderWidth: 3,
        borderColor: 'green',
        borderRadius: 50,
    },
    textInput: {
        flex: 1,
        marginTop: -10,
        textAlign:"center",
        fontSize: 20,
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