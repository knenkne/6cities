import reducer from './request';
import {ActionCreator} from './actions';
import {OperationStatus} from '../../../common/const';

it(`Reducer should set request status`, () => {
  expect(reducer({
    type: ``,
    status: OperationStatus.EMPTY,
    id: null
  }, ActionCreator.setRequest({type: `comment`, status: OperationStatus.PENDING, id: 2}))).toEqual(
      {
        type: `comment`,
        status: OperationStatus.PENDING,
        id: 2
      }
  );
});
