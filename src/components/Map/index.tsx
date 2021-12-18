import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../types'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { icon } from 'leaflet'
import { Container } from './styles'

const LeafletIcon = icon({
  iconUrl: './images/icon-location.svg',
  iconSize: [30, 40],
})

const Map = () => {
  const geo = useSelector((state: State) => state.geo)

  const CenterMap = ({ coords }: any) => {
    const map = useMap()
    map.setView(coords, map.getZoom())

    return null
  }

  return (
    <Container>
      <MapContainer
        center={[geo.location.lat, geo.location.lng]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={LeafletIcon}
          position={[geo.location.lat, geo.location.lng]}
        >
          <Popup>{geo.isp}</Popup>
        </Marker>
        <CenterMap coords={[geo.location.lat, geo.location.lng]} />
      </MapContainer>
    </Container>
  )
}

export default Map
