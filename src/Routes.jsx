import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './hoc/PrivateRoute/PrivateRoute';
import { Home, Login } from './pages';

import { isAuthenticated } from './utils';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      exact
      path="/login"
      component={Login}
      conditionsMet={!isAuthenticated}
      fallbackRoute="/"
    />
    <PrivateRoute
      exact
      path="/dashboard"
      component={Home}
      conditionsMet={isAuthenticated}
      fallbackRoute="/login"
    />
  </Switch>
);

export default Routes;
