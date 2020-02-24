import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter as Router} from 'react-router-dom';

import Offers from './offers.jsx';
import {offers} from '../../mocks/offers.js';

const city = `Samara`;
const cities = [`Samara`, `Moscow`, `Palo Alto`];

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Render <Offers />`, () => {
  it(`<Offers /> should render offer's container`, () => {
    const div = global.document.createElement(`div`);
    global.document.body.appendChild(div);
    const tree = mount(
        <Router>
          <Offers cities={cities} offers={offers} />
        </Router>, {attachTo: div});

    expect(tree).toMatchSnapshot();
  });

  it(`<Offers /> should render empty container`, () => {
    const tree = shallow(<Offers cities={cities} offers={[]} city={city} />);

    expect(tree).toMatchSnapshot();
  });
});
