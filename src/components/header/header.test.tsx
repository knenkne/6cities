import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';

import Header from './header';


const mockStore = configureStore([]);

describe(`Render <Header />`, () => {
  it(`<Header /> should have been rendered with userName`, () => {
    const store = mockStore({
      user: {
        isAuthorized: true,
        name: `jztenk@gmail.com`
      }
    });

    const tree = renderer.create(
        <Router>
          <Provider store={store}>
            <Header />
          </Provider>
        </Router>
    );

    expect(tree).toMatchSnapshot();
  });

  it(`<Header /> should have been rendered with sign-in`, () => {
    const store = mockStore({
      user: {
        isAuthorized: false
      }
    });

    const tree = renderer.create(
        <Router>
          <Provider store={store}>
            <Header />
          </Provider>
        </Router>
    );

    expect(tree).toMatchSnapshot();
  });
});
