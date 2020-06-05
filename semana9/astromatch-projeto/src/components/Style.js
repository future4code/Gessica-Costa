import Styled from 'styled-components'

export const Container = Styled.div`
    height: 480px;
    width: 100%;
`
export const ContainerHeader = Styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid rgb(200, 200, 200);
`
export const Header = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    height: 50px;
`
export const Button = Styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
`
export const ImageAstromatch = Styled.img`
    height: 50px;
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
`