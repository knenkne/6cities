import * as types from '../action-types.js';
import Adapter from '../../adapter';
import history from '../../history';

import {OperationStatus, APIRoute, AppRoute, Error} from '../../const';

export const ActionCreator = {
  setCity: (name) =>
    ({
      type: types.SET_CITY,
      payload: name,
    }),
  setOffer: (id) =>
    ({
      type: types.SET_OFFER,
      payload: id
    }),
  setComments: (data) =>
    ({
      type: types.SET_COMMENTS,
      payload: Adapter.parse(data)
    }),
  setSorting: (name) =>
    ({
      type: types.SET_SORTING,
      payload: name
    }),
  setOffers: (data) =>
    ({
      type: types.SET_OFFERS,
      payload: Adapter.parse(data)
    }),
  setFavorites: (data) =>
    ({
      type: types.SET_FAVORITES,
      payload: Adapter.parse(data)
    }),
  setNearby: (data) =>
    ({
      type: types.SET_NEARBY_OFFERS,
      payload: Adapter.parse(data)
    }),
  setAuth: (data) => ({
    type: types.SET_AUTH,
    payload: Adapter.parseItem(data)
  }),
  setRequest: ({type, status, id}) =>
    ({
      type: types.SET_REQUEST,
      payload: {
        type,
        status,
        id
      }
    })
};

export const getOffers = () => (dispatch, getState, api) => {
  return api.get(APIRoute.HOTELS)
      .then((res) => {
        dispatch(ActionCreator.setOffers(res.data));
      });
};

export const getFavorites = () => (dispatch, getState, api) => {
  return api.get(APIRoute.FAVORITES)
      .then((res) => {
        dispatch(ActionCreator.setFavorites(res.data));
      })
      .catch((err) => err);
};

export const getNearbyOffers = (id) => (dispatch, getState, api) => {
  return api.get(APIRoute.getNearbyOffers(id))
      .then((res) => {
        dispatch(ActionCreator.setNearby(res.data));
      });
};

export const getComments = (id) => (dispatch, getState, api) => {
  return api.get(APIRoute.getComments(id))
      .then((res) => {
        dispatch(ActionCreator.setComments(res.data));
      });
};

export const getAuth = () => (dispatch, getState, api) => {
  return api.get(APIRoute.LOGIN)
      .then((res) => {
        dispatch(ActionCreator.setAuth(res.data));
      })
      .catch((err) => err);
};

export const setAuth = (authData) => (dispatch, getState, api) => {
  return api.post(APIRoute.LOGIN,
      {
        email: authData.email,
        password: authData.password,
      })
      .then((res) => {
        dispatch(ActionCreator.setAuth(res.data));
      });
};

export const setComment = ({comment, rating, id}) => (dispatch, getState, api) => {
  dispatch(ActionCreator.setRequest({type: `comment`, status: OperationStatus.PENDING}));
  return api.post(APIRoute.getComments(id),
      {
        comment,
        rating,
      })
      .then((res) => {
        dispatch(ActionCreator.setComments(res.data));
        dispatch(ActionCreator.setRequest({type: `comment`, status: OperationStatus.SUCCESS}));
      })
      .catch(() => {
        dispatch(ActionCreator.setRequest({type: `comment`, status: OperationStatus.FAILED}));
      });
};

export const setBookmark = (id, status) => (dispatch, getState, api) => {
  dispatch(ActionCreator.setRequest({type: `favorite`, status: OperationStatus.PENDING, id}));
  return api.post(`/favorite/${id}/${status}`)
  .then((res) => {
    // data swap
    const data = res.data;
    const offers = getState().offers.data;
    let index = offers.findIndex((offer) => offer.id === data.id);
    offers[index] = data;

    const nearby = getState().offers.nearby;
    index = nearby.findIndex((offer) => offer.id === data.id);
    nearby[index] = data;

    dispatch(ActionCreator.setOffers(offers));
    dispatch(ActionCreator.setNearby(nearby));
    dispatch(getFavorites());
    dispatch(ActionCreator.setRequest({type: `favorite`, status: OperationStatus.SUCCESS, id}));
  })
  .catch((err) => {
    if (err.response && err.response.status === Error.UNAUTHORIZED) {
      history.push(AppRoute.LOGIN);
    } else {
      dispatch(ActionCreator.setRequest({type: `favorite`, status: OperationStatus.FAILED, id}));
    }
  });
};
