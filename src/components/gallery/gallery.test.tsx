import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Gallery from './gallery';


const images: string[] = [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`];

it(`<Gallery /> should render`, () => {
  const tree = renderer.create(<Gallery images={images} />).toJSON();

  expect(tree).toMatchSnapshot();
});
