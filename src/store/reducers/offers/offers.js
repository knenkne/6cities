import extend from '../../../utils/extend/extend.js';
import * as types from '../../action-types.js';

const initialState = {
  sorting: `id`,
  current: null,
  data: [],
  nearby: [],
  comments: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_OFFER: {
      return extend(state, {current: action.payload});
    }

    case types.SET_COMMENTS: {
      return extend(state, {comments: action.payload});
    }

    case types.SET_SORTING: {
      return extend(state, {sorting: action.payload});
    }

    case types.SET_OFFERS: {
      return extend(state, {data: action.payload});
    }

    case types.SET_NEARBY_OFFERS: {
      return extend(state, {nearby: action.payload});
    }

    default: {
      return state;
    }
  }
};
