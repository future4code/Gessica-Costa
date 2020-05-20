import React from 'react';
import { useHistory } from 'react-router-dom'
import HeaderLogin from './HeaderLogin';

function Login() {
  const history = useHistory()
  
  const goToListTripsPage = () => {
    history.push('/ListaViagens')
  }

  return (
    <div>
      <HeaderLogin />
      <button onClick={goToListTripsPage}>Entrar</button>
    </div>
  );
}

export default Login;