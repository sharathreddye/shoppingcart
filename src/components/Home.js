import React, { Component } from 'react';
import { HookMapInterceptor } from 'tapable';
import axios from 'axios';

import Homeproducts from './Homeproducts';


class Home extends Component {

    constructor(){
        super();

        this.state={
          products:[],

        }

      }

      getInitialState() {

        return {
          products: []
        }
      };
    componentDidMount() {
        alert("hello");

        this.getProducts();
    }

    getProducts()
    {
        var _this = this;
        var url = "http://localhost:5000/products";
        axios
        .get(url)
        .then(function(result) {
          console.log(result.data);
          _this.setState({ products: result.data });
          alert("hello");
        });
    }

  render() {
    var Products = this.state.products;

    if(Products){

        var productList = Products.map(name=>{

               return (
<div>hi</div>
               )
            })

        }


    return (

		<div class="section">
			<div class="container">
				<div class="row">

					<div class="col-md-12">
						<div class="section-title">
							<h3 class="title">Just For You</h3>

						</div>
					</div>

					<div class="col-md-12">
						<div class="row">
							<div class="products-tabs">
								<div id="tab1" class="tab-pane active">
									<div class="products-slick" data-nav="#slick-nav-1">
                                      <Homeproducts products= {Products}/>





									</div>
									<div id="slick-nav-1" class="products-slick-nav"></div>
								</div>

							</div>
						</div>
					</div>

				</div>

			</div>

		</div>


    );
  }
}

export default Home;
