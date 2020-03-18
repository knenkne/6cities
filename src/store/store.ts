import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import createAPI from '../api/api';
import reducer from './reducer/reducer';
import {getAuth} from './reducer/user/actions';
import {getOffers, getFavorites} from './reducer/offers/actions';


const api = createAPI();

export const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
));

store.dispatch(getAuth());
store.dispatch(getOffers());
store.dispatch(getFavorites());

