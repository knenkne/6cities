import React from 'react';
import renderer from 'react-test-renderer';
import List from './reviews-list.jsx';

import {comments} from '../../mocks/comments.js';


it(`<List /> should render`, () => {
  const tree = renderer.create(<List reviews={comments[`1`]} />).toJSON();

  expect(tree).toMatchSnapshot();
});
