import React from 'react';
import { useHistory } from 'react-router-dom'

function AplicationForm() {
  const history = useHistory()

  const goToHome = () => {
    history.push('/')
  }

  return (
    <div>
      AplicationForm
      <button onClick={goToHome}>Home</button>
    </div>
  );
}

export default AplicationForm;