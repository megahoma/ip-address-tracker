import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../types'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { Container } from './styles'

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
        <Marker position={[geo.location.lat, geo.location.lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <CenterMap coords={[geo.location.lat, geo.location.lng]} />
      </MapContainer>
    </Container>
  )
}

export default Map
