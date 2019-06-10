import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isComponent } from '../../utils';

const PrivateRoute = ({
  component: Component,
  conditionsMet,
  fallbackRoute,
  location,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (conditionsMet ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: fallbackRoute,
          state: { from: location },
        }}
      />
    ))
    }
  />
);

PrivateRoute.propTypes = {
  component: isComponent,
  conditionsMet: PropTypes.bool.isRequired,
  fallbackRoute: PropTypes.string.isRequired,
  location: PropTypes.shape({}),
};

PrivateRoute.defaultProps = {
  component: <div />,
  location: undefined,
};

export default PrivateRoute;
