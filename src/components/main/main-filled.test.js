import React from 'react';
import renderer from 'react-test-renderer';
import MainFilled from './main-filled.jsx';

const offers = [
  {
    name: `Samara`},
  {
    name: `Winterfell`
  },
  {
    name: `Big bed apartment`
  }];

it(`<MainFilled /> should render offers`, () => {
  const tree = renderer.create(<MainFilled offers={offers} />).toJSON();

  expect(tree).toMatchSnapshot();
});
