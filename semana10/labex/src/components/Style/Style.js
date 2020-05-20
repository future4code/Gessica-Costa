import Styled from 'styled-components'

export const Container = Styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
width: 100vw;
background-color: #293241;
`
export const GridViagens = Styled.div`
width: 100%;
flex-grow: 1;
`
export const SideBar = Styled.div`
background-color: #3D5A80;
color: white;
`
export const Conteudo = Styled.div`
display: flex;
flex-grow: 1;
`
export const Header = Styled.div`
position: relative; 
top: 0;
border: 1px solid;
`
export const Footer = Styled.div`
height: 6vh;
position: relative; 
bottom: 0;
background-color: #334661;
`