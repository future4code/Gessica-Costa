import React, { useState } from 'react';
import { Form, FormData, Label } from '../Style/FormStyle'
import { useHistory } from 'react-router-dom'
import HeaderLogin from './HeaderLogin';
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import { Container, GridViagens, SideBar, Conteudo, Footer, useStyles } from '../Style/Style'
import { useInputValue } from '../Hooks/useInputValue';
import axios from 'axios'

function Login() {
  const classes = useStyles()
  const history = useHistory()
  const [email, setEmail, onChangeEmail] = useInputValue()
  const [password, setPassword, onChangePassword] = useInputValue()

  const goToListTripsPage = () => {

    const body = {
      "email": email,
      "password": password
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/gessica-costa-julian/login',
      body)
      .then(res => {
        console.log('Login: ', res.data)
        localStorage.setItem('token', res.data.token)
        history.push(`/lista-viagens/`)
      })
      .catch(err => {
        alert('Login falhou')
        console.log('Erro em Login: ', err)
      })
  }

  return (
    <Container>
      <HeaderLogin />
      <GridViagens>
        <Form>
          <h2>Login</h2>
          <FormData>
            <Label>Email:</Label>
            <Input className={classes.input} onChange={onChangeEmail} value={email} />
            <Label>Senha:</Label>
            <Input type={'password'} className={classes.input} onChange={onChangePassword} value={password} />
          </FormData>
          <Button className={classes.root} variant={'contained'} color={'primary'} onClick={goToListTripsPage}>Entrar</Button>
          <h2>Cadastre-se</h2>
          <FormData>
            <Label>Email:</Label>
            <Input disabled />
            <Label>Senha:</Label>
            <Input disabled />
          </FormData>
          <Button className={classes.root} variant={'contained'} color={'primary'} onClick={goToListTripsPage} disabled>Cadastrar</Button>
        </Form>
      </GridViagens>
    </Container>
  );
}

export default Login;