import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {city} from '../../common/types';
import OffersEmpty from './offers-empty';

const name: city = `Amsterdam`;

it(`<OffersEmpty /> should render message that nothing was found in city`, () => {
  const tree = renderer.create(<OffersEmpty name={name} />);

  expect(tree).toMatchSnapshot();
});
