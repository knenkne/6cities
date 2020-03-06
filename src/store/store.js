import {createStore} from 'redux';

import {offers} from '../mocks/offers.js';
import reducer from './reducers/reducer.js';


const initialState = {
  user: `jztenk@gmail.com`,
  currentCity: `Paris`,
  currentOffer: null,
  currentSorting: `id`,
  cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  offers,
  comments: []
};

export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
