import reducer from './request.js';
import {ActionCreator} from '../../actions/actions.js';

it(`Reducer should set request status`, () => {
  expect(reducer({
    type: ``,
    status: ``,
    id: null
  }, ActionCreator.setRequest({type: `comment`, status: `PENDING`, id: 2}))).toEqual(
      {
        type: `comment`,
        status: `PENDING`,
        id: 2
      }
  );
});
