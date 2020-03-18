import {combineReducers} from 'redux';
import user from './user/user';
import request from './request/request';
import cities from './cities/cities';
import offers from './offers/offers';

export default combineReducers({
  user,
  request,
  cities,
  offers
});
