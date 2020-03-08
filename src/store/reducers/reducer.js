import {combineReducers} from 'redux';
import user from './user/user.js';
import cities from './cities/cities.js';
import offers from './offers/offers.js';

export default combineReducers({
  user,
  cities,
  offers
});
