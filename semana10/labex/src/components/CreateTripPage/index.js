import React from 'react';
import { NavBar, ButtonChangePage, ButtonPage } from '../Style/NavBarStyle'
import { Form, FormData, Label } from '../Style/FormStyle'
import { useInputValue } from '../Hooks/useInputValue'
import { useHistory } from 'react-router-dom'
import Styled from 'styled-components'
import HeaderLogout from '../HeaderLogout';
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import { Container, GridViagens, SideBar, Conteudo, Footer, useStyles } from '../Style/Style'
import axios from 'axios'

function CreateTripPage() {
  const classes = useStyles()
  const history = useHistory()
  const [name, setName, onChangeName] = useInputValue()
  const [planet, setPlanet, onChangePlanet] = useInputValue()
  const [date, setDate, onChangeDate] = useInputValue()
  const [duration, setDuration, onChangeDuration] = useInputValue()
  const [description, setDescription, onChangeDescription] = useInputValue()

  const goToListTrips = () => {
    history.push('/lista-viagens')
  }

  const createTrip = () => {
    setName('')
    setPlanet('')
    setDate('')
    setDuration('')
    setDescription('')

    const body = {
      "name": name,
      "planet": planet,
      "date": date,
      "description": description,
      "durationInDays": duration
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/trips`,
      body,
      {
        headers: { 'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJ6Q0Z4bnFESDBXVXY0dGlRYndjIiwiZW1haWwiOiJnZXNzaWNhQGdtYWlsLmNvbSIsImlhdCI6MTU5MDA5NDkzMX0.bScbYZqc4IYovoYrRtlxte9t0Q-WtQrnIg2MY2sADME' }
      })
      .then(res => {
        window.alert(`Viagem ${res.data.trip.name} criada com sucesso!`)
      })
      .catch(err => {
        console.log('Create Trip: ', err)
      })

  }



  return (
    <Container>
      <HeaderLogout />
      <NavBar>
        <ButtonChangePage onClick={goToListTrips}>Lista de Viagens</ButtonChangePage>
        <ButtonPage>Criar Viagem</ButtonPage>
      </NavBar>
      <GridViagens>
        <Form>
          <h2>Criar Viagem</h2>
          <FormData>
            <Label>Nome:</Label>
            <Input onChange={onChangeName} value={name} />
            <Label>Planeta:</Label>
            <Input onChange={onChangePlanet} value={planet} />
            <Label>Duração:</Label>
            <Input type={'Number'} onChange={onChangeDuration} value={duration} />
            <Label>Data:</Label>
            <Input type={'Date'} format="yyyy/MM/dd" onChange={onChangeDate} value={date} />
            <Label>Descrição:</Label>
            <Input onChange={onChangeDescription} value={description} />
          </FormData>
          <Button className={classes.root} variant={'contained'} color={'primary'} onClick={createTrip}>Enviar</Button>
        </Form>
      </GridViagens>
    </Container>
  );
}

export default CreateTripPage;