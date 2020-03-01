import {extend} from '../utils.js';
import * as actions from '../action-types.js';

export default (state, action) => {
  switch (action.type) {
    case actions.INIT_CITIES: {
      return extend(state, {cities: action.payload});
    }

    case actions.SET_CITY: {
      return extend(state, {currentCity: action.payload});
    }

    case actions.INIT_OFFER: {
      return extend(state, {currentOffer: action.payload});
    }

    case actions.GET_COMMENTS: {
      return extend(state, {comments: action.payload});
    }

    case actions.SORT_OFFERS: {
      return extend(state, {currentOffers: action.payload});
    }

    default: {
      return state;
    }
  }
};
