import React, { Component } from 'react';
import logo from '../Image/schapiteau.png';
import './Header.css'

class Header extends Component {

    render() {
      return (
        
        <header className="Header" >
            <span>
                <img src={logo} className="Header-logo" alt="logo" />
                <h1 className="Header-title">Welcome to my site</h1>          
            </span>
        </header>
        
      );
    }
  }

  export default Header;