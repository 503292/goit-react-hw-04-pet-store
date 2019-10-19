import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';
// import HomePage from '../../pages/HomePage';
// import PetsPage from '../../pages/PetsPage';
// import AboutPage from '../../pages/AboutPage';
// import PetPage from '../../pages/PetPage';
// import ErrorPage from '../../pages/ErrorPage';

const RouteSite = () => (
  <Switch>
    {routes.map(route => (
      <Route key={route.path} {...route} />
    ))}
  </Switch>

  // <Switch>
  //   <Route path="/" exact component={HomePage} />
  //   <Route path="/pets/:idPets" component={PetPage} />
  //   <Route path="/pets" component={PetsPage} />
  //   <Route path="/about" component={AboutPage} />

  //   <Route component={ErrorPage} />
  // </Switch>
);

export default RouteSite;
