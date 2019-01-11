import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Homeproducts extends Component {
  render() {
    var productList = [];

    if(this.props.products){

         productList = this.props.products.map(name=>{

               return (
                <div class="product">
                <div class="product-img">
                    <img src="/assets/img/product01.png" alt="" />
                    <div class="product-label">
                        <span class="sale">-30%</span>
                        <span class="new">NEW</span>
                    </div>
                </div>
                <div class="product-body">
                    <p class="product-category">Category</p>
                    <h3 class="product-name"><a href="#">{name.pname}</a></h3>
                    <h4 class="product-price">{name.pprice} <del class="product-old-price">${name.discountprice}</del></h4>
                    <div class="product-rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <div class="product-btns">
                        <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
                        <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
                        <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
                    </div>
                </div>
                <div class="add-to-cart">
                    <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
                </div>
            </div>
               );
            });

        }
    return (
            
        <div class="products-slick" data-nav="#slick-nav-1">
            {productList}
        </div>
               

    );
  }
}
export default Homeproducts;
