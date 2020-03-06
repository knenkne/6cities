import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';


import Offers from './offers.jsx';
import {offers} from '../../mocks/offers.js';

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Render <Offers />`, () => {
  it(`<Offers /> should render offer's container`, () => {
    const div = global.document.createElement(`div`);
    global.document.body.appendChild(div);

    const store = mockStore({
      cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
      currentCity: `Paris`,
      currentSorting: `id`,
      offers
    });

    const tree = mount(
        <Provider store={store}>
          <Router>
            <Offers />
          </Router>
        </Provider>, {attachTo: div});

    expect(tree).toMatchSnapshot();
  });

  it(`<Offers /> should render empty container`, () => {
    const store = mockStore({
      cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
      currentCity: `Paris`,
      currentSorting: `id`,
      offers: []
    });

    const tree = shallow(
        <Provider store={store}>
          <Offers />
        </Provider>);

    expect(tree).toMatchSnapshot();
  });
});
