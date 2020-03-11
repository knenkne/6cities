import extend from '../../../utils/extend/extend.js';
import * as types from '../../action-types.js';

const initialState = {
  isAuthorized: false,
  commentStatus: ``,
  bookmarkStatus: ``
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH: {
      const {email, name, isPro, avatarUrl, id} = action.payload;

      return extend(state, {
        isAuthorized: true,
        email,
        name,
        avatarUrl,
        isPro,
        id
      });
    }

    case types.SET_OPERATION_STATUS: {
      const {name, status} = action.payload;
      return extend(state, {[name]: status});
    }

    default: {
      return state;
    }
  }
};
