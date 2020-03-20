import * as React from 'react';
import thunk from 'redux-thunk';
import {shallow} from 'enzyme';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';

import createAPI from '../../api/api';
import reducer from '../../store/reducer/reducer';
import {ActionCreator as CitiesActionCreator} from '../../store/reducer/cities/actions';
import {ActionCreator as OffersActionCreator, getNearby, getComments} from '../../store/reducer/offers/actions';
import {OperationStatus, APIRoute, APIStatus} from '../../common/const';
import {sort, city} from '../../common/types';
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
const id = parseInt(match.params.id, 10);
const cities: city[] = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
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


describe(`<Room />`, () => {
  mockAxios.onGet(APIRoute.getNearbyOffers(id)).reply(APIStatus.SUCCESS, nearby);
  mockAxios.onGet(APIRoute.getComments(id)).reply(APIStatus.SUCCESS, comments);

  const handleCity = () => store.dispatch(CitiesActionCreator.setCity(`Amsterdam`));
  const handleOffer = () => store.dispatch(OffersActionCreator.setOffer(id));
  const handleComments = () => getComments(id)(store.dispatch, store.getState, api);
  const handleNearby = () => getNearby(id)(store.dispatch, store.getState, api);

  let state = {
    user: {
      isAuthorized: true,
      email: `jztenk@gmail.com`
    },
    cities: {
      data: cities,
      current: null
    },
    offers: {
      sorting,
      data: [offer, ...nearby],
      nearby: [],
      current: null,
      comments: [],
      favorites: []
    },
    request: {
      type: ``,
      status: ``,
      id: null
    }
  };

  const store = mockStore(state);
  const tree = shallow(
      <Room
        setFavorite={jest.fn()}
        setCity={handleCity}
        setOffer={handleOffer}
        getComments={handleComments}
        getNearby={handleNearby}
        city={null}
        match={match}
        status={OperationStatus.EMPTY}
        offers={store.getState().offers.data}
        offer={null}
      />
  );

  afterEach(store.clearActions);

  it(`Should init`, () => {
    expect(tree.exists(`.page`)).toBe(false);

    const actions = store.getActions();
    const expectedActions = [{type: `SET_OFFER`, payload: id}, {type: `SET_COMMENTS`, payload: comments}, {type: `SET_NEARBY`, payload: nearby}];
    expect(actions).toEqual(expectedActions);

    actions.forEach((action) => {
      state = reducer(state, action);
    });
    expect(state.offers.current).toBe(id);
    expect(state.offers.nearby).toEqual(nearby);
    expect(state.offers.comments).toEqual(comments);
  });

  it(`Should update`, () => {
    tree.setProps({offer});
    expect(tree.exists(`.page`)).toBe(true);

    const actions = store.getActions();
    const expectedActions = [{type: `SET_CITY`, payload: `Amsterdam`}];
    expect(actions).toEqual(expectedActions);

    actions.forEach((action) => {
      state = reducer(state, action);
    });
    expect(state.cities.current).toBe(`Amsterdam`);
  });
});
