import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { tsLiteralType } from '@babel/types'

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
const ListaContainer = styled.div`
  padding: 30px;
`
const Usuario = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid;
    align-items: center;
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
const BotaoApaga = styled.button`
    background-color: white;
    color: red;
	border: none;
	padding: 5px;
	height: 30px;
	cursor: pointer;
`

class ListaDeUsuarios extends React.Component {

    state = {
        listaUsuarios: []
    }

    componentDidMount() {
        this.buscaUsuarios()
    }

    buscaUsuarios = () => {
        axios
            .get(
                'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
                {
                    headers: {
                        Authorization: 'gessica-costa-julian'
                    }
                }
            )
            .then(resposta => {
                console.log(resposta.data)
                this.setState({ listaUsuarios: resposta.data })
            })
            .catch(error => {
                alert('ERRO')
                console.log(error.response)
            })
    }

    apagarUsuario = idUsuario => {
        axios
            .delete(
                'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/' +
                idUsuario,
                {
                    headers: {
                        Authorization: 'gessica-costa-julian'
                    }
                }
            )
            .then(resposta => {
                alert('Usuário apagado.')
                console.log(resposta)
            })
            .catch(error => {
                alert('ERRO')
                console.log(error.response)
            })
    }

    render() {
        const lista = this.state.listaUsuarios.map((usuario, index) => {
            return (
                <Usuario key={index}><label>{usuario.name}</label>
                    <BotaoApaga onClick={() => this.apagarUsuario(usuario.id)}>X</BotaoApaga>
                </Usuario>)
        })
        return (
            <Container>
                <Header>
                    <Botao onClick={this.props.onClick}>Cadastro de Usuários</Botao>
                </Header>
                <h4>Usuários cadastrados</h4>
                <ListaContainer>
                    {lista}
                </ListaContainer>
            </Container>
        );
    }
}

export default ListaDeUsuarios;
