import React, { useState, useEffect } from 'react';
import { Container, GridViagens, SideBar, Conteudo, Footer } from '../Style/Style'
import { Form, FormData, Label } from '../Style/FormStyle'
import { useInputValue } from '../Hooks/useInputValue'
import { useHistory } from 'react-router-dom'
import HeaderLogin from '../HeaderLogin';
import Styled from 'styled-components'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

function AplicationForm() {
  const [name, setName, onChangeName] = useInputValue()
  const [age, setAge, onChangeAge] = useInputValue()
  const [profission, setProfission, onChangeProfission] = useInputValue()
  const [country, setCountry, onChangeCountry] = useInputValue()
  const [aplicationText, setAplicationText, onChangeAplicationText] = useInputValue()
  const history = useHistory()

  const goToHome = () => {
    //history.push('/')
    setName('')
    setAge('')
    setProfission('')
    setCountry('')
    setAplicationText('')
  }

  return (
    <Container>
      <HeaderLogin />
      <GridViagens>
        <Form>
          <h2>Formulário de Aplicação</h2>
          <FormData>
            <Label>Nome:</Label>
            <Input onChange={onChangeName} value={name} />
            <Label>Idade:</Label>
            <Input onChange={onChangeAge} value={age} />
            <Label>Profissão:</Label>
            <Input onChange={onChangeProfission} value={profission} />
            <Label>País:</Label>
            <Input onChange={onChangeCountry} value={country} />
            <Label>Texto de Aplicação:</Label>
            <Input onChange={onChangeAplicationText} value={aplicationText} />
          </FormData>
          <Button variant={'contained'} color={'primary'} onClick={goToHome}>Enviar</Button>
        </Form>
      </GridViagens>
      <Footer />
    </Container>
  );
}

export default AplicationForm;