import * as React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';

import reducer from '../../store/reducer/offers/offers';
import {ActionCreator} from '../../store/reducer/offers/actions';
import {OperationStatus} from '../../common/const';
import {Offer} from '../../common/interfaces';
import {sort} from '../../common/types';
import {Card} from './offer';


const mockStore = configureStore([]);

const sorting: sort = `id`;
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

it(`<Card /> should toggle favorite`, () => {
  // handleMouseEnter & handleMouseEnter тестируются в HOC
  let state = {
    sorting,
    data: [offer],
    current: 1,
    nearby: [],
    comments: [],
    favorites: []
  };

  const store = mockStore(state);
  const handleClick = () => {
    offer.isFavorite = !offer.isFavorite;
    store.dispatch(ActionCreator.setOffers([offer]));
  };

  const tree = shallow(
      <Card
        mini
        {...offer}
        onClick={handleClick}
        handleMouseEnter={jest.fn()}
        handleMouseLeave={jest.fn()}
        status={OperationStatus.EMPTY}
      />
  );

  tree.find(`button`).simulate(`click`);

  let actions = store.getActions();
  let expectedActions = [{type: `SET_OFFERS`, payload: [offer]}];
  expect(actions).toEqual(expectedActions);

  actions.forEach((action) => {
    state = reducer(state, action);
  });
  expect(state.data[0].isFavorite).toBe(true);


  store.clearActions();


  tree.find(`button`).simulate(`click`);

  actions = store.getActions();
  expectedActions = [{type: `SET_OFFERS`, payload: [offer]}];
  expect(actions).toEqual(expectedActions);

  actions.forEach((action) => {
    state = reducer(state, action);
  });
  expect(state.data[0].isFavorite).toBe(false);
});

