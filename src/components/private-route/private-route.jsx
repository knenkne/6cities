import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, to, require}) =>
  <Route render={(props) => (
    require ? <Component {...props}/> : <Redirect to={to}/>
  )}/>;

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]),
  to: PropTypes.string,
  require: PropTypes.bool
};

export default PrivateRoute;
