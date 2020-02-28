import {extend} from '../utils.js';
import * as actions from '../action-types.js';

export default (state, action) => {
  switch (action.type) {
    case actions.SET_CITY: {
      return extend(state, {currentCity: action.payload});
    }

    case actions.INIT_OFFER: {
      return extend(state, {currentOffer: action.payload});
    }

    default: {
      return state;
    }
  }
};
