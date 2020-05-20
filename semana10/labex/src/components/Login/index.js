import React from 'react';
import { Container, GridViagens, SideBar, Conteudo, Footer } from '../Style/Style'
import { Form, FormData, Label } from '../Style/FormStyle'
import { useHistory } from 'react-router-dom'
import HeaderLogin from './HeaderLogin';
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import { useInputValue } from '../Hooks/useInputValue';

function Login() {
  const history = useHistory()
  const [email, setEmail, onChangeEmail] = useInputValue()
  const [password, setPassword, onChangePassword] = useInputValue()

  const goToListTripsPage = () => {
    history.push('/ListaViagens')
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
            <Input onChange={onChangeEmail} value={email} disabled />
            <Label>Senha:</Label>
            <Input onChange={onChangePassword} value={password} disabled />
          </FormData>
          <Button variant={'contained'} color={'primary'} onClick={goToListTripsPage} disabled>Cadastrar</Button>
        </Form>
      </GridViagens>
      <Footer />
    </Container>
  );
}

export default Login;