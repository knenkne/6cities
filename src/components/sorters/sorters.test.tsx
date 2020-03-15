import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import Sorters from './sorters';


const mockStore = configureStore([]);

it(`<Sorters /> should have been rendered with Popular`, () => {
  const store = mockStore({
    offers: {
      sorting: `id`
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Sorters />
      </Provider>);

  expect(tree).toMatchSnapshot();
});
