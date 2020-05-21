import React, { useState, useEffect } from 'react';
import HeaderLogin from '../HeaderLogin'
import { Container, GridViagens, SideBar, Conteudo, Footer } from '../Style/Style'
import { Form, FormData, Label } from '../Style/FormStyle'
import { useHistory } from 'react-router-dom'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Styled from 'styled-components'
import axios from 'axios';

const Div = Styled.div`
background-color: white;
`
const SelectStyled = Styled(Select)`
  width: 200px;
`

function HomePage() {
  const history = useHistory()
  const [trip, setTrip] = useState([])
  const [tripSelected, setTripSelected] = useState('')
  const [idTripSelected, setIdTripSelected] = useState('')

  const goToForm = () => {
    history.push(`/formulario/${tripSelected}/${idTripSelected}`)
  }

  const onChangeTrip = (e) => {
    setTripSelected(e.target.value.name)
    setIdTripSelected(e.target.value.id)
  }

  useEffect(() => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/trips')
      .then(res => {
        setTrip(res.data.trips)
      })
      .catch(err => {
        console.log('Erro no Get Trips: ', err)
      })
  }, [])

  const trips = trip.map((trip, i) => {
    return <MenuItem key={i} value={trip}>{trip.name}</MenuItem>
  })

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
            <Button variant={'contained'} color={'primary'} onClick={goToForm}>Aplicar para Viagem</Button>
          </Form>
        </GridViagens>
      </Conteudo>
      <Footer />
    </Container>
  );
}

export default HomePage;