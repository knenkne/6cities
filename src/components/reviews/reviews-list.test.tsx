import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {Review} from '../../types';
import List from './reviews-list';


const comments: Review[] = [
  {
    id: 1,
    user: {
      id: 4,
      isPro: false,
      name: `Max`,
      avatarUrl: `/img/avatar-max.jpg`
    },
    rating: 4,
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`
  }
];

it(`<List /> should render`, () => {
  const tree = renderer.create(<List reviews={comments} />);

  expect(tree).toMatchSnapshot();
});
