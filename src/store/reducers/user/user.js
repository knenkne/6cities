import extend from '../../../utils/extend/extend.js';
import * as types from '../../action-types.js';

const initialState = {
  isAuthorized: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH: {
      const {email, name, isPro, id} = action.payload;

      return extend(state, {
        isAuthorized: true,
        email,
        name,
        avatarUrl: `img/avatar-me.jpeg`,
        isPro,
        id
      });
    }

    default: {
      return state;
    }
  }
};
