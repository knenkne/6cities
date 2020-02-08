import React from 'react';
import renderer from 'react-test-renderer';
import Offer from './offer.jsx';

const offer = {
  name: `Russia, Saratov`
};


it(`<Offer /> should render "Russia, Saratov"`, () => {
  const tree = renderer.create(<Offer name={offer.name} />).toJSON();

  expect(tree).toMatchSnapshot();
});
