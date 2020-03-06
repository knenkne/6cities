import * as types from '../action-types.js';
import {comments} from '../../mocks/comments.js';

export const ActionCreator = {
  setCity: (name) =>
    ({
      type: types.SET_CITY,
      payload: name,
    }),
  initOffer: (offers, id) =>
    ({
      type: types.INIT_OFFER,
      payload: offers.find((offer) => offer.id === id)
    }),
  getComments: (id) =>
    ({
      type: types.GET_COMMENTS,
      payload: comments[id] || []
    }),
  setSorting: (name) => ({
    type: types.SET_SORTING,
    payload: name
  })
};
