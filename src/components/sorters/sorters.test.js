import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import Sorters from './sorters.jsx';


const mockStore = configureStore([]);


it(`<Sorters /> should have been rendered with Popular`, () => {
  const store = mockStore({
    currentSorting: `id`
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Sorters />
      </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
