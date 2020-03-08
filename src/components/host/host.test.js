import React from 'react';
import renderer from 'react-test-renderer';
import Host from './host.jsx';


const host = {
  id: 3,
  isPro: true,
  name: `Angelina`,
  avatarUrl: `img/avatar-angelina.jpg`
};

it(`<Host /> should render`, () => {
  const tree = renderer.create(<Host host={host} />).toJSON();

  expect(tree).toMatchSnapshot();
});
