import React, { Component } from 'react';


class Nav extends Component {
  render() {
    return (

        <nav id="navigation" >
        <div class="container">
            <div id="responsive-nav">
                <ul class="main-nav nav navbar-nav">
                    <li class="active"><a class="dropdown-toggle" href="#">Categories</a></li>
                    <li><a href="#">Hot Deals</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Laptops</a></li>
                    <li><a href="#">Smartphones</a></li>
                    <li><a href="#">Cameras</a></li>
                    <li><a href="#">Accessories</a></li>
                </ul>
            </div>
        </div>
    </nav>
    );
  }

}
export default Nav;
