import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {getAuth, getOffers, getFavorites} from './actions/actions.js';
import createAPI from '../api/api.js';
import reducer from './reducers/reducer.js';


const api = createAPI();

export const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
));

store.dispatch(getAuth());
store.dispatch(getOffers());
store.dispatch(getFavorites());

