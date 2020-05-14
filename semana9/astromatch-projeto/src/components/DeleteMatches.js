import React from 'react'
import { Container, FabStyled } from './Style'
import Clear from '@material-ui/icons/Clear'
import axios from 'axios'

export function DeleteMatches(props) {

    const clearMatches = () => {

        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gessica-costa-julian/clear")
            .then(res => {
                props.matchCall()
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
            <FabStyled onClick={confirmDelete} size='medium' color='secondary'><Clear /></FabStyled>
        </Container>
    )
}