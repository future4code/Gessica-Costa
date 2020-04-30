import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import DetalheDoUsuario from './DetalheDoUsuario'

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
const DetalheContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const AUsuario = styled.a`
    cursor: pointer;
    :hover {
        opacity: 0.5;
    }
`
const Botao = styled.button`
    width: ${props => props.size};
    margin: ${props => props.margin};
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
        listaUsuarios: [],
        usuario: [],
        detalhe: true
    }

    componentDidMount() {
        this.buscaUsuarios()
    }

    buscaUsuarios = async () => {
        try {
            const response = await axios.get(
                'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
                {
                    headers: {
                        Authorization: 'gessica-costa-julian'
                    }
                }
            )
            // console.log(response.data)
            this.setState({ listaUsuarios: response.data })
        } catch (error) {
            alert('ERRO')
            console.log(error.response)
        }
    }

    confirmaApagarUsuario = idUsuario => {
        let confirmacao = window.confirm('Tem certeza de que deseja deletar?')

        return confirmacao ? this.apagarUsuario(idUsuario) : console.log('Não apagou')
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
            .then(response => {
                alert('Usuário apagado.')
                //console.log(response)
                this.buscaUsuarios()
            })
            .catch(error => {
                alert('ERRO')
                console.log(error.response)
            })
    }

    buscaId = async (id) => {
        try {
            const response = await axios.get(
                'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/' +
                id,
                {
                    headers: {
                        Authorization: 'gessica-costa-julian'
                    }
                }
            )
            // console.log('buscaid', response.data)
            this.setState({ usuario: response.data })
            let muda = !this.state.detalhe
            this.setState({ detalhe: muda })
        } catch (error) {
            alert('ERRO')
            console.log(error.response)
        }
    }
    voltaListaUsuarios = () => {
        this.setState({ detalhe: true })
    }

    render() {
        const lista = this.state.listaUsuarios.map((usuario, index) => {
            return (
                <Usuario key={index}>
                    <AUsuario onClick={() => this.buscaId(usuario.id)}>{usuario.name}</AUsuario>
                    <BotaoApaga onClick={() => this.confirmaApagarUsuario(usuario.id)}>X</BotaoApaga>
                </Usuario>)
        })

        if (this.state.detalhe) {
            return (
                <Container>
                    <Header>
                        <Botao size={'100%'} onClick={this.props.onClick}>Cadastro de Usuários</Botao>
                    </Header>
                    <h4>Usuários cadastrados</h4>
                    <ListaContainer>
                        {lista}
                    </ListaContainer>
                </Container>
            );
        } else {
            return (
                <DetalheContainer>
                    <Botao size={'auto'} margin={'10px'} onClick={this.voltaListaUsuarios}>Lista de Usuários</Botao>
                    < DetalheDoUsuario
                        objUsuarios={this.state.usuario}
                        onClickApaga={() => this.confirmaApagarUsuario(this.state.usuario.id)}
                    />
                </DetalheContainer>
            )
        }
    }
}

export default ListaDeUsuarios;
