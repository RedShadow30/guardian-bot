import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';

const LocationHook = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');

    const getUserLocation = async() => {
        // Get the user's permission to access location
        let { status } = await Location.requestForegroundPermissionsAsync();

        // If user denied permission, set an error message
        if(status !== 'granted') {
            setErrorMsg('Permission to location was not granted');
            return;
        }

        let { coords } = await Location.getCurrentPositionAsync();

        if(coords) {
            // Assign const vars
            const { latitude, longitude } = coords;
            
            console.log("lat and long", latitude, longitude);
            
            // Update state vars
            setLatitude(latitude);
            setLongitude(longitude);

            // Convert to Human readable format (Country, State, etc.)
            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude
            })

            console.log('USER LOCATION IS', response);
            
        }
    };

    // Get user permission when Reported Page opened
    useEffect(() => {
        getUserLocation();
    }, []);

  return ({latitude, longitude, errorMsg})
}

export default LocationHook;

const styles = StyleSheet.create({});