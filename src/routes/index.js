import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Homeroute from './Homeroute';
import Cartroute from './Cartroute';
import Login from '../components/Login'
export default ()=>
(

   <BrowserRouter>
      <Switch>
         <Route path="/" exact component={Homeroute} />
         <Route path="/cart" exact component={Cartroute} />

         <Route path="/login" exact component={Login} />     
      </Switch>
   </BrowserRouter>
);
