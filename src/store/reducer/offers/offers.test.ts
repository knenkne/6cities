import reducer from './offers';
import {ActionCreator} from './actions';


const comments: {}[] = [{
  id: 1,
  user: {
    id: 4,
    isPro: false,
    name: `Max`,
    avatarUrl: `/img/avatar-max.jpg`
  },
  rating: 4,
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`
}];

const offers: {}[] = [
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

it(`Reducer should set sorting`, () => {
  expect(reducer({
    sorting: `id`,
    current: null,
    data: [],
    nearby: [],
    comments: [],
    favorites: [],
  }, ActionCreator.setSorting(`toHigh`))).toEqual({
    sorting: `toHigh`,
    current: null,
    data: [],
    nearby: [],
    comments: [],
    favorites: []
  });
});

it(`Reducer should set offer`, () => {
  expect(reducer({
    sorting: `id`,
    current: null,
    data: [],
    nearby: [],
    comments: [],
    favorites: []
  }, ActionCreator.setOffer(1))).toEqual({
    sorting: `id`,
    current: 1,
    data: [],
    nearby: [],
    comments: [],
    favorites: []
  });
});

it(`Reducer should set offers`, () => {
  expect(reducer({
    sorting: `id`,
    current: null,
    data: [],
    nearby: [],
    comments: [],
    favorites: []
  }, ActionCreator.setOffers(offers))).toEqual({
    sorting: `id`,
    current: null,
    data: offers,
    nearby: [],
    comments: [],
    favorites: []
  });
});

it(`Reducer should set nearby offers`, () => {
  expect(reducer({
    sorting: `id`,
    current: null,
    data: [],
    nearby: [],
    comments: [],
    favorites: []
  }, ActionCreator.setNearby(offers))).toEqual({
    sorting: `id`,
    current: null,
    data: [],
    nearby: offers,
    comments: [],
    favorites: []
  });
});

it(`Reducer should set favorite offers`, () => {
  expect(reducer({
    sorting: `id`,
    current: null,
    data: [],
    nearby: [],
    comments: [],
    favorites: [],
  }, ActionCreator.setFavorites(offers))).toEqual({
    sorting: `id`,
    current: null,
    data: [],
    nearby: [],
    comments: [],
    favorites: offers
  });
});

it(`Reducer should set comments`, () => {
  expect(reducer({
    sorting: `id`,
    current: null,
    data: [],
    nearby: [],
    comments: [],
    favorites: [],
  }, ActionCreator.setComments(comments))).toEqual({
    sorting: `id`,
    current: null,
    data: [],
    nearby: [],
    comments,
    favorites: []
  });
});

