import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import police_stations from "../../assets/data/dfw_police_stations.json";
import hospitals from "../../assets/data/dfw_hospitals.json";
import colleges from "../../assets/data/dfw_colleges.json";
import PoliceMarker from '../../components/PoliceMarker';
import HospitalMarker from '../../components/HospitalMarker';
import CollegeMarker from '../../components/CollegeMarker';

// Initial Region set to Grapevine (center): UNT, TCU, SMU
const INITIAL_REGION = {
    latitude:  32.965878,
    longitude: -97.043274,
    latitudeDelta: 1.6,
    longitudeDelta: 1.2,
}

function Home({ navigation }) {
    console.log("Home Screen reached!");

    // Take to Anonymouse Report page 
    const handleAnon = () => {
        navigation.navigate('AnonymousReportPage');
    };

    const handle911 = () => {
        console.log('Calling 911...');
    };

    const handleVoiceReport = () => {
        console.log('Voice report triggered');
        
    };
    
    return (
        <View style={styles.container}>

            {/* Generate map and zoom to initial region */}
            <MapView 
                style={styles.map}
                initialRegion={INITIAL_REGION}
                showsUserLocation={true}
            >
                {/* Traverse over the list of police stations and place marker for each on map */}
                {police_stations.map((station) => (
                    <PoliceMarker key={station.id} station={station} />
                ))}

                {/* Traverse over the list of hospitals and place marker for each on map */}
                {hospitals.map((hospital) => (
                    <HospitalMarker key={hospital.id} hospital={hospital} />
                ))}

                {/* Traverse over the list of colleges and place marker for each on map */}
                {colleges.map((college) => (
                    <CollegeMarker key={college.id} college={college} />
                ))}
            </MapView>
            {/* 911 Button */}
            <TouchableOpacity style={[styles.floatingButton, styles.button1]} onPress={handle911}>
                <Text style={styles.text}>911</Text>
            </TouchableOpacity>

            {/* Anonymous Reporting Button */}
            <TouchableOpacity style={[styles.floatingButton, styles.button2]} onPress={handleAnon}>
                <Icon name="user-secret" size={30} color={"#FFFFFF"}/>
            </TouchableOpacity>

            {/* Voice Reporting Button */}
            <TouchableOpacity style={[styles.floatingButton, styles.button3]} onPress={handleVoiceReport}>
                <Icon name="microphone" size={25} color={"#FFFFFF"}/>
            </TouchableOpacity>

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
    floatingButton: {
        position: 'absolute',
        right: 20,
        bottom: 50,
        width: 60,
        height: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // alpha value adjusted for transparency
        alignItems: 'center', // centers horizontally
        justifyContent: 'center', // center vertically
        borderRadius: 50,
    },
    button1: {
        top: 170,
        right: 20,
    },
    button2: {
        top: 90,
        right: 20,
    },
    button3: {
        top: 250,
        right: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 900,
        color: '#f52323',
    }
});

export default Home;