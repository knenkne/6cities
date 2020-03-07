import extend from '../../utils/extend/extend.js';
import * as types from '../action-types.js';

export default (state, action) => {
  switch (action.type) {
    case types.SET_CITY: {
      return extend(state, {currentCity: action.payload});
    }

    case types.SET_OFFER: {
      return extend(state, {currentOffer: action.payload});
    }

    case types.SET_COMMENTS: {
      return extend(state, {comments: action.payload});
    }

    case types.SET_SORTING: {
      return extend(state, {currentSorting: action.payload});
    }

    case types.SET_HOTELS: {
      return extend(state, {offers: action.payload});
    }

    default: {
      return state;
    }
  }
};
