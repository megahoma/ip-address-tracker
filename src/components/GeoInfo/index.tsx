import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../types'

import { Container, Wrapper, Card, TitleCard, InfoCard } from './styles'

const GeoInfo = () => {
  const geo = useSelector((state: State) => state.geo)

  return (
    <Container>
      <Wrapper className="card-results">
        <Card>
          <TitleCard>Ip Address</TitleCard>
          <InfoCard>{geo?.ip}</InfoCard>
        </Card>

        <Card>
          <TitleCard>Location</TitleCard>
          <InfoCard>
            {geo?.location.city}, {geo?.location.country}
          </InfoCard>
        </Card>

        <Card>
          <TitleCard>Timezone</TitleCard>
          <InfoCard>UTC{geo?.location.timezone}</InfoCard>
        </Card>

        <Card>
          <TitleCard>ISP</TitleCard>
          <InfoCard>{geo?.isp}</InfoCard>
        </Card>
      </Wrapper>
    </Container>
  )
}

export default GeoInfo
