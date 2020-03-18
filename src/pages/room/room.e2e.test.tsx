import * as React from 'react';
import thunk from 'redux-thunk';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';

import createAPI from '../../api/api';
import reducer from '../../store/reducer/offers/offers';
// import {ActionCreator as CitiesActionCreator} from '../../store/reducer/cities/actions';
import {ActionCreator as OffersActionCreator, getNearby} from '../../store/reducer/offers/actions';
import {OperationStatus, APIRoute} from '../../common/const';
import {sort} from '../../common/types';
import {Offer, Review} from '../../common/interfaces';
import {Room} from './room';


const api = createAPI();
const mockAxios = new MockAdapter(api);
const mockStore = configureStore([thunk]);

const match = {
  params: {
    id: `1`
  }
};
const sorting: sort = `id`;
// const currentCity: city = `Amsterdam`;
const id = parseInt(match.params.id, 10);

const offer: Offer = {
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
};

const nearby: Offer[] = [
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
  },
  {
    id: 3,
    city: {
      name: `Paris`,
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
    rating: 4.8,
    type: `room`,
    bedrooms: 2,
    maxAdults: 4,
    price: 120,
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

const comments: Review[] = [
  {
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
  }
];

// TODO: Status codes
mockAxios.onGet(APIRoute.getNearbyOffers(id)).reply(200, nearby);

describe(`<Room />`, () => {
  let state = {
    sorting,
    data: [offer, ...nearby],
    current: null,
    nearby: [],
    comments: [],
    favorites: []
  };

  const store = mockStore(state);

  const offerHandler = () => store.dispatch(OffersActionCreator.setOffer(id));
  const nearbyHandler = () => getNearby(id)(store.dispatch, store.getState, api);

  const tree = mount(
      <Room
        setOffer={offerHandler}
        setCity={jest.fn()}
        getComments={jest.fn()}
        getNearby={nearbyHandler}
        setFavorite={jest.fn()}
        city={null}
        match={match}
        status={OperationStatus.EMPTY}
        offers={state.data}
        offer={null}
      />
  );

  it(`Should init`, () => {
    const actions = store.getActions();
    const expectedActions = [{type: `SET_OFFER`, payload: id}, {type: `SET_NEARBY`, payload: nearby}];
    expect(actions).toEqual(expectedActions);

    actions.forEach((action) => {
      state = reducer(state, action);
    });
    expect(state.current).toBe(id);
    expect(state.nearby).toEqual(nearby);

  });
});

// it(`<Room /> should toggle favorite`, () => {

//   tree.find(`button`).simulate(`click`);

//   let actions = store.getActions();
//   let expectedActions = [{type: `SET_OFFERS`, payload: [offer]}];
//   expect(actions).toEqual(expectedActions);

//   actions.forEach((action) => {
//     state = reducer(state, action);
//   });
//   expect(state.data[0].isFavorite).toBe(true);


//   store.clearActions();


//   tree.find(`button`).simulate(`click`);

//   actions = store.getActions();
//   expectedActions = [{type: `SET_OFFERS`, payload: [offer]}];
//   expect(actions).toEqual(expectedActions);

//   actions.forEach((action) => {
//     state = reducer(state, action);
//   });
//   expect(state.data[0].isFavorite).toBe(false);
// });

