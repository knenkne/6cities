import extend from '../../../utils/extend/extend.js';
import * as types from '../../action-types.js';


const initialState = {
  current: `Paris`,
  data: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]
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
