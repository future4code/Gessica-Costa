import React from 'react';
import { Container, GridViagens, SideBar, Conteudo, Footer } from '../Style/Style'
import { NavBar, ButtonChangePage } from '../Style/NavBarStyle'
import { useHistory } from 'react-router-dom'
import HeaderLogout from '../HeaderLogout';
import Styled from 'styled-components'

function TripDetailsPage() {
  const history = useHistory()

  const goToListTrips = () => {
    history.push('/ListaViagens')
  }

  const goToCreateTrip = () => {
    history.push('/CriarViagem')
  }

  return (
    <Container>
      <HeaderLogout />
      <NavBar>
        <ButtonChangePage onClick={goToListTrips}>Lista de Viagens</ButtonChangePage>
        <ButtonChangePage onClick={goToCreateTrip}>Criar Viagem</ButtonChangePage>
      </NavBar>
      <GridViagens></GridViagens>
      <Footer />
    </Container>
  );
}

export default TripDetailsPage;