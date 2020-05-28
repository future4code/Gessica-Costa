import React, { useState, useEffect } from 'react';
import { Container, GridViagens, SideBar, Conteudo, theme } from '../Style/Style'
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
import { MuiThemeProvider } from '@material-ui/core';

const ContainerNewUrl = Styled(Container)`
  /* background-image: url('http://hdwpro.com/wp-content/uploads/2017/10/Free-Space-Background.png'); */
`
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
  let mapsim

  useEffect(() => {

    localStorage.getItem('token') === null && history.push('/')

    getCandidates()
  }, [setCandidates, history])

  const getCandidates = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/trip/${pathParams.id}`,
      {
        headers: { 'auth': localStorage.getItem('token') }
      })
      .then(res => {
        console.log('Get Trip Detail: ', res.data.trip)
        setCandidates(res.data.trip)
      })
      .catch(err => {
        console.log('Erro em Get Trip Detail: ', err)
      })
  }

  const goToListTrips = () => {
    history.push('/lista-viagens')
  }

  const goToCreateTrip = () => {
    history.push('/criar-viagem')
  }

  const approveCandidate = (id, decide, name) => {
    const body = { 'approve': decide }

    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/trips/${pathParams.id}/candidates/${id}/decide`,
      body,
      {
        headers: { 'auth': localStorage.getItem('token') }
      })
      .then(res => {
        decide ? window.alert(`Candidato aprovado com sucesso!`) : (window.alert(`Candidato rejeitado.`))

        getCandidates()
      })
      .catch(err => {
        console.log('Erro em Decide Candidate: ', err)
      })

  }

  if (candidates) {
    mapsim = candidates.candidates.map((c, i) => {
      return (
        <div key={i}>
          <p><b>Nome:</b> {c.name}</p>
          <p><b>Idade:</b> {c.age}</p>
          <p><b>Profissão:</b> {c.profession}</p>
          <p><b>País:</b> {c.country}</p>
          <p><b>Texto de Aplicação:</b> {c.applicationText}</p>
          <Button variant={'contained'} color={'primary'} onClick={() => approveCandidate(c.id, true, c.name)}>Aprovar</Button>
          <label> </label>
          <Button variant={'contained'} color={'secondary'} onClick={() => approveCandidate(c.id, false, c.name)}>Rejeitar</Button>
          <hr />
        </div>
      )
    })
  }

  return (
    <ContainerNewUrl>
      <HeaderLogout />
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    </ContainerNewUrl>
  );
}

export default TripDetailsPage;