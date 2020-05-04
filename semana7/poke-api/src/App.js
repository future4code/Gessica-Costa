import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pokedex from './components/Pokedex';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokedex />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
