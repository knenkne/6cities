import React from 'react';
import renderer from 'react-test-renderer';
import OffersFilled from './offers-filled.jsx';

const offers = [
  {
    name: `Samara`},
  {
    name: `Winterfell`
  },
  {
    name: `Big bed apartment`
  }];

it(`<OffersFilled /> should render offers`, () => {
  const tree = renderer.create(<OffersFilled offers={offers} />).toJSON();

  expect(tree).toMatchSnapshot();
});
