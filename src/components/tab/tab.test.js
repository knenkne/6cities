import React from 'react';
import renderer from 'react-test-renderer';
import Tab from './tab.jsx';

const city = `Sochi`;


it(`<Tab /> should render "Sochi"`, () => {
  const tree = renderer.create(<Tab city={city} />).toJSON();

  expect(tree).toMatchSnapshot();
});
