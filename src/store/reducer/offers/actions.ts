import Types from './types';
import Adapter from '../../../adapter';
import history from '../../../history';
import {sort} from '../../../common/types';
import {ActionCreator as RequestActionCreator} from '../request/actions';
import {APIRoute, AppRoute, APIStatus, OperationStatus} from '../../../common/const';


export const ActionCreator = {
  setOffer: (id: number) =>
    ({
      type: Types.SET_OFFER,
      payload: id
    }),
  setOffers: (data: {}[]) =>
    ({
      type: Types.SET_OFFERS,
      payload: Adapter.parse(data)
    }),
  setFavorites: (data: {}[]) =>
    ({
      type: Types.SET_FAVORITES,
      payload: Adapter.parse(data)
    }),
  setNearby: (data: {}[]) =>
    ({
      type: Types.SET_NEARBY,
      payload: Adapter.parse(data)
    }),
  setComments: (data: {}[]) =>
    ({
      type: Types.SET_COMMENTS,
      payload: Adapter.parse(data)
    }),
  setSorting: (name: sort) =>
    ({
      type: Types.SET_SORTING,
      payload: name
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

export const getNearby = (id) => (dispatch, getState, api) => {
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

export const setFavorite = (id, status) => (dispatch, getState, api) => {
  dispatch(RequestActionCreator.setRequest({type: `favorite`, status: OperationStatus.PENDING, id}));
  return api.post(`/favorite/${id}/${status}`)
    .then((res) => {
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
      dispatch(RequestActionCreator.setRequest({type: `favorite`, status: OperationStatus.SUCCESS, id}));
    })
    .catch((err) => {
      if (err.response && err.response.status === APIStatus.UNAUTHORIZED) {
        history.push(AppRoute.LOGIN);
      } else {
        dispatch(RequestActionCreator.setRequest({type: `favorite`, status: OperationStatus.FAILED, id}));
      }
    });
};

export const setComment = ({comment, rating, id}) => (dispatch, getState, api) => {
  dispatch(RequestActionCreator.setRequest({type: `comment`, status: OperationStatus.PENDING, id}));
  return api.post(APIRoute.getComments(id),
      {
        comment,
        rating,
      })
      .then((res) => {
        dispatch(ActionCreator.setComments(res.data));
        dispatch(RequestActionCreator.setRequest({type: `comment`, status: OperationStatus.SUCCESS, id}));
      })
      .catch(() => {
        dispatch(RequestActionCreator.setRequest({type: `comment`, status: OperationStatus.FAILED, id}));
      });
};
