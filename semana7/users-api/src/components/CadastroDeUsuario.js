import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Header = styled.div`
  position: relative;
  top: 0;
  margin: 10px;
`
const CadastroContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border: 1px solid;
  padding: 40px 50px;
`
const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
`
const Botao = styled.button`
  width: 100%;
  background-color: rgb(192, 192, 111);
  color: white;
	border: none;
	padding: 5px;
	height: 30px;
	cursor: pointer;
`

class CadastroDeUsuario extends React.Component {
  state = {
    usuarios: [],
    usuarioValue: '',
    emailValue: ''
  }

  onChangeNome = event => {
    this.setState({usuarioValue: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({emailValue: event.target.value})
  }

  onCreateUsuario = event => {
    this.cadastrarUsuario(this.state.usuarioValue, this.state.emailValue)
  }

  cadastrarUsuario = (usuarioName, usuarioEmail) => {
    this.setState({usuarioValue: '',
    emailValue: ''})

    const body = {
      name: usuarioName,
      email: usuarioEmail
    }

    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        body,
        {
          headers: {
            Authorization: 'gessica-costa-julian'
          }
        }
      )
      .then(resposta => {
        alert('Usuário cadastrado', resposta)
      })
      .catch(error => {
        alert('ERRO', error.response)
      })
  }

    render() {
      return (
        <Container>
          <Header>
            <Botao onClick={this.props.onClick}>Lista de Usuários</Botao>
          </Header>
          <CadastroContainer>
          <label>Nome:</label>
          <Input onChange={this.onChangeNome} value={this.state.usuarioValue} placeholder='Nome do usuário'></Input>
          <label>Email:</label>
          <Input onChange={this.onChangeEmail} value={this.state.emailValue} placeholder='Email do usuário'></Input>
          <Botao onClick={this.onCreateUsuario}>Cadastrar</Botao>
        </CadastroContainer>
        </Container>
      );
    }
  }
  
  export default CadastroDeUsuario;
  