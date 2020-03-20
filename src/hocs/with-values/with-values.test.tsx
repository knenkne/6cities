import * as React from 'react';
import {shallow} from 'enzyme';

import withValues from './with-values';

interface P {
rating: number;
comment: string;
onChange: (e: React.SyntheticEvent) => void;
onReset: () => void;
}

const MockComponent: React.FC<P> = () => <div />;
const MockComponentWrapped = withValues(MockComponent);

it(`Should get rating changes`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  const e = {
    persist: jest.fn(),
    preventDefault: jest.fn(),
    target: {
      name: `rating`,
      value: `4`
    }
  };

  expect(wrapper.props().rating).toBe(undefined);

  wrapper.props().onChange(e);
  expect(wrapper.props().rating).toBe(`4`);

  e.target.value = `2`;

  wrapper.props().onChange(e);
  expect(wrapper.props().rating).toBe(`2`);
});

it(`Should get comment changes`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  const e = {
    persist: jest.fn(),
    preventDefault: jest.fn(),
    target: {
      name: `comment`,
      value: `Hello!`
    }
  };

  expect(wrapper.props().comment).toBe(undefined);

  wrapper.props().onChange(e);
  expect(wrapper.props().comment).toBe(`Hello!`);

  e.target.value = `My name is...`;

  wrapper.props().onChange(e);
  expect(wrapper.props().comment).toBe(`My name is...`);
});

it(`Should reset`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  const e = {
    persist: jest.fn(),
    preventDefault: jest.fn(),
    target: {
      name: `comment`,
      value: `Hello!`
    }
  };

  wrapper.props().onChange(e);
  expect(wrapper.props().comment).toBe(`Hello!`);

  wrapper.props().onReset();
  expect(wrapper.props().comment).toBe(``);
});
