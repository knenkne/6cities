import * as React from 'react';
import {shallow} from 'enzyme';

import withActiveItem from './with-active-item';

interface P {
  isActive: boolean;
  onClick: () => void;
}

const MockComponent: React.FC<P> = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should toggle active state`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.props().isActive).toEqual(false);

  wrapper.props().onClick();

  expect(wrapper.props().isActive).toEqual(true);
});
