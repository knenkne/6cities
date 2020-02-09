import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header.jsx';

const userName = `MAlKuznetsov@sberbank.ru`;


describe(`Render <Header />`, () => {
  it(`<Header /> should have been rendered with userName`, () => {
    const tree = renderer.create(<Header userName={userName} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`<Header /> should have been rendered with sign-in`, () => {
    const tree = renderer.create(<Header />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
