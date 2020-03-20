import Types from './types';
import {User} from '../../../common/interfaces';
import Adapter from '../../../adapter';
import extend from '../../../utils/extend/extend';


interface State extends User {
  isAuthorized: boolean;
}

interface Action {
  type: Types;
  payload: Adapter;
}

const initialState: State = {
  isAuthorized: false,
  id: null,
  name: ``,
  avatarUrl: ``,
  isPro: undefined,
  email: ``
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case Types.SET_AUTH: {
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

    default: {
      return state;
    }
  }
};
