import styled from 'styled-components'

export const Container = styled.header`
  background-image: url(./images/pattern-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 30px 0 130px 0;
  text-align: center;
`

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 30px;
  color: #ffffff;
`

export const Form = styled.div`
  display: flex;
  margin-right: 25px;
  margin-left: 25px;
  justify-content: center;
`

export const Input = styled.input.attrs({ type: 'text' })`
  max-width: 500px;
  width: 100%;
  height: 58px;
  border-radius: 15px 0 0 15px;
  color: hsl(0, 0%, 17%);
  font-weight: 400;
  padding: 0 25px;
`

export const Button = styled.button`
  width: 58px;
  height: 58px;
  background-color: hsl(0, 0%, 17%);
  border-radius: 0 15px 15px 0;
  transition: background 0.3s;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`
