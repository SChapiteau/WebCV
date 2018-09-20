import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Header from './Container/Header'

import Mission from './Component/Mission'
import MissionData from './Component/MissionData'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>

        <p className="App-intro">
          Site en construction
        </p>
        
        <Mission mission={new MissionData("Mission1","2018/08/03","BTL")}/>
      </div>
    );
  }
}

export default App;
