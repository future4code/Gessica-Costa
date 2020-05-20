import React from 'react';
import { Container, GridViagens, SideBar, Conteudo, Footer } from '../Style/Style'
import { NavBar, ButtonChangePage, ButtonPage } from '../Style/NavBarStyle'
import HeaderLogout from '../HeaderLogout'
import { useHistory } from 'react-router-dom'
import Styled from 'styled-components'

function ListTripsPage() {
  const history = useHistory()

  const goToCreateTrip = () => {
    history.push('/CriarViagem')
  }
  const goToTripDetails = () => {
    history.push('/DetalhesViagem')
  }

  return (
    <Container>
      <HeaderLogout />
      <NavBar>
        <ButtonPage>Lista de Viagens</ButtonPage>
        <ButtonChangePage onClick={goToCreateTrip}>Criar Viagem</ButtonChangePage>
      </NavBar>
      <GridViagens>
        <button onClick={goToTripDetails}>Detalhes da Viagem</button>
      </GridViagens>
      <Footer />
    </Container>
  );
}

export default ListTripsPage;