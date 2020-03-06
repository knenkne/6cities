import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withFocusedItem from './with-focused-item.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const MockComponent = () => <div />;
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
