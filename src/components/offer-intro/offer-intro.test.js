import React from 'react';
import renderer from 'react-test-renderer';
import Intro from './offer-intro.jsx';

const offer = {
  id: 1,
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  },
  previewImage: `img/apartment-01.jpg`,
  images: [`img/apartment-02.jpg`, `img/apartment-03.jpg`],
  title: `Beautiful & luxurious studio at great location`,
  isFavorite: false,
  isPremium: false,
  rating: 1.8,
  type: `Apartment`,
  bedrooms: 3,
  maxAdults: 4,
  price: 100,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  host: {
    id: 3,
    isPro: true,
    name: `Angelina`,
    avatarUrl: `img/avatar-angelina.jpg`
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  }
};

describe(`Render <Intro />`, () => {
  it(`<Intro /> should render`, () => {
    const tree = renderer.create(<Intro {...offer} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`<Intro /> should render with premium and book marks`, () => {
    const tree = renderer.create(<Intro {...offer} isPremium={true} isFavorite={true} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
