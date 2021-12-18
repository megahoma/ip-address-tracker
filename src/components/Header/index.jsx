import React from 'react'
import { useDispatch } from 'react-redux'
import { setGeo } from '../../ducks/actions/geoAction'
import { setNotification } from '../../ducks/actions/notificationActions'

import { Container, Title, Form, Input, Button } from './styles'

const regexIP =
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
const regexDomain =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/

const Header = () => {
  const dispatch = useDispatch()
  const [value, setValue] = React.useState('')

  const handleSubmit = async () => {
    if (value.match(regexIP)) {
      dispatch(setGeo(value, false))
    } else if (value.match(regexDomain)) {
      dispatch(setGeo(value, true))
    } else {
      dispatch(setNotification('Введите корректные данные', 400, 3))
    }
  }

  return (
    <Container>
      <Title>IP Address Tracker</Title>
      <Form>
        <Input
          type="text"
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
          placeholder="Search for any IP address or domain"
        />
        <Button type="submit" onClick={handleSubmit}>
          <img src="./images/icon-arrow.svg" alt="" />
        </Button>
      </Form>
    </Container>
  )
}

export default Header
