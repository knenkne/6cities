import React from 'react';
import {shallow} from 'enzyme';

import withActiveItem from './with-active-item.jsx';


const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should toggle active state`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.props().isActive).toEqual(false);

  wrapper.props().onClick();

  expect(wrapper.props().isActive).toEqual(true);
});
