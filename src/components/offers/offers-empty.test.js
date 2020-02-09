import React from 'react';
import renderer from 'react-test-renderer';
import OffersEmpty from './offers-empty.jsx';

const city = `Sochi`;

it(`<OffersEmpty /> should render message that nothing was found in city`, () => {
  const tree = renderer.create(<OffersEmpty city={city} />).toJSON();

  expect(tree).toMatchSnapshot();
});
