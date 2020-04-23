import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Etapa1 } from './components/Etapa1';
import { Etapa2 } from './components/Etapa2';
import { Etapa3 } from './components/Etapa3';
import { Etapa4 } from './components/Etapa4';

class App extends React.Component {
  
  state = {
    secao: 1
  }
  
  botaoEscolhas = () => {
   const etapaAtual = this.state.secao
   //console.log(etapaAtual)
   const etapaSeguinte = etapaAtual + 1

   this.setState({secao: etapaSeguinte})
  }

  secaoEscolhida = () => {
    switch (this.state.secao) {
      case 1:
        return <Etapa1 />

      case 2:
        return <Etapa2 />

      case 3:
        return <Etapa3 />

      case 4:
        return <Etapa4 />

      default:
        return <div>Escolha uma Etapa</div>
    }
  }

  render() {

    return (
      <div className="App">
        {this.secaoEscolhida()}
        <br />
        <button onClick={this.botaoEscolhas}>Próxima etapa</button>
      </div>
    );
  }
}

export default App;
