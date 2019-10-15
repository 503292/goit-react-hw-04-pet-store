import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Pets from '../pages/Pets';
import About from '../pages/About';
import Pet from '../pages/Pet';
import ErrorPage from '../pages/ErrorPage';
import Nav from './Nav';

import './App.module.css';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pets/:idPets" component={Pet} />
          <Route path="/pets" component={Pets} />
          <Route path="/about" component={About} />

          <Route component={ErrorPage} />
        </Switch>
      </>
    );
  }
}

export default App;
