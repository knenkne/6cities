import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Form from './sign-in-form';


it(`<Form /> should render`, () => {
  const tree = renderer.create(<Form onSubmit={jest.fn()}/>);

  expect(tree).toMatchSnapshot();
});
