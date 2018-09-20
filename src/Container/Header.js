import React, { Component } from 'react';
import logo from '../Image/schapiteau.png';
import './Header.css'

class Header extends Component {

    render() {
      return (
        <div className="Header">
            <header className="App-header">
                <img src={logo} className="sitelogo" alt="logo" 
                style={sitelogo}/>
                <h1 className="App-title">Welcome to React</h1>          
            </header>
        </div>
      );
    }
  }

  //A exporter en CSS
  const sitelogo = {
    height : '80px',
  }

  export default Header;