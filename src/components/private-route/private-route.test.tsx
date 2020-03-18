import * as React from 'react';
import {mount} from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {city} from '../../common/types';
import {AppRoute} from '../../common/const';
import SignIn from '../../pages/sign-in/sign-in';
import PrivateRoute from './private-route';


const mockStore = configureStore([]);

const cities: city[] = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

it(`<PrivateRoute /> should not redirect`, () => {
  const store = mockStore({
    user: {
      isAuthorized: false
    },
    cities: {
      data: cities,
      current: `Paris`
    },
    offers: {
      sorting: `id`,
      data: []
    }
  });

  const tree = mount(
      <Provider store={store}>
        <Router>
          <PrivateRoute path={AppRoute.LOGIN} component={SignIn} to={AppRoute.ROOT} require={true}/>
        </Router>
      </Provider>);

  expect(tree.getDOMNode()).toMatchSnapshot();
});

it(`<PrivateRoute /> should redirect`, () => {
  const store = mockStore({
    user: {
      isAuthorized: true
    },
    cities: {
      data: cities,
      current: `Paris`
    },
    offers: {
      sorting: `id`,
      data: []
    }
  });

  const tree = mount(
      <Provider store={store}>
        <Router>
          <PrivateRoute path={AppRoute.LOGIN} component={SignIn} to={AppRoute.ROOT} require={false}/>
        </Router>
      </Provider>);

  expect(tree.getDOMNode()).toMatchSnapshot();
});
