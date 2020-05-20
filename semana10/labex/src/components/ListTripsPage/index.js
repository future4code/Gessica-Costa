import React from 'react';
import HeaderLogout from '../HeaderLogout'
import { useHistory } from 'react-router-dom'
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

    :hover {
      background-color: rgba(186,139,139,0.25);
    }
  }
`

function ListTripsPage() {
  const history = useHistory()

  const goToHome = () => {
    history.push('/')
  }
  const goToCreateTrip = () => {
    history.push('/CriarViagem')
  }
  const goToTripDetails = () => {
    history.push('/DetalhesViagem')
  }

  return (
    <div>
      <HeaderLogout />
      <NavBar>
        <button onClick={goToCreateTrip}>Criar Viagem</button>
      </NavBar>
      <button onClick={goToTripDetails}>Detalhes da Viagem</button>
    </div>
  );
}

export default ListTripsPage;