import Styled from 'styled-components'

export const Container = Styled.div`
    height: 480px;
`
export const ContainerHeader = Styled.div`
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid rgb(200, 200, 200);
`
export const Header = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 50px;
`
export const Button = Styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;

    :hover {
        opacity: 0.5;
    }
`
export const ImageAstromatch = Styled.img`
    height: 100%;
    position: relative;
`