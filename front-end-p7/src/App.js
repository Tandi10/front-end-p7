import React, { Component } from 'react';
import Inscriptionannonceur from  './inscriptionannonceur';
import Inscriptionlinkedin from './inscriptionlinkedin.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Inscriptionlinkedin/>
        <Inscriptionannonceur/>
      </div>
    );
  }
}

export default App;
