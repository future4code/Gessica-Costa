import React from 'react';
import './App.css';
import Post from './components/Post/Post';

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
    ]
  }
  render() {

    const listaDePosts = this.state.pessoas.map((pessoa, index) => {
      return (
        <Post key = {index}
          nomeUsuario={pessoa.nomeUsuario}
          fotoUsuario={pessoa.fotoUsuario}
          fotoPost={pessoa.fotoPost}
        />
      )
    })

    return (
      <div className={'app-container'}>
        {listaDePosts}
      </div>
    );
  }
}

export default App;
