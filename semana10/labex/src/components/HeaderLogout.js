import React from 'react';
import { useHistory } from 'react-router-dom'
import Logo from '../img/labex.png'
import Styled from 'styled-components'

const Container = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #EE6C4D;
  padding: 5px 20px;

  img {
      width: 60px;
      cursor: pointer;
  }

  button {
      padding: 5px 10px;
      background-color: white;
      color: #FF5F00;
      border: none;
      border-radius: 7px;
      font-size: 20px;
      cursor: pointer;

      :hover {
      background-color: #EE6C4D;
      color: white;
      border: 2px solid white;
    }
  }
`

function HeaderLogout(props) {
  const history = useHistory()

  const goToHome = () => {
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