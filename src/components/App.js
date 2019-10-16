import React, { Component } from 'react';
import Nav from './Nav/Nav';
import RouteSite from './RouteSite/RouteSite';

import './App.module.css';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Nav />
        <RouteSite />
      </>
    );
  }
}

export default App;
