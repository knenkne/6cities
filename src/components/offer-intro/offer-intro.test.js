import React from 'react';
import renderer from 'react-test-renderer';
import Intro from './offer-intro.jsx';

const offer = {
  name: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  bedrooms: 3,
  adults: 4,
  price: 1337,
  premium: false,
  rating: 4.51,
  bookmarked: false
};

describe(`Render <Intro />`, () => {
  it(`<Intro /> should render`, () => {
    const tree = renderer.create(<Intro {...offer} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`<Intro /> should render with premium and book marks`, () => {
    const tree = renderer.create(<Intro {...offer} premium={true} bookmarked={true} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
