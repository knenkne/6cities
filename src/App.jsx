import React from 'react';
import PropTypes from 'prop-types';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import history from './history.js';

import {AppRoute} from './const.js';
import {getAuthorizationStatus} from './store/reducers/user/selectors.js';

import Main from './pages/main.jsx';
import SignIn from './pages/sign-in.jsx';
import Room from './pages/room.jsx';
import Favorites from './pages/favorites.jsx';
import PrivateRoute from './components/private-route/private-route.jsx';


function App({isAuthorized}) {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path={AppRoute.LOGIN} component={SignIn} to={AppRoute.ROOT} require={!isAuthorized}/>
        <PrivateRoute path={AppRoute.FAVORITES} component={Favorites} to={AppRoute.LOGIN} require={isAuthorized}/>
        <Route path={`${AppRoute.OFFER}/:id`} component={Room}/>
        <Route path={AppRoute.ROOT} component={Main}/>
      </Switch>
    </Router>
  );
}


App.propTypes = {
  isAuthorized: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state)
});

export default connect(mapStateToProps)(App);
