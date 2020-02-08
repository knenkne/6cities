import React from 'react';
import renderer from 'react-test-renderer';
import MainEmpty from './main-empty.jsx';

const city = `Sochi`;

it(`<MainEmpty /> should render message that nothing was found in city`, () => {
  const tree = renderer.create(<MainEmpty city={city} />).toJSON();

  expect(tree).toMatchSnapshot();
});
