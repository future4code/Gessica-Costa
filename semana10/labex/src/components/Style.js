import Styled from 'styled-components'

export const Container = Styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
width: 100vw;
`
export const Conteudo = Styled.div`
display: flex;
border: 1px solid;
flex-grow: 1;
`
export const GridViagens = Styled.div`
flex-grow: 1;
border: 1px solid;
`
export const Header = Styled.div`
position: relative; 
top: 0;
border: 1px solid;
`
export const Footer = Styled.div`
position: relative; 
bottom: 0;
border: 1px solid;
`