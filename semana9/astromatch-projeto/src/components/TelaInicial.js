import React, { useState } from 'react'
import Styled from 'styled-components'
import axios from 'axios'

const ContainerInicial = Styled.div`
`
const ContainerHeader = Styled.div`
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid rgb(200, 200, 200);
`
const Header = Styled.div`
    width: 57.7%;
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
const Image = Styled.img`
`
const ContainerBody = Styled.div`
    padding: 20px;
`
const Information = Styled.div``
const Choice = Styled.div``
const ButtonNegative = Styled.button``
const ButtonPositive = Styled.button``

export function TelaInicial(props) {

    return (
        <ContainerInicial>
            <ContainerHeader>
                <Header>
                    <Label>astro<b>match</b></Label>
                    <Button onClick={props.onClick}>Metches</Button>
                </Header>
            </ContainerHeader>
            <ContainerBody>
                <Information>
                    <Image src={"https://picsum.photos/360/200"} />
                    <h5>Nome, idade</h5>
                    <p>Descrição</p>
                </Information>
                <Choice>
                    <ButtonNegative>X</ButtonNegative>
                    <ButtonPositive>S2</ButtonPositive>
                </Choice>
            </ContainerBody>
        </ContainerInicial>
    )
}