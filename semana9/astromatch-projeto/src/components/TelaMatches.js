import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import axios from 'axios'

const ContainerMatches = Styled.div`
`
const ContainerHeader = Styled.div`
    border-bottom: 1px solid rgb(200, 200, 200);
`
const Header = Styled.div`
    width: 57.8%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`
const Button = Styled.button`
    cursor: pointer;
`
const Label = Styled.label`
    display: flex;
    justify-self: center;
    align-self: center;
`
const ContainerBody = Styled.div`
    padding: 20px;
    overflow: auto;
    height: 510px;
`
const Card = Styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const Image = Styled.img`
    max-width: 60px;
    max-height: 60px;
    border-radius: 50%;
`
const ContainerImage = Styled.div`
    width: 50px;
    height: 100%;
    border: 1px solid;
    border-radius: 50%;
    margin-right: 10px;
`

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
    console.log('list', list)

    const lista = list.map(match => {
        return (
            <Card>
                <ContainerImage>
                    <Image src={match.photo} />
                </ContainerImage>
                <label>{match.name}</label>
            </Card>
        );
    });

    console.log('lista', lista)

    return (
        <ContainerMatches>
            <ContainerHeader>
                <Header>
                    <Button onClick={props.onClick}>Início</Button>
                    <Label>astro<b>match</b></Label>
                </Header>
            </ContainerHeader>
            <ContainerBody>
                {lista}
            </ContainerBody>
        </ContainerMatches>
    )
}