import React from 'react';
import { useHistory } from 'react-router-dom'
import Logo from '../img/labex.png'
import Styled from 'styled-components'

const Container = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 20px 20px 40px;

  img {
      width: 130px;
      cursor: pointer;

      :hover {
        opacity: 0.8;
      }
  }

  button {
      background-color: transparent;
      color: #FF5F00;
      border: none;
      border-radius: 7px;
      font-size: 20px;
      cursor: pointer;

      :hover {
        opacity: 0.8;
      }
  }
`

function HeaderLogin(props) {
  const history = useHistory()

  const goToHome = () => {
    history.push('/')
  }
  const goToLogin = () => {
    history.push('/login')
  }

  return (
    <Container>
      <img onClick={goToHome} src={Logo} />
      <button onClick={goToLogin}>Login</button>
    </Container>
  );
}

export default HeaderLogin;