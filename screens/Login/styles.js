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
        height: 184,
        width: 425,
        marginTop: 90,
        marginVertical: 85,
    },
    inputLabels:{
        fontFamily: 'Halvetica',
        color: 'green',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 25,
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
})

export default styles;