import reducer from './offers.js';
import {ActionCreator} from '../../actions/actions.js';

const comments = [{author: `Max`, message: `Booooring`}, {author: `Victoria`, message: `Amazing`}];

it(`Reducer should set offer`, () => {
  expect(reducer({
    current: null,
  }, ActionCreator.setOffer(1))).toEqual({
    current: 1
  });
});

it(`Reducer should set comments`, () => {
  expect(reducer({
    comments: [],
  }, ActionCreator.setComments(comments))).toEqual({
    comments
  });
});
