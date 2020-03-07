import * as types from '../action-types.js';
import HotelAdapter from '../../adapters/hotel-adapter.js';

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
      payload: HotelAdapter.parseHotels(data)
    }),
  setSorting: (name) => ({
    type: types.SET_SORTING,
    payload: name
  }),
  requireAuthorization: (status) => ({
    type: types.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  setHotels: (data) => ({
    type: types.SET_HOTELS,
    payload: HotelAdapter.parseHotels(data)
  })
};

export const getHotels = () => (dispatch, getState, api) => {
  return api.get(`/hotels`)
          .then((response) => {
            dispatch(ActionCreator.setHotels(response.data));
          });
};

export const getComments = (id) => (dispatch, getState, api) => {
  return api.get(`/comments/${id}`)
          .then((response) => {
            dispatch(ActionCreator.setComments(response.data));
          });
};
