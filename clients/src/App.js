import React, { Component } from 'react';
import CakeContainer from './components/CakeContainer'

import IceCreamContainer from './components/IceCreamContainer'

import CookieContainer from './components/CookieContainer'

import Header from "../src/components/Header"

import Footer from "../src/components/footer"

import store from "./store"


import './App.css';

import Hooks from '../src/components/Hooks'

import {Provider }from "react-redux"

class App extends Component {
  render() {
    return (
     <Provider store={store}>
        <div className="App">
          <Header/>
          <CakeContainer/>
          <IceCreamContainer/>
          <CookieContainer/>
          <Footer/>
          
      </div>
     </Provider>
    );
  }
}

export default App;
