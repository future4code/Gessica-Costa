import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import axios from 'axios'
import { UrlAstromatch } from './UrlAstromatch'
import { Container, ContainerHeader, Header, Button, ImageAstromatch } from './Style'

const Image = Styled.img`
    max-width: 360px;
    max-height: 300px;
    border-radius: 1%;
`
const ContainerBody = Styled.div`
    padding: 20px;
`
const Information = Styled.div`
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 360px;
    height: 350px;
    border-radius: 1%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    filter: none;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    transform: translate(0, -100%);
`
const Background = Styled.div`
    background-position: center;
    background-repeat: repeat;
    width: 360px;
    height: 350px;
    border-radius: 1%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    filter: blur(5px);
    opacity: 0.8;
`
const Text = Styled.div`
    color: white;
    height: 30%;
    text-shadow: 2px 2px 4px #000000;
    text-align: left;
    font-size: 20px;
    padding: 20px;
`
const LabelName = Styled.label`
    font-size: 30px;
`
const Choice = Styled.div``
const ButtonNegative = Styled.button``
const ButtonPositive = Styled.button``
const divStyle = (src) => ({
    backgroundImage: `url(${src})`
})

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
                <Background style={divStyle(list.photo)}></Background>
                    <Information style={divStyle(list.photo)}>
                        <Text>
                            <LabelName>{list.name}, </LabelName>
                            <label>{list.age}</label>
                            <p>{list.bio}</p>
                        </Text>
                    </Information>
                <Choice>
                    <ButtonNegative onClick={newProfile}>X</ButtonNegative>
                    <ButtonPositive onClick={() => deuMatch(list.id)}>S2</ButtonPositive>
                </Choice>
            </ContainerBody>
        </Container>
    )
}