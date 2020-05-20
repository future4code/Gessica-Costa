import React from 'react';
import { useHistory } from 'react-router-dom'
import HeaderLogout from '../HeaderLogout';
import Styled from 'styled-components'

const NavBar = Styled.div`
  background-color: #8C4F47;
  text-align: right;
  padding: 2px 20px;

button {
  padding: 5px 5px;
    background-color: transparent;
    color: #FF5F00;
    border: none;
    border-radius: 7px;
    font-size: 17px;
    cursor: pointer;
    margin-left: 50px;

    :hover {
      background-color: rgba(186,139,139,0.25);
    }
  }
`

function TripDetailsPage() {
  const history = useHistory()

  const goToHome = () => {
    history.push('/')
  }

  const goToListTrips = () => {
    history.push('/ListaViagens')
  }

  const goToCreateTrip = () => {
    history.push('/CriarViagem')
  }

  return (
    <div>
      <HeaderLogout />
      <NavBar>
        <button onClick={goToCreateTrip}>Criar Viagem</button>
        <button onClick={goToListTrips}>Lista de Viagens</button>
      </NavBar>
    </div>
  );
}

export default TripDetailsPage;