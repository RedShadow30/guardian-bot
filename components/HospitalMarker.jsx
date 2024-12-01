import React from 'react'
import { Marker } from 'react-native-maps'
import { Image } from 'react-native'

const HospitalMarker = ({ hospital }) => {    
    return (
        <Marker
            key={hospital.id} 
            coordinate={{
                latitude: hospital.latitude,
                longitude: hospital.longitude,
            }}
            title={hospital.title}
            description={hospital.address}
        >
            <Image source={require('../assets/icons/hospital_pin.png') }
                style={{width: 45, height: 45}}
            />
        </Marker>
    )
}

export default HospitalMarker
