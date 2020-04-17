import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

const CampoDeTexto = styled.input`
  width: 200px;
  margin: 5px 0;
`
const Botao = styled.button`
  width: 100px;
  height: 30px;
  margin-bottom: 10px;
`

class App extends React.Component {
  state = {
    pessoas: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50?a=1',
        fotoPost: 'https://picsum.photos/200/150?a=2'
      },
      {
        nomeUsuario: 'joao',
        fotoUsuario: 'https://picsum.photos/50/50?a=3',
        fotoPost: 'https://picsum.photos/200/150?a=4'
      },
      {
        nomeUsuario: 'pedro',
        fotoUsuario: 'https://picsum.photos/50/50?a=5',
        fotoPost: 'https://picsum.photos/200/150?a=6'
      }
    ],

    valorInputPessoa: '',
    valorInputFotoUsuario: '',
    valorInputFotoPost: ''
  }

  adicionaPessoa = () => {
    const novaPessoa = {
      nomeUsuario: this.state.valorInputPessoa,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }
    const novoPessoa = [novaPessoa, ...this.state.pessoas]
    this.setState({
      pessoas: novoPessoa,
      valorInputPessoa: '',
      valorInputFotoUsuario: '',
      valorInputFotoPost: ''
    })
  }

  onChangeInputPessoa = event => {
    this.setState({ valorInputPessoa: event.target.value })
  }

  onChangeInputFotoUsuario = event => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }

  onChangeInputFotoPost = event => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  render() {

    const listaDePosts = this.state.pessoas.map((pessoa, index) => {
      return (
        <Post key={index}
          nomeUsuario={pessoa.nomeUsuario}
          fotoUsuario={pessoa.fotoUsuario}
          fotoPost={pessoa.fotoPost}
        />
      )
    })

    return (

      <div className={'app-container'}>
        <CampoDeTexto
          value={this.state.valorInputPessoa}
          onChange={this.onChangeInputPessoa}
          placeholder={'Nome'}
        />
        <CampoDeTexto
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={'Foto Usuário'}
        />
        <CampoDeTexto
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={'Foto Post'}
        />
        <Botao onClick={this.adicionaPessoa}>Postar</Botao>
        <div>{listaDePosts}</div>
      </div>
    );
  }
}

export default App;
