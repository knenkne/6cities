import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter as Router} from 'react-router-dom';

import OffersFilled from './offers-filled.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

import {offers} from '../../mocks/offers.js';

it(`<OffersFilled /> should render offers`, () => {
  const div = global.document.createElement(`div`);
  global.document.body.appendChild(div);
  const tree = mount(
      <Router>
        <OffersFilled offers={offers} />
      </Router>, {attachTo: div});

  expect(tree.getDOMNode()).toMatchSnapshot();
});
