import React from 'react';
import renderer from 'react-test-renderer';
import Features from './features.jsx';

const features = [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`];

it(`<Features /> should render`, () => {
  const tree = renderer.create(<Features features={features} />).toJSON();

  expect(tree).toMatchSnapshot();
});
