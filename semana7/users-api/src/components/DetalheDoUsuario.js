import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

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
        let lista = this.props.objUsuarios
        //console.log('lista', lista)
        const listaUsuarios = lista.map(usuario => {
            return usuario.name
        })
       //console.log(listaUsuarios)
        return (
            <div></div>
        )
    }
}

export default DetalheDoUsuario