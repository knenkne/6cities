import Types from './types';
import Adapter from '../../../adapter';
import {APIRoute} from '../../../common/const';

export const ActionCreator = {
  setAuth: (data: {}) => ({
    type: Types.SET_AUTH,
    payload: Adapter.parseItem(data)
  })
};

export const setAuth = ({email, password}) => (dispatch, getState, api) => {
  return api.post(APIRoute.LOGIN,
      {
        email,
        password,
      })
      .then((res) => {
        dispatch(ActionCreator.setAuth(res.data));
      });
};

export const getAuth = () => (dispatch, getState, api) => {
  return api.get(APIRoute.LOGIN)
      .then((res) => {
        dispatch(ActionCreator.setAuth(res.data));
      })
      .catch((err) => err);
};
