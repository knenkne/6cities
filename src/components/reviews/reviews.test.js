import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from './reviews.jsx';

import {offers} from '../../mocks/offers.js';

it(`<Reviews /> should render`, () => {
  const tree = renderer.create(<Reviews reviews={offers[1].reviews} />).toJSON();

  expect(tree).toMatchSnapshot();
});
