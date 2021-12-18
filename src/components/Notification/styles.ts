import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  margin-top: 16px;
  transform: translateY(150%);
  animation: ani 1s forwards;
  border-radius: 4px;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  font-size: 0.875rem;
  background-color: ${(props) => props.color};
  color: #fff;

  right: 8px;
  bottom: 8px;

  @keyframes ani {
    0% {
      transform: translateY(150%);
    }
    100% {
      transform: translateY(0);
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 16px;
`

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  padding: 7px 0;
  background-image: url(./images/icon-error.svg);
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.9;
`
export const Message = styled.div`
  padding: 8px 5px 8px 0;
`
