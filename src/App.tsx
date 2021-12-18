import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setGeo } from './ducks/actions/geoAction'

import { Notification } from './components/Notification/Notification'
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setGeo(null))
  }, [dispatch])

  return (
    <div className="App">
      <Notification />
      ip-address-tracker
    </div>
  )
}

export default App
