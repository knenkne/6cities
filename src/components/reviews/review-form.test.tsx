import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import Form from './review-form';


const mockStore = configureStore([]);

it(`<Form /> should render`, () => {
  const store = mockStore({
    request: {
      type: ``,
      status: ``,
      id: null
    },
    offers: {
      current: 2
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Form />
      </Provider>
  );

  expect(tree).toMatchSnapshot();
});
