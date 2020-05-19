import React from 'react';
import { useHistory } from 'react-router-dom'

function Login() {
  const history = useHistory()

  const goToHomePage = () => {
    history.push('/')
  }
  
  const goToListTripsPage = () => {
    history.push('/ListaViagens')
  }

  return (
    <div>
      Login
      <button onClick={goToHomePage}>Home</button>
      <button onClick={goToListTripsPage}>Lista de Viagens</button>
    </div>
  );
}

export default Login;