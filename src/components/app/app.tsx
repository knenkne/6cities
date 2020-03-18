import * as React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import history from '../../history';

import {AppRoute} from '../../common/const';
import {getAuthorizationStatus} from '../../store/reducer/user/selectors';

import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import Room from '../../pages/room/room';
import Favorites from '../../pages/favorites/favorites';
import PrivateRoute from '../private-route/private-route';


const App: React.FC<{isAuthorized: boolean}> = ({isAuthorized}) => {
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
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state)
});

export default connect(mapStateToProps)(App);
