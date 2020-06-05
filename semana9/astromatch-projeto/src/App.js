import React, { useState, useEffect } from 'react'
import { TelaInicial } from './components/TelaInicial'
import { TelaMatches } from './components/TelaMatches';
import axios from 'axios'
import Styled from 'styled-components'

const Container = Styled.div`
    text-align: center;
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
  const [list, setList] = useState([])

  const matches = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gessica-costa-julian/matches')
      .then(res => {
        setList(res.data.matches)
      })
      .catch(err => {
        console.log('Erro no Get Matches:', err)
      })
  }

  useEffect(() => {
    matches()
  }, [setList])

  const onClickTelaInicial = () => {
    setTelaInicial(false)
  }

  const onClickTelaMatches = () => {
    setTelaInicial(true)
  }

  const telas = telaInicial ? (
    <TelaInicial
      onClick={onClickTelaInicial}
      matchCall={matches}
      content={list.length}
    />
  ) : (
      <TelaMatches
        onClick={onClickTelaMatches}
        list={list}
        matchCall={matches}
      />
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
