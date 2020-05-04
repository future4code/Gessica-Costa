import React from 'react';
import './App.css';
import CadastroDeUsuario from './components/CadastroDeUsuario'
import ListaDeUsuarios from './components/ListaDeUsuarios';

class App extends React.Component {
  state = {
    usuarioCadastrado: false
  }

  onClickCadastro = () => {
    this.setState({ usuarioCadastrado: true })
  }

  onClickListaDeUsuarios = () => {
    this.setState({ usuarioCadastrado: false })
  }

  render() {
    if (this.state.usuarioCadastrado) {
      return <ListaDeUsuarios onClick={this.onClickListaDeUsuarios} />
    } else {
      return <CadastroDeUsuario onClick={this.onClickCadastro} />
    }
  }
}

export default App;
