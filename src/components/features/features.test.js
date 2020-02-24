import React from 'react';
import renderer from 'react-test-renderer';
import Features from './features.jsx';

import {offers} from '../../mocks/offers.js';


it(`<Features /> should render`, () => {
  const tree = renderer.create(<Features features={offers[0].features} />).toJSON();

  expect(tree).toMatchSnapshot();
});
