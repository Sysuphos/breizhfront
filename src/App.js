import React, { Component } from 'react';
import './App.css';
import { PageHeader } from 'antd';
import List from './List'


class App extends Component {

  render() {
   
    return (
    <div className="App">
      <PageHeader 
      className="breizhvideo-header"
      onBack={() => null}
      title="BreizhVideo"
      subTitle="programmation"/>
      <List />
    </div>
    );
  }
  
    
}

export default App;