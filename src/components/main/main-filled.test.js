import React from 'react';
import renderer from 'react-test-renderer';
import MainFilled from './main-filled.jsx';

const names = [`Winterfell`, `Detroit`, `312`];

it(`<MainFilled /> should render offers`, () => {
  const tree = renderer.create(<MainFilled names={names} />).toJSON();

  expect(tree).toMatchSnapshot();
});
