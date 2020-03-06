import extend from '../../utils/extend/extend.js';
import * as actions from '../action-types.js';

export default (state, action) => {
  switch (action.type) {
    case actions.SET_CITY: {
      return extend(state, {currentCity: action.payload});
    }

    case actions.INIT_OFFER: {
      return extend(state, {currentOffer: action.payload});
    }

    case actions.GET_COMMENTS: {
      return extend(state, {comments: action.payload});
    }

    case actions.SET_SORTING: {
      return extend(state, {currentSorting: action.payload});
    }

    default: {
      return state;
    }
  }
};
