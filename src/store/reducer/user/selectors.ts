import {id} from '../../../common/types';

interface State {
  user: {
    isAuthorized: boolean;
    id: id;
    name: string;
    avatarUrl: string;
    isPro: boolean;
    email: string;
  };
}

export const getAuthorizationStatus = (state: State) => {
  return state.user.isAuthorized;
};

export const getUsername = (state: State) => {
  return state.user.email;
};
