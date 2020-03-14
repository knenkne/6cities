import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Features from './features';


const features: string[] = [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`];

it(`<Features /> should render`, () => {
  const tree = renderer.create(<Features goods={features} />).toJSON();

  expect(tree).toMatchSnapshot();
});
