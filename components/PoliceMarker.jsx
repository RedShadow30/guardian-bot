import React from 'react'
import { Marker } from 'react-native-maps'
import { View, Text } from 'react-native'

const PoliceMarker = ({ station }) => {    
    return (
        <Marker
            key={station.id} 
            coordinate={{
                latitude: station.latitude,
                longitude: station.longitude,
            }}
            title={station.title}
            description='Police station' 
        >
        </Marker>
    )
}

export default PoliceMarker
