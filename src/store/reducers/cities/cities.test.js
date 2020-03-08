import reducer from './cities.js';
import {ActionCreator} from '../../actions/actions.js';

it(`Reducer should set city`, () => {
  expect(reducer({
    current: `Paris`
  }, ActionCreator.setCity(`Amsterdam`))).toEqual({
    current: `Amsterdam`
  });
});
