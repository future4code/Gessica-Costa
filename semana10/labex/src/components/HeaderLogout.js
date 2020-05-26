import React from 'react';
import { useHistory } from 'react-router-dom'
import Logo from '../img/labex.png'
import Styled from 'styled-components'

const Container = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 20px 20px 0;

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

function HeaderLogout(props) {
  const history = useHistory()

  const goToHome = () => {
    localStorage.clear()
    history.push('/')
  }

  return (
    <Container>
      <img onClick={goToHome} src={Logo} />
      <button onClick={goToHome}>Logout</button>
    </Container>
  );
}

export default HeaderLogout;