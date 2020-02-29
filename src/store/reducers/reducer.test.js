import reducer from './reducer.js';
import {ActionCreator} from '../actions/actions.js';
import {offers} from '../../mocks/offers.js';
import {comments} from '../../mocks/comments.js';

it(`Reducer should init cities`, () => {
  expect(reducer({
    offers,
    cities: []
  }, ActionCreator.initCities(offers))).toEqual({
    offers,
    cities: [`Amsterdam`, `Paris`]
  });
});

it(`Reducer should set city`, () => {
  expect(reducer({
    currentCity: `Paris`
  }, ActionCreator.setCity(`Amsterdam`))).toEqual({
    currentCity: `Amsterdam`
  });
});

it(`Reducer should init offer`, () => {
  expect(reducer({
    currentOffer: null,
  }, ActionCreator.initOffer(offers, 1))).toEqual({
    currentOffer: offers[0]
  });
});

it(`Reducer should set comments`, () => {
  expect(reducer({
    comments: [],
  }, ActionCreator.getComments(1))).toEqual({
    comments: comments[1]
  });
});
