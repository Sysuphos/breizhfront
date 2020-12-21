import React, { Component } from 'react';
import './App.css';
import { getAllMovie } from './client'

class App extends Component {

  render() {
    getAllMovie().then(res => res.json().then(movies => {
      console.log(movies);
    }));
    return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
    );
  }
  
    
}

export default App;
