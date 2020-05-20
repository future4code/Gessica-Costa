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
  const [travel, setTravel] = useState([])
  const [travelSelected, setTravelSelected] = useState('')

  const goToForm = () => {
    history.push(`/formulario/${travelSelected}`)
  }

  const onChangeTravel = (e) => {
    setTravelSelected(e.target.value)
  }

  useEffect(() => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/trips')
      .then(res => {
        setTravel(res.data.trips)
      })
      .catch(err => {
        console.log('Erro no Get Trips: ', err)
      })
  }, [])

  const travels = travel.map((trip, i) => {
    return <MenuItem key={i} value={trip.name}>{trip.name}</MenuItem>
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
              <SelectStyled labelId={'select-label'} onChange={onChangeTravel} value={travelSelected}>
                {travels}
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