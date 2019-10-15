import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Pets from '../pages/Pets';
import About from '../pages/About';
import ErrorPage from '../pages/ErrorPage';
import Nav from '../pages/Nav';

class PetsShop extends Component {
  state = {};
  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/:idPets" component={About} />
          <Route path="/pets" component={Pets} />
          <Route path="/about" component={About} />

          <Route component={ErrorPage} />
        </Switch>
      </>
    );
  }
}

export default PetsShop;
