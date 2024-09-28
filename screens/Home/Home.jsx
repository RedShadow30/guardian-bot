import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";
import police_stations from "../../assets/data/dfw_police_stations.json"
import PoliceMarker from '../../components/PoliceMarker';

// Initial Region set to Grapevine (center): UNT, TCU, SMU
const INITIAL_REGION = {
    latitude:  32.965878,
    longitude: -97.043274,
    latitudeDelta: 1.6,
    longitudeDelta: 1.2,
}

function Home() {
    console.log("Home Screen reached!");
    
    return (
        <View style={styles.container}>

            {/* Generate map and zoom to initial region */}
            <MapView 
                style={styles.map}
                initialRegion={INITIAL_REGION}
            >
                {/* Traverse over the list of police stations and place marker for each on map */}
                {police_stations.map((station) => (
                    <PoliceMarker key={station.id} station={station} />
                ))}
            </MapView>
        </View>
    );
}

/* Below is styling the map view for testing purposes. Can be adjusted by designer. */
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