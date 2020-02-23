import React, { Component } from 'react';
import CakeContainer from './components/CakeContainer'

import IceCreamContainer from './components/IceCreamContainer'

import CookieContainer from './components/CookieContainer'

import store from "./store"


import './App.css';

import Hooks from '../src/components/Hooks'

import {Provider }from "react-redux"

class App extends Component {
  render() {
    return (
     <Provider store={store}>
        <div className="App">
          <CakeContainer/>
          <IceCreamContainer/>
          <CookieContainer/>
          {/* <Hooks/> */}
          
      </div>
     </Provider>
    );
  }
}

export default App;
