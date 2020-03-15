import * as React from 'react';
import {shallow} from 'enzyme';

import withValues from './with-values';


interface P {
    rating: number;
    comment: string;
    onCommentChange: () => void;
    onRatingChange: () => void;
    onReset: () => void;
}

const MockComponent: React.FC<P> = () => <div />;
const MockComponentWrapped = withValues(MockComponent);

it(`Should get rating changes`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  const e = {
    persist: jest.fn(),
    preventDefault: jest.fn(),
    currentTarget: {
      value: `4`
    }
  };

  expect(wrapper.props().rating).toEqual(null);

  wrapper.props().onRatingChange(e);
  expect(wrapper.props().rating).toEqual(4);

  e.currentTarget.value = `2`;

  wrapper.props().onRatingChange(e);
  expect(wrapper.props().rating).toEqual(2);
});

it(`Should get comment changes`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  const e = {
    persist: jest.fn(),
    preventDefault: jest.fn(),
    currentTarget: {
      value: `Hello!`
    }
  };

  expect(wrapper.props().comment).toEqual(``);

  wrapper.props().onCommentChange(e);
  expect(wrapper.props().comment).toEqual(`Hello!`);

  e.currentTarget.value = `My name is...`;

  wrapper.props().onCommentChange(e);
  expect(wrapper.props().comment).toEqual(`My name is...`);
});

it(`Should reset`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  const commentE = {
    persist: jest.fn(),
    preventDefault: jest.fn(),
    currentTarget: {
      value: `Hello!`
    }
  };

  const ratingE = {
    persist: jest.fn(),
    preventDefault: jest.fn(),
    currentTarget: {
      value: `5`
    }
  };

  wrapper.props().onCommentChange(commentE);
  wrapper.props().onRatingChange(ratingE);
  expect(wrapper.props().comment).toEqual(`Hello!`);
  expect(wrapper.props().rating).toEqual(5);

  wrapper.props().onReset();
  expect(wrapper.props().comment).toEqual(``);
  expect(wrapper.props().rating).toEqual(null);
});


