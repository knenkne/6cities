import * as types from '../action-types.js';

export const ActionCreator = {
  setCity: (name) => ({
    type: types.SET_CITY,
    payload: name,
  }),
  initOffer: (offers, id) => ({
    type: types.INIT_OFFER,
    payload: offers.find((offer) => offer.id === id)
  })
};
