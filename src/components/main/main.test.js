import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

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
  it(`<Main /> should render offer's container`, () => {
    const tree = renderer.create(<Main cities={cities} offers={offers} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`<Main /> should render empty container`, () => {
    const tree = renderer.create(<Main cities={cities} offers={[]} city={city} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
