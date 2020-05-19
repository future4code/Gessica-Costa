import React from 'react';
import { useHistory } from 'react-router-dom'

function CreateTripPage() {
  const history = useHistory()

  const goToHome = () => {
    history.push('/')
  }

  const goToListTrips = () => {
    history.push('/ListaViagens')
  }

  return (
    <div>
      CreateTripPage
      <button onClick={goToHome}>Home</button>
      <button onClick={goToListTrips}>Lista de Viagens</button>
    </div>
  );
}

export default CreateTripPage;