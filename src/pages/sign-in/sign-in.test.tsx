import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';

import {SignIn} from './sign-in';


const mockStore = configureStore([]);

it(`<SignIn /> should be rendered`, () => {
  const div = document.createElement(`div`);
  document.body.appendChild(div);

  const store = mockStore({
    user: {
      isAuthorized: false
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <SignIn city={`Paris`} handleLogin={jest.fn()}/>
        </Router>
      </Provider>
  );

  expect(tree).toMatchSnapshot();
});
