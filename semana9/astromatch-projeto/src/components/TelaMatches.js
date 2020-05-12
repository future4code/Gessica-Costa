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
`
const Card = Styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const Image = Styled.img`
    border-radius: 20%;
    margin-right: 10px;
`

export function TelaMatches(props) {
    const [list, setList] = useState({})

    useEffect(() => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${gessica-costa-julian}/matches')
            .then(res => {
                console.log('Get Matches:', res.data.matches)
               // setList(res.data.profile)
            })
            .catch(err => {
                console.log('Erro no Get Matches:', err)
            })
    }, [])

    return (
        <ContainerMatches>
            <ContainerHeader>
                <Header>
                    <Button onClick={props.onClick}>Início</Button>
                    <Label>astro<b>match</b></Label>
                </Header>
            </ContainerHeader>
            <ContainerBody>
                <Card>
                    <Image src={"https://picsum.photos/60/40"} />
                    <label>Nome</label>
                </Card>
            </ContainerBody>
        </ContainerMatches>
    )
}