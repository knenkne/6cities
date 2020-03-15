import * as React from 'react';
import {shallow} from 'enzyme';

import withFocusedItem from './with-focused-item';


interface P {
  focusedItem: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const MockComponent: React.FC<P> = () => <div />;
const MockComponentWrapped = withFocusedItem(MockComponent);

it(`Should toggle foused item`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  const e = {
    persist: jest.fn(),
    preventDefault: jest.fn(),
    currentTarget: {
      dataset: {
        id: 2
      }
    }
  };

  expect(wrapper.props().focusedItem).toEqual(null);

  wrapper.props().onMouseEnter(e);
  expect(wrapper.props().focusedItem).toEqual(2);

  wrapper.props().onMouseLeave(e);
  expect(wrapper.props().focusedItem).toEqual(null);
});
