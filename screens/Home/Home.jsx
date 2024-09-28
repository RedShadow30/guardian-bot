import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";

// Initial Region set to Dallas-Fort Worth
const INITIAL_REGION = {
    latitude:  32.7767,
    longitude: -96.7970,
    latitudeDelta: 2,
    longitudeDelta: 0.5,
}

function Home() {
    console.log("Home Screen reached!");
    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map}
                initialRegion={INITIAL_REGION}
            >
            </MapView>
        </View>
    );
}

/* Below is styling the map view and map markers for testing purposes. Can be adjusted by designer. */
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default Home;