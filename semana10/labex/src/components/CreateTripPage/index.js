import React from 'react';
import { useHistory } from 'react-router-dom'
import Styled from 'styled-components'
import HeaderLogout from '../HeaderLogout';

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

function CreateTripPage() {
  const history = useHistory()

  const goToListTrips = () => {
    history.push('/ListaViagens')
  }

  return (
    <div>
      <HeaderLogout />
      <NavBar>
        <button onClick={goToListTrips}>Lista de Viagens</button>
      </NavBar>
    </div>
  );
}

export default CreateTripPage;