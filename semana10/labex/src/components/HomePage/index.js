import React from 'react';
import HeaderLogin from '../HeaderLogin'
import { Container, Conteudo, GridViagens, Footer } from '../Style'
import { useHistory } from 'react-router-dom'
import Styled from 'styled-components'

function HomePage() {
  const history = useHistory()

  const goToForm = () => {
    history.push('/Formulario')
  }

  return (
    <Container>
      <HeaderLogin />
      <Conteudo>
        <div>Olá</div>
        <GridViagens>
          <button onClick={goToForm}>Formulario</button>
        </GridViagens>
      </Conteudo>
      <Footer>Footer</Footer>
    </Container>
  );
}

export default HomePage;