import Styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    background: '#FF5F00',
    color: 'white',
    '&:hover': {
      background: '#E05400',
    },
  },
  input: {
    '&:after': {
      color: '#FF5F00',
      borderColor: '#FF5F00',
    },
    '&:focused': {
      color: '#FF5F00',
    }
  },
})

export const Container = Styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
width: 100vw;
max-width:100%;
background-image: url('https://wallpaperaccess.com/full/691897.jpg');
background-attachment: fixed;
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