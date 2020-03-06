import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import OffersFilled from './offers-filled.jsx';
import {offers} from '../../mocks/offers.js';

Enzyme.configure({
  adapter: new Adapter()
});

const mockStore = configureStore([]);

it(`<OffersFilled /> should render offers`, () => {
  const div = global.document.createElement(`div`);
  global.document.body.appendChild(div);

  const store = mockStore({
    currentSorting: `id`,
    offers
  });

  const tree = mount(
      <Provider store={store}>
        <Router>
          <OffersFilled offers={offers} />
        </Router>
      </Provider>, {attachTo: div});

  expect(tree.getDOMNode()).toMatchSnapshot();
});
