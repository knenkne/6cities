import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './sign-in.jsx';

const city = `Sochi`;

it(`<SignIn /> should render`, () => {
  const tree = renderer.create(<SignIn city={city} />).toJSON();

  expect(tree).toMatchSnapshot();
});
