import React from 'react';
import { Container, GridViagens, SideBar, Conteudo, Footer } from '../Style/Style'
import { NavBar, ButtonChangePage, ButtonPage } from '../Style/NavBarStyle'
import { Form, FormData, Label } from '../Style/FormStyle'
import { useInputValue } from '../Hooks/useInputValue'
import { useHistory } from 'react-router-dom'
import Styled from 'styled-components'
import HeaderLogout from '../HeaderLogout';
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

function CreateTripPage() {
  const history = useHistory()
  const [name, setName, onChangeName] = useInputValue()
  const [planet, setPlanet, onChangePlanet] = useInputValue()
  const [date, setDate, onChangeDate] = useInputValue()
  const [duration, setDuration, onChangeDuration] = useInputValue()
  const [description, setDescription, onChangeDescription] = useInputValue()

  const goToListTrips = () => {
    history.push('/ListaViagens')
  }

  const createTrip = () => {
    setName('')
    setPlanet('')
    setDate('')
    setDuration('')
    setDescription('')
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
            <Input onChange={onChangeDate} value={date} />
            <Label>Data:</Label>
            <Input onChange={onChangeDuration} value={duration} />
            <Label>Descrição:</Label>
            <Input onChange={onChangeDescription} value={description} />
          </FormData>
          <Button variant={'contained'} color={'primary'} onClick={createTrip}>Enviar</Button>
        </Form>
      </GridViagens>
      <Footer />
    </Container>
  );
}

export default CreateTripPage;