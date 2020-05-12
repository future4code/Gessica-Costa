import React, { useState } from 'react'
import './App.css';
import { TelaInicial } from './components/TelaInicial'
import { TelaMatches } from './components/TelaMatches';
import Styled from 'styled-components'

const Container = Styled.div`
    width: 400px;
    height: 600px;
    border: 1px solid;
    border-radius: 2%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
`

function App() {
  const [telaInicial, setTelaInicial] = useState(true)

  const onClickTelaInicial = () => {
    setTelaInicial(false)
    console.log('clicou')
  }

  const onClickTelaMatches = () => {
    setTelaInicial(true)
  }

  const telas = telaInicial ? (
    <TelaInicial onClick={onClickTelaInicial} />
  ) : (
      <TelaMatches onClick={onClickTelaMatches} />
    )

  return (
    <div className="App">
      <Container>
        {telas}
      </Container>
    </div>
  )

}

export default App;
