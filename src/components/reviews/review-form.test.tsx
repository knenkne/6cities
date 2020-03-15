import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Form from './review-form';


it(`<Form /> should render`, () => {
  const tree = renderer.create(<Form />);

  expect(tree).toMatchSnapshot();
});
