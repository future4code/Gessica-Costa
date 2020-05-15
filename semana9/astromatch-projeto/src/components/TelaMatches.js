import React, { useEffect } from 'react'
import { DeleteMatches } from './DeleteMatches'
import { UrlAstromatch } from './UrlAstromatch'
import Styled from 'styled-components'
import { Container, ContainerHeader, Header, Button, ImageAstromatch, FabStyled } from './Style'
import Search from '@material-ui/icons/Search'

const ContainerBody = Styled.div`
    padding: 20px;
    overflow: auto;
    height: 100%;
    display: flex;
    flex-direction: column;

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
    cursor: pointer;

    :hover {
        background-color: #f1f1f1;
    }
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
const SearchStyled = Styled(Search)`
    color: #762d93;
    :hover {
        color: #501866;
    }
`
const divStyle = (src) => ({
    backgroundImage: `url(${src})`
})

export function TelaMatches(props) {

    useEffect(() => {
        props.matchCall()
    }, [])

    const lista = props.list.map((match, i) => {
        return (
            <Card key={i}>
                <ContainerImage style={divStyle(match.photo)} />
                <label>{match.name}</label>
            </Card>
        );
    });

    return (
        <Container>
            <ContainerHeader>
                <Header>
                    <Button onClick={props.onClick}><SearchStyled /></Button>
                    <ImageAstromatch
                        src={UrlAstromatch}
                        alt={'astromatch'}
                    />
                </Header>
            </ContainerHeader>
            <ContainerBody>
                {lista}
                <DeleteMatches matchCall={props.matchCall} />
            </ContainerBody>
        </Container>
    )
}