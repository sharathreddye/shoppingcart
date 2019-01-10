import React, { Component } from 'react';
import Cartitems from './components/Cartitems';
import Cartsidebar from './components/Cartsidebar';


class Cart extends Component {
  render() {
    return (
        <Cartitems />

        <Cartsidebar />

    );
  }
}

export default Cart;