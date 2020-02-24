import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Map from './map.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

import {offers} from '../../mocks/offers.js';


it(`<Map /> should render`, () => {
  const div = global.document.createElement(`div`);
  global.document.body.appendChild(div);
  const tree = mount(<Map offers={offers} />, {attachTo: div});
  expect(tree.getDOMNode()).toMatchSnapshot();
});
