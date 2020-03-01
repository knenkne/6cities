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
  }),
  sortOffers: (offers, type) => {
    const sortMap = {
      rating(a, b) {
        return b.rating - a.rating;
      },
      id(a, b) {
        return a.id - b.id;
      },
      toLow(a, b) {
        return b.price - a.price;
      },
      toHigh(a, b) {
        return a.price - b.price;
      }
    };

    return {
      type: types.SORT_OFFERS,
      payload: [...offers].sort(sortMap[type])
    };
  }
};
