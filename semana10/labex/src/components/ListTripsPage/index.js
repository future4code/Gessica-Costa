import React from 'react';
import { useHistory } from 'react-router-dom'

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
      ListTripsPage
      <button onClick={goToHome}>Home</button>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
      <button onClick={goToTripDetails}>Detalhes da Viagem</button>
    </div>
  );
}

export default ListTripsPage;