import reducer from './cities';
import {ActionCreator} from '../../actions/actions';

it(`Reducer should set city`, () => {
  expect(reducer({
    current: `Paris`
  }, ActionCreator.setCity(`Amsterdam`))).toEqual({
    current: `Amsterdam`
  });
});
