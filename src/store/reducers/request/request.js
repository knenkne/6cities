import extend from '../../../utils/extend/extend.js';
import * as types from '../../action-types.js';


const initialState = {
  type: ``,
  status: ``,
  id: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_REQUEST: {
      const {type, status, id} = action.payload;
      return extend(state, {type, status, id});
    }

    default: {
      return state;
    }
  }
};
