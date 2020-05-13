import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import axios from 'axios'
import { UrlAstromatch } from './UrlAstromatch'
import { Container, ContainerHeader, Header, Button, ImageAstromatch } from './Style'

const ContainerBody = Styled.div`
    padding: 20px;
    overflow: auto;
    height: 100%;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    ::-webkit-scrollbar-thumb {
        background: #b3b3b3; 
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #8c8c8c; 
    }
`
const Card = Styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid rgb(200, 200, 200);
`
const ContainerImage = Styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
    overflow: hidden;
    background-size: cover;
`
const divStyle = (src) => ({
    backgroundImage: `url(${src})`
})

export function TelaMatches(props) {
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gessica-costa-julian/matches')
            .then(res => {
                console.log('Get Matches:', res.data.matches)
                setList(res.data.matches)
            })
            .catch(err => {
                console.log('Erro no Get Matches:', err)
            })
    }, [setList])

    const lista = list.map(match => {
        return (
            <Card>
                <ContainerImage style={divStyle(match.photo)} />
                <label>{match.name}</label>
            </Card>
        );
    });

    console.log('lista', lista)

    return (
        <Container>
            <ContainerHeader>
                <Header>
                    <Button onClick={props.onClick}>Início</Button>
                    <ImageAstromatch
                        src={UrlAstromatch}
                        alt={'astromatch'}
                    />
                </Header>
            </ContainerHeader>
            <ContainerBody>
                {lista}
            </ContainerBody>
        </Container>
    )
}