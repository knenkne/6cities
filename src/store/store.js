import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {getAuth, getOffers} from './actions/actions.js';
import createAPI from '../api/api.js';
import reducer from './reducers/reducer.js';


const onUnauthorized = () => {
  // store.dispatch(ActionCreator.requireAuthorization(`401`));
};

const api = createAPI(onUnauthorized);

export const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
));

store.dispatch(getAuth());
store.dispatch(getOffers());

