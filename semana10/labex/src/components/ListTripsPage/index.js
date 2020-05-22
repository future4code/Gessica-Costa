import React, { useState, useEffect } from 'react';
import { Container, GridViagens, SideBar, Conteudo, Footer } from '../Style/Style'
import { NavBar, ButtonChangePage, ButtonPage } from '../Style/NavBarStyle'
import { Form, FormData, Label } from '../Style/FormStyle'
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

function ListTripsPage() {
  const history = useHistory()
  const pathParams = useParams()
  const [trip, setTrip] = useState([])
  const [tripSelected, setTripSelected] = useState('')
  const [idTripSelected, setIdTripSelected] = useState('')

  const getTrips = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/trips')
      .then(res => {
        setTrip(res.data.trips)
      })
      .catch(err => {
        console.log('Erro no Get Trips: ', err)
      })
  }

  useEffect(() => {
    getTrips()
  }, [setTrip])

  const goToCreateTrip = () => {
    history.push('/criar-viagem')
  }
  const goToTripDetails = () => {
    if (tripWanted.length !== 0) {
      history.push(`/detalhes-viagem/${tripWanted[0].name}/${tripWanted[0].id}`)
    }
  }

  const confirmDeleteTrip = () => {
    window.confirm(`Tem certeza que deseja deletar a viagem ${tripSelected}?`) ? deleteTrip() : console.log('nao deletou')
  }

  const deleteTrip = () => {
    if (tripWanted.length !== 0) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/trips/${tripWanted[0].id}`)
        .then(res => {
          window.alert(`Viagem ${tripWanted[0].name} deletada com sucesso!`)
          getTrips()
        })
        .catch(err => {
          console.log('Erro em Delete Trip: ', err)
        })
    }
  }

  const onChangeTrip = (e) => {
    setTripSelected(e.target.value)
    setIdTripSelected(e.target.value)
  }

  const trips = trip.map((trip, i) => {
    return <MenuItem key={i} value={trip.name}>{trip.name}</MenuItem>
  })

  const tripWanted = trip.filter((trip) => {
    if (trip.name === tripSelected) {
      return trip
    }
  })

  return (
    <Container>
      <HeaderLogout />
      <NavBar>
        <ButtonPage>Lista de Viagens</ButtonPage>
        <ButtonChangePage onClick={goToCreateTrip}>Criar Viagem</ButtonChangePage>
      </NavBar>
      <GridViagens>
        <Form>
          <FormControl variant="filled">
            <InputLabel id={'select-label'}>Viagem</InputLabel>
            <SelectStyled labelId={'select-label'} onChange={onChangeTrip} value={tripSelected}>
              {trips}
            </SelectStyled>
          </FormControl>
          {
            trip.filter((trip) => {
              if (trip.name === tripSelected) {
                return trip
              }
            }).map((trip, i) => {
              return (
                <div key={i}>
                  <h2>{trip.name}</h2>
                  <p><b>Planeta:</b> {trip.planet}</p>
                  <p><b>Data:</b> {trip.date}</p>
                  <p><b>Duração em dias:</b> {trip.durationInDays}</p>
                  <p><b>Descrição:</b> {trip.description}</p>
                </div>
              )
            })
          }
          <Button variant={'contained'} color={'primary'} onClick={goToTripDetails}>Ver Detalhes da Viagem</Button>
          <Button variant={'contained'} color={'secondary'} onClick={confirmDeleteTrip}>Deletar Viagem</Button>
        </Form>
      </GridViagens>
      <Footer />
    </Container>
  );
}

export default ListTripsPage;