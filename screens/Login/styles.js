import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 145,
        width: 335,
        marginTop: 150,
        marginBottom: 40,
        marginVertical: 85,
    },
    inputLabels:{
        fontFamily: 'Halvetica',
        color: 'green',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 25,
        marginBottom: 4,
    },
    loginContainer: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 35,
        paddingVertical: 10,
    },
    textBubble: {
        flexDirection: 'row',
        paddingVertical: 10, // Reduced vertical padding
        paddingTop: 20,
        paddingHorizontal: 10, // Reduced horizontal padding
        borderWidth: 2, // Slightly reduced border width
        borderColor: 'green',
        borderRadius: 50,
        marginBottom: 22,
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
        margin: 45,
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
        marginTop: -10,
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