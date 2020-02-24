import React from 'react';
import renderer from 'react-test-renderer';
import List from './reviews-list.jsx';

import {offers} from '../../mocks/offers.js';


it(`<List /> should render`, () => {
  const tree = renderer.create(<List reviews={offers[1].reviews} />).toJSON();

  expect(tree).toMatchSnapshot();
});
