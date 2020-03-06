import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withActiveItem from './with-active-item.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should toggle active state`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.props().isActive).toEqual(false);

  wrapper.props().onClick();

  expect(wrapper.props().isActive).toEqual(true);
});
