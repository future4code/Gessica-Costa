import React, { useState, useEffect } from 'react';
import { Container, GridViagens, SideBar, Conteudo, Footer } from '../Style/Style'
import { Form, FormData, Label } from '../Style/FormStyle'
import { useInputValue } from '../Hooks/useInputValue'
import { useParams, useHistory } from 'react-router-dom'
import HeaderLogin from '../HeaderLogin';
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import axios from 'axios'

function AplicationForm() {
  const history = useHistory()
  const pathParams = useParams()
  const [name, setName, onChangeName] = useInputValue()
  const [age, setAge, onChangeAge] = useInputValue()
  const [profession, setProfession, onChangeProfession] = useInputValue()
  const [country, setCountry, onChangeCountry] = useInputValue()
  const [applicationText, setApplicationText, onChangeApplicationText] = useInputValue()

  const onClickSend = () => {
    setName('')
    setAge('')
    setProfession('')
    setCountry('')
    setApplicationText('')

    const body = {
      "name": name,
      "age": age,
      "applicationText": applicationText,
      "profession": profession,
      "country": country
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/trips/${pathParams.id}/apply`,
      body)
      .then(res => {
        console.log('Apply to Trip: ', res.data)
        window.alert('Formulário enviado com sucesso!')
      })
      .catch(err => {
        console.log('Erro em Apply to Trip: ', err)
      })
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
            <Input type={'Number'} onChange={onChangeAge} value={age} />
            <Label>Profissão:</Label>
            <Input onChange={onChangeProfession} value={profession} />
            <Label>País:</Label>
            <Input onChange={onChangeCountry} value={country} />
            <Label>Texto de Aplicação:</Label>
            <Input onChange={onChangeApplicationText} value={applicationText} />
            <Label>Viagem:</Label>
            <Input value={pathParams.viagem} disabled />
          </FormData>
          <Button variant={'contained'} color={'primary'} onClick={onClickSend}>Enviar</Button>
        </Form>
      </GridViagens>
      <Footer />
    </Container>
  );
}

export default AplicationForm;