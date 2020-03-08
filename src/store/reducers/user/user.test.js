import reducer from './user.js';
import {ActionCreator} from '../../actions/actions.js';

it(`Reducer should set authData`, () => {
  const authData = {
    id: 1,
    email: `jztenk@gmail.com`,
    name: `jztenk`,
    avatarUrl: `img/avatar-me.jpeg`,
    isPro: false
  };

  expect(reducer({
    isAuthorized: false,
  }, ActionCreator.setAuth(authData))).toEqual(
      Object.assign({isAuthorized: true}, authData)
  );
});
