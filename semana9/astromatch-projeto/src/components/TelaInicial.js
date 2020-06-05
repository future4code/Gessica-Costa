import React, { useState, useEffect } from 'react'
import { DeleteMatches } from './DeleteMatches'
import Styled from 'styled-components'
import axios from 'axios'
import { UrlAstromatch } from './UrlAstromatch'
import { Container, ContainerHeader, Header, Button, ImageAstromatch } from './Style'

import Favorite from '@material-ui/icons/Favorite'
import HighlightOff from '@material-ui/icons/CancelOutlined'
import HowToReg from '@material-ui/icons/HowToReg'
import Badge from '@material-ui/core/Badge';

const Image = Styled.img`
    max-width: 360px;
    max-height: 300px;
    border-radius: 1%;
`
const ContainerBody = Styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`
const Information = Styled.div`
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 360px;
    height: 400px;
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
    height: 400px;
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
    height: 40%;
    text-shadow: 2px 2px 4px #000000;
    text-align: left;
    font-size: 20px;
    padding: 20px;
`
const LabelName = Styled.label`
    font-size: 30px;
`
const Choice = Styled.div`
    margin-top: 20px;
`
const ButtonChoice = Styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;

    :hover {
        opacity: 0.5;
    }
`
const FavoriteStyled = Styled(Favorite)`
    color: green;
`
const HighlightOffStyled = Styled(HighlightOff)`
    color: red;
`
const HowToRegStyle = Styled(HowToReg)`
    color: #762d93;
    :hover {
        color: #501866;
    }
`

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
                props.matchCall()

                res.data.profile === null ? (
                    setList({})
                ) : (
                        setList(res.data.profile)
                    )
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
                console.log('Choose Person: ', res.data)
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
                    <Button onClick={props.onClick}>
                        <Badge color={'secondary'} badgeContent={props.content} showZero>
                            <HowToRegStyle />
                        </Badge>
                    </Button>
                </Header>
            </ContainerHeader>
            <ContainerBody>
                <div>
                    <Background style={divStyle(list.photo)} />
                    <Information style={divStyle(list.photo)}>
                        <Text>
                            <LabelName>{list.name}, </LabelName>
                            <label>{list.age}</label>
                            <p>{list.bio}</p>
                        </Text>
                    </Information>
                </div>
                <Choice>
                    <ButtonChoice onClick={newProfile}><HighlightOffStyled /></ButtonChoice>
                    <ButtonChoice onClick={() => deuMatch(list.id)}><FavoriteStyled /></ButtonChoice>
                </Choice>
                <DeleteMatches matchCall={props.matchCall} profile={newProfile} />
            </ContainerBody>
        </Container>
    )
}