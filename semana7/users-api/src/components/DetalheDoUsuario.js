import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
`
const BotaoApaga = styled.button`
    background-color: white;
    color: red;
	border: none;
	padding: 5px;
	height: 30px;
	cursor: pointer;
`

class DetalheDoUsuario extends React.Component {
    state = {
        usuario: []
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
            console.log('buscaid',response.data)
            this.setState({ usuario: response.data })
        } catch (error) {
            alert('ERRO')
            console.log(error.response)
        }
    }

    render() {
        const lista = this.props.objUsuarios
        console.log('lista', this.props.objUsuarios)

        return (
            <Container>
                <label>Nome: {lista.name}</label>
                <label>Email: {lista.email}</label>
                <BotaoApaga onClick={this.props.onClickApaga}>Apagar Usuário</BotaoApaga>
            </Container>
        )
    }
}

export default DetalheDoUsuario