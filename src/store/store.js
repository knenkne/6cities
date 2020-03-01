import {createStore} from 'redux';

import {offers} from '../mocks/offers.js';
import reducer from './reducers/reducer.js';


const initialState = {
  user: `jztenk@gmail.com`,
  currentCity: `Amsterdam`,
  currentOffer: null,
  cities: [],
  offers,
  currentOffers: offers,
  nearbyOffers: [],
  comments: []
};

export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
