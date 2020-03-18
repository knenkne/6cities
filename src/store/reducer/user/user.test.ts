import reducer from './user';
import {ActionCreator} from './actions';
import {User} from '../../../common/interfaces';

it(`Reducer should set authData`, () => {
  const authData: User = {
    id: 1,
    email: `jztenk@gmail.com`,
    name: `jztenk`,
    avatarUrl: `img/avatar-me.jpeg`,
    isPro: false
  };

  expect(reducer({
    isAuthorized: false,
    id: null,
    name: ``,
    avatarUrl: ``,
    isPro: undefined
  }, ActionCreator.setAuth(authData))).toEqual(
      Object.assign({isAuthorized: true}, authData)
  );
});
