import React from 'react';
import renderer from 'react-test-renderer';
import Host from './host.jsx';

import {offers} from '../../mocks/offers.js';


it(`<Host /> should render`, () => {
  const tree = renderer.create(<Host host={offers[0].host} />).toJSON();

  expect(tree).toMatchSnapshot();
});
