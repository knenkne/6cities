import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import Header from './header.jsx';


const mockStore = configureStore([]);


describe(`Render <Header />`, () => {
  it(`<Header /> should have been rendered with userName`, () => {
    const store = mockStore({
      user: `Max@gmail.com`
    });

    const tree = renderer.create(
        <Provider store={store}>
          <Header />
        </Provider>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`<Header /> should have been rendered with sign-in`, () => {
    const store = mockStore({
      user: null
    });

    const tree = renderer.create(
        <Provider store={store}>
          <Header />
        </Provider>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
