import reducer from './offers.js';
import {ActionCreator} from '../../actions/actions.js';

const comments = [{author: `Max`, message: `Booooring`}, {author: `Victoria`, message: `Amazing`}];
const offers = [
  {
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
    type: `apartment`,
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
  },
  {
    id: 2,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    previewImage: `img/apartment-02.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-03.jpg`],
    title: `Beautiful & luxurious studio at great location`,
    isFavorite: false,
    isPremium: false,
    rating: 2.8,
    type: `room`,
    bedrooms: 2,
    maxAdults: 4,
    price: 140,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      id: 3,
      isPro: true,
      name: `Angelina`,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    }
  }
];

it(`Reducer should set offers`, () => {
  expect(reducer({
    data: [],
  }, ActionCreator.setOffers(offers))).toEqual({
    data: offers
  });
});

it(`Reducer should set nearby offers`, () => {
  expect(reducer({
    nearby: [],
  }, ActionCreator.setNearby(offers))).toEqual({
    nearby: offers
  });
});

it(`Reducer should set favorite offers`, () => {
  expect(reducer({
    favorites: [],
  }, ActionCreator.setFavorites(offers))).toEqual({
    favorites: offers
  });
});

it(`Reducer should set offer`, () => {
  expect(reducer({
    current: null,
  }, ActionCreator.setOffer(1))).toEqual({
    current: 1
  });
});

it(`Reducer should set comments`, () => {
  expect(reducer({
    comments: [],
  }, ActionCreator.setComments(comments))).toEqual({
    comments
  });
});

it(`Reducer should set sorting`, () => {
  expect(reducer({
    sorting: `id`,
  }, ActionCreator.setSorting(`toHigh`))).toEqual({
    sorting: `toHigh`
  });
});
