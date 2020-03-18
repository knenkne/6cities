import reducer from './cities';
import {ActionCreator} from './actions';

it(`Reducer should set city`, () => {
  expect(reducer({
    current: `Paris`,
    data: [`Paris`, `Amsterdam`, `Cologne`]
  }, ActionCreator.setCity(`Amsterdam`))).toEqual({
    current: `Amsterdam`,
    data: [`Paris`, `Amsterdam`, `Cologne`]
  });
});
