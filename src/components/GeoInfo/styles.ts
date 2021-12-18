import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
`

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;

  margin: -80px auto;
  padding: 25px 30px;
  border-radius: 15px;
  left: 0;
  right: 0;
  max-width: 1110px;
  z-index: 2;
  background-color: #ffffff;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`

export const Card = styled.div`
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    margin-bottom: 0px;
    flex: 1 1 0%;
    height: 100%;
    border-right: 1px solid hsl(0, 0%, 59%);
    margin-right: 35px;
    &:last-child {
      border-right: 0px solid hsl(0, 0%, 59%);
      margin-right: 0;
    }
  }
`

export const TitleCard = styled.h3`
  color: hsl(0, 0%, 59%);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.102em;
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 5px;

  @media (min-width: 1024px) {
    text-align: left;
    margin-bottom: 15px;
  }
`

export const InfoCard = styled.span`
  color: hsl(0, 0%, 17%);
  font-size: 25px;
`
