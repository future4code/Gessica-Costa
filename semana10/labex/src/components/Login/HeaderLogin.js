import React from 'react';
import { useHistory } from 'react-router-dom'
import Logo from '../../img/labex.png'
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
`

function HeaderLogin() {
  const history = useHistory()

  const goToHome = () => {
    history.push('/')
  }

  return (
    <Container>
      <img onClick={goToHome} src={Logo} />
    </Container>
  );
}

export default HeaderLogin;