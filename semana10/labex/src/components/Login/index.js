import React, { useState } from 'react';
import { Container, GridViagens, SideBar, Conteudo, Footer } from '../Style/Style'
import { Form, FormData, Label } from '../Style/FormStyle'
import { useHistory } from 'react-router-dom'
import HeaderLogin from './HeaderLogin';
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import { useInputValue } from '../Hooks/useInputValue';
import axios from 'axios'

function Login() {
  const history = useHistory()
  const [email, setEmail, onChangeEmail] = useInputValue()
  const [password, setPassword, onChangePassword] = useInputValue()
  const [token, setToken] = useInputValue()

  const goToListTripsPage = () => {

    const body = {
      "email": email,
      "password": password
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/login',
      body)
      .then(res => {
        console.log('Login: ', res.data)
        setToken(res.data.token)
        
      })
      .catch(err => {
        console.log('Erro em Login: ', err)
      })
      history.push(`/lista-viagens/`)
  }
  
  return (
    <Container>
      <HeaderLogin />
      <GridViagens>
        <Form>
          <h2>Login</h2>
          <FormData>
            <Label>Email:</Label>
            <Input onChange={onChangeEmail} value={email} />
            <Label>Senha:</Label>
            <Input onChange={onChangePassword} value={password} />
          </FormData>
          <Button variant={'contained'} color={'primary'} onClick={goToListTripsPage}>Entrar</Button>
          <h2>Cadastre-se</h2>
          <FormData>
            <Label>Email:</Label>
            <Input disabled />
            <Label>Senha:</Label>
            <Input disabled />
          </FormData>
          <Button variant={'contained'} color={'primary'} onClick={goToListTripsPage} disabled>Cadastrar</Button>
        </Form>
      </GridViagens>
    </Container>
  );
}

export default Login;