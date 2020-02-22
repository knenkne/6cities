import React from 'react';
import renderer from 'react-test-renderer';

import Gallery from './gallery.jsx';

const images = [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`];

it(`<Gallery /> should render`, () => {
  const tree = renderer.create(<Gallery images={images} />).toJSON();

  expect(tree).toMatchSnapshot();
});
