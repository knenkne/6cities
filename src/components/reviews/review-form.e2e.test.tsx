import * as React from 'react';
import thunk from 'redux-thunk';
import {shallow} from 'enzyme';
import {combineReducers} from 'redux';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';

import createAPI from '../../api/api';
import extend from '../../utils/extend/extend';
import offers from '../../store/reducer/offers/offers';
import request from '../../store/reducer/request/request';
import {ActionCreator} from '../../store/reducer/request/actions';
import {setComment} from '../../store/reducer/offers/actions';
import {sort} from '../../common/types';
import {User} from '../../common/interfaces';
import {APIRoute, APIStatus, OperationStatus} from '../../common/const';
import {ReviewForm} from './review-form';


const api = createAPI();
const mockAxios = new MockAdapter(api);
const mockStore = configureStore([thunk]);
const reducer = combineReducers({
  offers,
  request
});

const sorting: sort = `id`;
const authData: User = {
  id: 1,
  name: `jztenk`,
  email: `jztenk@gmail.com`,
  avatarUrl: `img/avatar-max.jpg`,
  isPro: false
};

const postData = {
  comment: `Excelent! Perfecto! Awesome!`,
  rating: `4`,
  date: new Date().toISOString()
};

describe(`<SignIn />`, () => {
  const {id, name} = authData;
  mockAxios.onPost(APIRoute.getComments(id)).reply(APIStatus.SUCCESS, [extend(postData, {id, name})]);

  let state = {
    request: {
      type: ``,
      status: OperationStatus.EMPTY,
      id: null
    },
    offers: {
      sorting,
      data: [],
      current: null,
      nearby: [],
      comments: [],
      favorites: []
    }
  };

  const handleSubmit = () => setComment(extend(postData, {id}))(store.dispatch, store.getState, api);
  const handleStatusReset = () => store.dispatch(ActionCreator.setRequest({type: ``, status: OperationStatus.EMPTY, id: null}));
  const handleReset = jest.fn();

  const store = mockStore(state);
  const tree = shallow(
      <ReviewForm
        id={id}
        status={OperationStatus.EMPTY}
        rating={postData.rating}
        comment={postData.comment}
        onChange={jest.fn()}
        onReset={handleReset}
        onStatusReset={handleStatusReset}
        onSubmit={handleSubmit}
      />
  );

  afterEach(store.clearActions);
  tree.simulate(`submit`, {preventDefault: jest.fn()});

  it(`Should set comment`, () => {
    const actions = store.getActions();
    const expectedActions = [
      {type: `SET_REQUEST`, payload: {type: `comment`, status: OperationStatus.PENDING, id}},
      {type: `SET_COMMENTS`, payload: [extend(postData, {id, name})]},
      {type: `SET_REQUEST`, payload: {type: `comment`, status: OperationStatus.SUCCESS, id}},
    ];
    expect(actions).toEqual(expectedActions);

    actions.forEach((action) => {
      state = reducer(state, action);
    });
    expect(state).toEqual({
      offers: {
        sorting,
        data: [],
        current: null,
        nearby: [],
        comments: [extend(postData, {id, name})],
        favorites: []
      },
      request: {
        type: `comment`,
        status: OperationStatus.SUCCESS,
        id
      }
    });
  });

  it(`Should update`, () => {
    tree.setProps({status: OperationStatus.SUCCESS});
    expect(handleReset).toHaveBeenCalledTimes(1);

    const actions = store.getActions();
    const expectedActions = [{type: `SET_REQUEST`, payload: {type: ``, status: OperationStatus.EMPTY, id: null}}];
    expect(actions).toEqual(expectedActions);

    actions.forEach((action) => {
      state = reducer(state, action);
    });
    expect(state).toEqual(extend(state, {
      request: {
        type: ``,
        status: OperationStatus.EMPTY,
        id: null
      }}));
  });
});

