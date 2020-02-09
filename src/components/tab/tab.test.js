import React from 'react';
import renderer from 'react-test-renderer';
import Tab from './tab.jsx';

const city = `Sochi`;


describe(`Render <Tab />`, () => {
  it(`<Tab /> should render`, () => {
    const tree = renderer.create(<Tab city={city} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Active <Tab /> should render`, () => {
    const tree = renderer.create(<Tab city={city} current={true} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
