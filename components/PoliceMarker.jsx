import React from 'react'
import { Marker } from 'react-native-maps'
import { Image } from 'react-native'

const PoliceMarker = ({ station }) => {    
    return (
        <Marker
            key={station.id} 
            coordinate={{
                latitude: station.latitude,
                longitude: station.longitude,
            }}
            title={station.title}
            description={station.address} 
        >
            <Image source={require('../assets/icons/police_icon.png')}
                style={{width: 45, height: 45}}
            />
        </Marker>
    )
}

export default PoliceMarker
