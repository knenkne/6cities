import * as types from '../action-types.js';
import Adapter from '../../adapter.js';
import history from '../../history.js';

import {OperationStatus, APIRoute, AppRoute, Error} from '../../const.js';

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
  setOperationStatus: (name, status) =>
    ({
      type: types.SET_OPERATION_STATUS,
      payload: {
        name,
        status
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
  dispatch(ActionCreator.setOperationStatus(`commentStatus`, OperationStatus.PENDING));
  return api.post(APIRoute.getComments(id),
      {
        comment,
        rating,
      })
      .then((res) => {
        dispatch(ActionCreator.setComments(res.data));
        dispatch(ActionCreator.setOperationStatus(`commentStatus`, OperationStatus.SUCCESS));
      })
      .catch(() => {
        dispatch(ActionCreator.setOperationStatus(`commentStatus`, OperationStatus.FAILED));
      });
};

export const setBookmark = (id, status) => (dispatch, getState, api) => {
  dispatch(ActionCreator.setOperationStatus(`bookmarkStatus`, OperationStatus.PENDING));
  return api.post(`/favorite/${id}/${status}`)
  .then((res) => {
    // data swap
    const data = res.data;
    const offers = getState().offers.data;
    const index = offers.findIndex((offer) => offer.id === data.id);
    offers[index] = data;

    dispatch(ActionCreator.setOffers(offers));
    dispatch(getFavorites());
    dispatch(ActionCreator.setOperationStatus(`bookmarkStatus`, OperationStatus.SUCCESS));
  })
  .catch((err) => {
    if (err.response && err.response.status === Error.UNAUTHORIZED) {
      history.push(AppRoute.LOGIN);
    } else {
      dispatch(ActionCreator.setOperationStatus(`bookmarkStatus`, OperationStatus.FAILED));
    }
  });
};
