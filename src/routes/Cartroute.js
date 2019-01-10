import React, { Component } from 'react';
///import logo from './logo.svg';
import '../App.css';
import Header from '../components/Header';
import Nav from '../components/Nav';

import Cartitems from '../components/Cartitems';



class Cartroute extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Nav />
         
          <Cartitems />
      </div>
    );
  }
}

export default Cartroute;
