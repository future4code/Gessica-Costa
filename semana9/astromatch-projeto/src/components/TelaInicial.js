import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import axios from 'axios'
import {UrlAstromatch} from './UrlAstromatch'
import {Container, ContainerHeader, Header, Button, ImageAstromatch } from './Style'

const Image = Styled.img`
    max-width: 360px;
    max-height: 300px;
    border-radius: 1%;
`
const ContainerBody = Styled.div`
    padding: 20px;
`
const Information = Styled.div``
const Choice = Styled.div``
const ButtonNegative = Styled.button``
const ButtonPositive = Styled.button``

export function TelaInicial(props) {

    const [list, setList] = useState({})

    useEffect(() => {
        newProfile()
    }, [])

    const newProfile = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gessica-costa-julian/person')
            .then(res => {
                console.log('Get Profile: ', res.data.profile)
                setList(res.data.profile)
            })
            .catch(err => {
                console.log('Erro no Get Profile: ', err)
            })
    }

    const deuMatch = id => {
        const body = {
            "id": id,
            "choice": true
        }

        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gessica-costa-julian/choose-person",
            body,
            {
                headers: { 'Content-Type': "application/json" }
            })
            .then(res => {
                console.log('Choose Person: ', res)
            }).catch(err => {
                console.log('Erro no Choose Person: ', err)
            })

        newProfile()
    }

    return (
        <Container>
            <ContainerHeader>
                <Header>
                    <ImageAstromatch
                        src={UrlAstromatch}
                        alt={'astromatch'}
                    />
                    <Button onClick={props.onClick}>Matches</Button>
                </Header>
            </ContainerHeader>
            <ContainerBody>
                <Information>
                    <Image src={list.photo} alt="Foto" />
                    <h5>{list.name}</h5>
                    <label>{list.age}</label>
                    <p>{list.bio}</p>
                </Information>
                <Choice>
                    <ButtonNegative onClick={newProfile}>X</ButtonNegative>
                    <ButtonPositive onClick={() => deuMatch(list.id)}>S2</ButtonPositive>
                </Choice>
            </ContainerBody>
        </Container>
    )
}