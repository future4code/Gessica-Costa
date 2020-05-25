import React from 'react';
import { useHistory } from 'react-router-dom'
import Logo from '../../img/labex.png'
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