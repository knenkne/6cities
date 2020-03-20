import * as React from 'react';
import thunk from 'redux-thunk';
import {shallow} from 'enzyme';
import MockAdapter from 'axios-mock-adapter';
import configureStore from 'redux-mock-store';

import createAPI from '../../api/api';
import reducer from '../../store/reducer/user/user';
import extend from '../../utils/extend/extend';
import {setAuth} from '../../store/reducer/user/actions';
import {User} from '../../common/interfaces';
import {APIRoute, APIStatus} from '../../common/const';
import {SignInForm} from './sign-in-form';


const api = createAPI();
const mockAxios = new MockAdapter(api);
const mockStore = configureStore([thunk]);

const authData: User = {
  id: 1,
  name: `jztenk`,
  email: `jztenk@gmail.com`,
  avatarUrl: `img/avatar-max.jpg`,
  isPro: false
};

describe(`<SignIn />`, () => {
  mockAxios.onPost(APIRoute.LOGIN).reply(APIStatus.SUCCESS, authData);

  let state = {
    isAuthorized: false,
    id: null,
    name: ``,
    email: ``,
    avatarUrl: ``,
    isPro: undefined,
  };

  const handleSubmit = () => setAuth({email: `jztenk@gmail.com`, password: `qwerty`})(store.dispatch, store.getState, api);

  const store = mockStore(state);
  const tree = shallow(
      <SignInForm
        email={`jztenk@gmail.com`}
        password={`qwerty`}
        onSubmit={handleSubmit}
        onChange={jest.fn()}
      />
  );

  tree.simulate(`submit`, {preventDefault: jest.fn()});

  it(`Should set auth`, () => {
    const actions = store.getActions();
    const expectedActions = [{type: `SET_AUTH`, payload: authData}];
    expect(actions).toEqual(expectedActions);

    actions.forEach((action) => {
      state = reducer(state, action);
    });
    expect(state).toEqual(extend({isAuthorized: true}, authData));
  });
});

