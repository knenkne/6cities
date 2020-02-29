import * as types from '../action-types.js';
import {comments} from '../../mocks/comments.js';

export const ActionCreator = {
  initCities: (offers) => ({
    type: types.INIT_CITIES,
    payload: [...new Set(offers.map((offer) => offer.city.name))]
  }),
  setCity: (name) => ({
    type: types.SET_CITY,
    payload: name,
  }),
  initOffer: (offers, id) => ({
    type: types.INIT_OFFER,
    payload: offers.find((offer) => offer.id === id)
  }),
  getComments: (id) => ({
    type: types.GET_COMMENTS,
    payload: comments[id] || []
  })
};
