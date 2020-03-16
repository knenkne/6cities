import {combineReducers} from 'redux';
import user from './user/user.js';
import request from './request/request.js';
import cities from './cities/cities';
import offers from './offers/offers.js';

export default combineReducers({
  user,
  request,
  cities,
  offers
});
