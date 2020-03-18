import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {Review} from '../../common/interfaces';
import Reviews from './reviews';


const mockStore = configureStore([]);

const comments: Review[] = [
  {
    id: 1,
    user: {
      id: 4,
      isPro: false,
      name: `Max`,
      avatarUrl: `/img/avatar-max.jpg`
    },
    rating: 4,
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`
  }
];

it(`<Reviews /> should render`, () => {
  const store = mockStore({
    user: {
      isAuthorized: false,
    },
    offers: {
      comments
    },
    request: {
      type: ``,
      status: ``,
      id: null
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Reviews />
      </Provider>
  );

  expect(tree).toMatchSnapshot();
});

it(`<Reviews /> should render with form`, () => {
  const store = mockStore({
    user: {
      isAuthorized: true,
      name: `jztenk@gmail.com`
    },
    offers: {
      comments
    },
    request: {
      type: ``,
      status: ``,
      id: null
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Reviews reviews={comments} />
      </Provider>
  );

  expect(tree).toMatchSnapshot();
});
