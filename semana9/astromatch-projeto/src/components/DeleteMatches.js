import React from 'react'
import Fab from '@material-ui/core/Fab'
import Clear from '@material-ui/icons/Clear'
import axios from 'axios'
import Styled from 'styled-components'

const Container = Styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
`

export function DeleteMatches(props) {

    const clearMatches = () => {

        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gessica-costa-julian/clear")
            .then(res => {
                props.matchCall()
                props.profile()
            }).catch(err => {
                console.log('Erro no Clear: ', err)
            })
    }

    const confirmDelete = () => {
        const confirma = window.confirm('Tem certeza que deseja deletar todos os matches?')
        confirma && clearMatches()
    }

    return (
        <Container>
            <Fab onClick={confirmDelete} size='medium' color='secondary'><Clear /></Fab>
        </Container>
    )
}