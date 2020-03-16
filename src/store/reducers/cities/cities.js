import extend from '../../../utils/extend/extend.js';
import * as types from '../../action-types.js';

import {cities} from '../../../const';


const initialState = {
  current: cities[0],
  data: cities
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CITY: {
      return extend(state, {current: action.payload});
    }

    default: {
      return state;
    }
  }
};
