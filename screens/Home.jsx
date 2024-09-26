import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";

function Home() {
    console.log("Home Screen reached!");
    return (
        <View>
            <Text style={styles.headingStyle}>Home Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    /* Below is just for testing purposes, can be removed by designer */
    headingStyle:{
        textAlign: 'center',
        marginTop: 100,
    },
});

export default Home;