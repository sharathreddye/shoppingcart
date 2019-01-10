import React, { Component } from 'react';
///import logo from './logo.svg';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Home from '../components/Home';

class Homeroute extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Nav />
         
          <Home />
      </div>
    );
  }
}

export default Homeroute;
