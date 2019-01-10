import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Cart extends Component {
  render() {
    return (
       
        <div class="section" >
			<div class="container bggray">
				<div class="row">
                   <div class="col-md-6">
                            <div class="section-title">
                                <h3 class="title">Your shopping cart</h3>
                                
                            </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-7">
                        <div class="row">
                            <div class="cart-list">
                            <div class="product-widget">
                                <div class="product-img">
                                    <img src="/assets/img/product01.png" alt="" />
                                </div>
                                <div class="product-body">
                                    <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                    <h4 class="product-price"><span class="qty">1x</span>$980.00</h4>
                                </div>
                                <button class="delete"><i class="fa fa-close"></i></button>
                            </div>

                            <div class="product-widget">
                                <div class="product-img">
                                    <img src="/assets/img/product02.png" alt="" />
                                </div>
                                <div class="product-body">
                                    <h3 class="product-name"><a href="#">product name goes here</a></h3>
                                    <h4 class="product-price"><span class="qty">3x</span>$980.00</h4>
                                </div>
                                <button class="delete"><i class="fa fa-close"></i></button>
                            </div>
                        </div>
                        <div class="cart-summary">
                            <h5>3 Item(s) selected</h5>
                            <h5>SUBTOTAL: $2940.00</h5>
                        </div>
                
                    </div>
                </div>

                <div class="col-md-5 order-details bgblack">
						<div class="section-title text-center">
							<h3 class="title cyellow">Card Details</h3>
						</div>
						<div class="order-summary cwhite">
							<div class="order-col">
								<div><strong>PRODUCT</strong></div>
								<div><strong>TOTAL</strong></div>
							</div>
							<div class="order-products">
								<div class="order-col">
									<div>1x Product Name Goes Here</div>
									<div>$980.00</div>
								</div>
								<div class="order-col">
									<div>2x Product Name Goes Here</div>
									<div>$980.00</div>
								</div>
							</div>
							<div class="order-col">
								<div>Shiping</div>
								<div><strong>FREE</strong></div>
							</div>
							<div class="order-col">
								<div><strong>TOTAL</strong></div>
								<div><strong class="order-total">$2940.00</strong></div>
							</div>
						</div>
						<div class="payment-method">
							<div class="input-radio">
								<input type="radio" name="payment" id="payment-1" />
								<label for="payment-1">
									<span></span>
									Direct Bank Transfer
								</label>
								<div class="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
							<div class="input-radio">
								<input type="radio" name="payment" id="payment-2" />
								<label for="payment-2">
									<span></span>
									Cheque Payment
								</label>
								<div class="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
							<div class="input-radio">
								<input type="radio" name="payment" id="payment-3" />
								<label for="payment-3">
									<span></span>
									Paypal System
								</label>
								<div class="caption">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
						</div>
						<div class="input-checkbox">
							<input type="checkbox" id="terms" />
							<label for="terms">
								<span></span>
								I've read and accept the <a href="#">terms & conditions</a>
							</label>
						</div>
                        <div class="primary-btn order-submit bgyellow">
                           <Link to={`/login`}>Checkout</Link>
                        </div>
					</div>
             </div>
            </div>
        </div>
    );
  }
}

export default Cart;