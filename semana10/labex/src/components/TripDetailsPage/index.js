import React from 'react';
import { useHistory } from 'react-router-dom'

function TripDetailsPage() {
  const history = useHistory()

  const goToHome = () => {
    history.push('/')
  }

  const goToListTrips = () => {
    history.push('/ListaViagens')
  }

  const goToCreateTrip = () => {
    history.push('/ListaViagens')
  }

  return (
    <div>
      TripDetailsPage
      <button onClick={goToHome}>Home</button>
      <button onClick={goToListTrips}>Lista de Viagens</button>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
    </div>
  );
}

export default TripDetailsPage;