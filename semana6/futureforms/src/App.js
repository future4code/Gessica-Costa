import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Etapa1 } from './components/Etapa1';
import { Etapa2 } from './components/Etapa2';
import { Etapa3 } from './components/Etapa3';
import { Etapa4 } from './components/Etapa4';

class App extends React.Component {

  state = {
    secao: 'Etapa1'
  }

  irParaEtapa1 = () => {
    this.setState({ secao: 'Etapa1' })
  }
  irParaEtapa2 = () => {
    this.setState({ secao: 'Etapa2' })
  }
  irParaEtapa3 = () => {
    this.setState({ secao: 'Etapa3' })
  }
  irParaEtapa4 = () => {
    this.setState({ secao: 'Etapa4' })
  }

  secaoEscolhida = () => {
    switch (this.state.secao) {
      case 'Etapa1':
        return <Etapa1 />

      case 'Etapa2':
        return <Etapa2 />

      case 'Etapa3':
        return <Etapa3 />

      case 'Etapa4':
        return <Etapa4 />

      default:
        return <div>Escolha uma Etapa</div>
        break;
    }
  }

  render() {
    return (
      <div className="App">
        {this.secaoEscolhida()}
      </div>
    );
  }
}

export default App;
