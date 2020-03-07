import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {ActionCreator, getHotels} from './actions/actions.js';
import createAPI from '../api/api.js';
import reducer from './reducers/reducer.js';


const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(`401`));
};
const api = createAPI(onUnauthorized);


const initialState = {
  user: `jztenk@gmail.com`,
  currentCity: `Paris`,
  currentOffer: null,
  currentSorting: `id`,
  cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  offers: [],
  comments: []
};


export const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

store.dispatch(getHotels());
