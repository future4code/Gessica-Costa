import React, { useState, useEffect } from 'react';
import { Container, GridViagens, SideBar, Conteudo, Footer } from '../Style/Style'
import { NavBar, ButtonChangePage, ButtonPage } from '../Style/NavBarStyle'
import { Form, FormData, Label } from '../Style/FormStyle'
import { useInputValue } from '../Hooks/useInputValue'
import HeaderLogout from '../HeaderLogout'
import { useParams, useHistory } from 'react-router-dom'
import Styled from 'styled-components'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const SelectStyled = Styled(Select)`
  width: 200px;
`

function TripDetailsPage() {
  const history = useHistory()
  const pathParams = useParams()
  const [trip, setTrip] = useState([])
  const [tripSelected, setTripSelected] = useState('')
  const [idTripSelected, setIdTripSelected] = useState('')
  const [candidates, setCandidates] = useInputValue()

  useEffect(() => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/trip/${pathParams.id}`,
      {
        headers: { 'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJ6Q0Z4bnFESDBXVXY0dGlRYndjIiwiZW1haWwiOiJnZXNzaWNhQGdtYWlsLmNvbSIsImlhdCI6MTU5MDA5NDkzMX0.bScbYZqc4IYovoYrRtlxte9t0Q-WtQrnIg2MY2sADME' }
      })
      .then(res => {
        console.log('Get Trip Detail: ', res.data.trip.candidates)
        setCandidates(res.data.trip.candidates)
      })
      .catch(err => {
        console.log('Erro em Get Trip Detail: ', err)
      })
  }, [])

  const goToListTrips = () => {
    history.push('/lista-viagens')
  }

  const goToCreateTrip = () => {
    history.push('/criar-viagem')
  }

  let mapsim

  if (candidates) {
    mapsim = candidates.map((c, i) => {
      return (
        <div key={i}>
          <p>Nome: {c.name}</p>
          <p>Idade: {c.age}</p>
          <p>Profissão: {c.profession}</p>
          <p>País: {c.country}</p>
          <p>Texto de Aplicação: {c.applicationText}</p>
          <hr />
        </div>
      )
    })
  }

  return (
    <Container>
      <HeaderLogout />
      <NavBar>
        <ButtonChangePage onClick={goToListTrips}>Lista de Viagens</ButtonChangePage>
        <ButtonChangePage onClick={goToCreateTrip}>Criar Viagem</ButtonChangePage>
      </NavBar>
      <GridViagens>
        <Form>
          <h2>{pathParams.viagem}</h2>
          <h2>Candidatos</h2>
          {mapsim}
        </Form>
      </GridViagens>
      <Footer />
    </Container>
  );
}

export default TripDetailsPage;