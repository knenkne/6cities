import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {cityName} from '../../types';
import OffersEmpty from './offers-empty';

const city: cityName = `Amsterdam`;

it(`<OffersEmpty /> should render message that nothing was found in city`, () => {
  const tree = renderer.create(<OffersEmpty city={city} />);

  expect(tree).toMatchSnapshot();
});
