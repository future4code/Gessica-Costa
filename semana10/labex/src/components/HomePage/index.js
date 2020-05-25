import React, { useState, useEffect } from 'react';
import HeaderLogin from '../HeaderLogin'
import { Form, FormData, Label } from '../Style/FormStyle'
import { useHistory } from 'react-router-dom'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { Container, GridViagens, SideBar, Conteudo, Footer, useStyles } from '../Style/Style'
import Styled from 'styled-components'
import axios from 'axios';

const SelectStyled = Styled(Select)`
  width: 200px;
`

function HomePage() {
  const classes = useStyles()
  const history = useHistory()
  const [trip, setTrip] = useState([])
  const [tripSelected, setTripSelected] = useState('')
  const [idTripSelected, setIdTripSelected] = useState('')

  useEffect(() => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/trips')
      .then(res => {
        setTrip(res.data.trips)
      })
      .catch(err => {
        console.log('Erro no Get Trips: ', err)
      })
  }, [setTrip])

  const goToForm = () => {
    if (tripWanted.length !== 0) {
      history.push(`/formulario/${tripWanted[0].name}/${tripWanted[0].id}`)
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
  console.log(trip)
  return (
    <Container>
      <HeaderLogin />
      <Conteudo>
        <SideBar></SideBar>
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
            <Button className={classes.root} variant={'contained'} color={'primary'} onClick={goToForm}>Aplicar para Viagem</Button>
          </Form>
        </GridViagens>
      </Conteudo>
    </Container>
  );
}

export default HomePage;