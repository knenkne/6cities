import React from 'react';
import renderer from 'react-test-renderer';
import Offers from './offers.jsx';

const city = `Samara`;
const cities = [`Samara`, `Moscow`, `Palo Alto`];

const offers = [
  {
    name: `Samara`},
  {
    name: `Winterfell`
  },
  {
    name: `Big bed apartment`
  }];

describe(`Render <Main />`, () => {
  it(`<Offers /> should render offer's container`, () => {
    const tree = renderer.create(<Offers cities={cities} offers={offers} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`<Offers /> should render empty container`, () => {
    const tree = renderer.create(<Offers cities={cities} offers={[]} city={city} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
