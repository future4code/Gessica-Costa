import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Header = styled.div`
  position: relative;
  top: 0;
  margin: 10px;
`
const ListaContainer = styled.div`
  padding: 30px;
`

class ListaDeUsuarios extends React.Component {
    render() {
      return (
        <Container>
          <Header>
            <button onClick={this.props.onClick}>Cadastro de Usuários</button>
          </Header>
          <ListaContainer>
          <label>Nome </label>
          <button>X</button>
        </ListaContainer>
        </Container>
      );
    }
  }
  
  export default ListaDeUsuarios;
  