import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {ActionCreator, getOffers} from './actions/actions.js';
import createAPI from '../api/api.js';
import reducer from './reducers/reducer.js';


const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(`401`));
};
const api = createAPI(onUnauthorized);

export const store = createStore(reducer, compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

store.dispatch(getOffers());
