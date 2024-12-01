import React from 'react'
import { Marker } from 'react-native-maps'
import { Image } from 'react-native'

const CollegeMarker = ({ college }) => {
  return (
    <Marker
        key={college.id}
        coordinate={{
            latitude: college.latitude,
            longitude: college.longitude,
        }}
        title={college.title}
        description={college.address}
    >
        <Image source={require('../assets/icons/college_icon.png')}
            style={{width: 40, height: 40}}
        />
    </Marker>
  )
}

export default CollegeMarker