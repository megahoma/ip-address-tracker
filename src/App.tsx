import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setGeo } from './ducks/actions/geoAction'

import { Notification } from './components/Notification/Notification'
import Header from './components/Header'
import GeoInfo from './components/GeoInfo'
import Map from './components/Map'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setGeo(null, false))
  }, [dispatch])

  return (
    <div className="App">
      <Notification />
      <Header />
      <GeoInfo />
      <Map />
    </div>
  )
}

export default App
