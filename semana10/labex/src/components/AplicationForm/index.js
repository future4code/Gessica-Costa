import React from 'react';
import { useHistory } from 'react-router-dom'
import HeaderLogin from '../HeaderLogin';

function AplicationForm() {
  const history = useHistory()

  const goToHome = () => {
    history.push('/')
  }

  return (
    <div>
      <HeaderLogin />
      <button onClick={goToHome}>Enviar</button>
    </div>
  );
}

export default AplicationForm;