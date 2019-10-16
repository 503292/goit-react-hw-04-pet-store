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
        {/* <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/pets/:idPets" component={PetPage} />
          <Route path="/pets" component={PetsPage} />
          <Route path="/about" component={AboutPage} />

          <Route component={ErrorPage} />
        </Switch> */}
      </>
    );
  }
}

export default App;
