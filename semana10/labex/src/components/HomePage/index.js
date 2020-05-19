import React from 'react';
import { useHistory } from 'react-router-dom'

function HomePage() {
  const history = useHistory()

  const goToLogin = () => {
    history.push('/Login')
  }
  const goToForm = () => {
    history.push('/Formulario')
  }

  return (
    <div>
      HomePage
      <button onClick={goToLogin}>Login</button>
      <button onClick={goToForm}>Formulario</button>
    </div>
  );
}

export default HomePage;