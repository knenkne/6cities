import React from 'react';
import renderer from 'react-test-renderer';

import Offer from './offer.jsx';


const offer = {
  name: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  bedrooms: 3,
  adults: 4,
  price: 110,
  premium: false,
  rating: 4.51,
  bookmarked: true
};

it(`<Offer /> should render "Beautiful & luxurious apartment at great location"`, () => {
  const tree = renderer.create(<Offer {...offer} />).toJSON();

  expect(tree).toMatchSnapshot();
});
