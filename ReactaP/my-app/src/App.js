import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import GetApi from './components/GetApi';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetApi></GetApi>
      </div>
    );
  }
}

export default App;
