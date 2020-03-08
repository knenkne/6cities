import * as types from '../action-types.js';
import Adapter from '../../adapter.js';

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
  setSorting: (name) => ({
    type: types.SET_SORTING,
    payload: name
  }),
  setOffers: (data) => ({
    type: types.SET_OFFERS,
    payload: Adapter.parse(data)
  }),
  setNearbyOffers: (data) => ({
    type: types.SET_NEARBY_OFFERS,
    payload: Adapter.parse(data)
  }),
  setAuth: (data) => ({
    type: types.SET_AUTH,
    payload: Adapter.parseItem(data)
  })
};

export const getOffers = () => (dispatch, getState, api) => {
  return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.setOffers(response.data));
      });
};

export const getNearbyOffers = (id) => (dispatch, getState, api) => {
  return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        dispatch(ActionCreator.setNearbyOffers(response.data));
      });
};

export const getComments = (id) => (dispatch, getState, api) => {
  return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.setComments(response.data));
      });
};

export const getAuth = () => (dispatch, getState, api) => {
  return api.get(`/login`)
      .then((res) => {
        dispatch(ActionCreator.setAuth(res.data));
      })
      .catch((err) => err);
};

export const setAuth = (authData) => (dispatch, getState, api) => {
  return api.post(`/login`,
      {
        email: authData.email,
        password: authData.password,
      })
      .then((res) => {
        dispatch(ActionCreator.setAuth(res.data));
      });
};
