import React from 'react';
import renderer from 'react-test-renderer';
import OffersFilled from './offers-filled.jsx';

const offers = [
  {
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    bedrooms: 3,
    adults: 4,
    price: 110,
    premium: false,
    rating: 4.51,
    bookmarked: true
  },
  {
    name: `Wood and stone place`,
    type: `Room`,
    images: [`img/apartment-01.jpg`, `img/room.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    bedrooms: 1,
    adults: 2,
    price: 120,
    premium: true,
    rating: 4.49,
    bookmarked: true
  },
  {
    name: `Canal View Prinsengracht`,
    type: `House`,
    images: [`img/apartment-02.jpg`, `img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    bedrooms: 3,
    adults: 3,
    price: 240,
    premium: false,
    rating: 2.11,
    bookmarked: false
  },
  {
    name: `Nice, cozy, warm big bed apartment`,
    type: `Hotel`,
    images: [`img/apartment-03.jpg`, `img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    bedrooms: 1,
    adults: 2,
    price: 50,
    premium: true,
    rating: 3.2,
    bookmarked: false
  }];


it(`<OffersFilled /> should render offers`, () => {
  const tree = renderer.create(<OffersFilled offers={offers} />).toJSON();

  expect(tree).toMatchSnapshot();
});
