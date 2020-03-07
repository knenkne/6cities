import reducer from './reducer.js';
import {ActionCreator} from '../actions/actions.js';


const comments = [{author: `Max`, message: `Booooring`}, {author: `Victoria`, message: `Amazing`}];

it(`Reducer should set city`, () => {
  expect(reducer({
    currentCity: `Paris`
  }, ActionCreator.setCity(`Amsterdam`))).toEqual({
    currentCity: `Amsterdam`
  });
});

it(`Reducer should set offer`, () => {
  expect(reducer({
    currentOffer: null,
  }, ActionCreator.setOffer(1))).toEqual({
    currentOffer: 1
  });
});

it(`Reducer should set comments`, () => {
  expect(reducer({
    comments: [],
  }, ActionCreator.setComments(comments))).toEqual({
    comments
  });
});
