import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from './reviews.jsx';

import {comments} from '../../mocks/comments.js';

it(`<Reviews /> should render`, () => {
  const tree = renderer.create(<Reviews reviews={comments[`1`]} />).toJSON();

  expect(tree).toMatchSnapshot();
});
