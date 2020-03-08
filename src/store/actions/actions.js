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
  requireAuthorization: (status) => ({
    type: types.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  setOffers: (data) => ({
    type: types.SET_OFFERS,
    payload: Adapter.parse(data)
  }),
  setNearbyOffers: (data) => ({
    type: types.SET_NEARBY_OFFERS,
    payload: Adapter.parse(data)
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
