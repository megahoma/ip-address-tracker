import React from 'react'
import { useSelector } from 'react-redux'

import { State } from '../types'

const Notification = () => {
  const notification = useSelector((state: State) => state.notification)

  if (notification.message === null) {
    return null
  }

  return (
    <>
      {notification.message} | {notification.status}
    </>
  )
}

export { Notification }
