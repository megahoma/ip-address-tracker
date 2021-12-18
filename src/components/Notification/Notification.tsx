import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../types'

import { Container, Wrapper, Icon, Message } from './styles'

const Notification = () => {
  const notification = useSelector((state: State) => state.notification)

  if (notification.message === null) {
    return null
  }

  return (
    <Container
      color={
        notification.status !== null
          ? notification.status > 300
            ? '#d32f2f'
            : '#2e7d32'
          : ''
      }
    >
      <Wrapper>
        <Icon />
        <Message>{notification.message}</Message>
      </Wrapper>
    </Container>
  )
}

export { Notification }
