import * as React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';

import reducer from '../../store/reducer/cities/cities';
import {ActionCreator} from '../../store/reducer/cities/actions';
import {city} from '../../common/types';
import {Tab} from './tab';


const mockStore = configureStore([]);

it(`<Tab /> should be pressed`, () => {
  const cities: city[] = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
  const name: city = `Amsterdam`;

  let state = {
    current: cities[0],
    data: cities
  };

  const store = mockStore(state);
  const handleClick = () => store.dispatch(ActionCreator.setCity(name));

  const tree = shallow(
      <Tab
        name={name}
        currentCity={state.current}
        onTabClick={handleClick}
      />
  );

  tree.find(`.locations__item`).simulate(`click`);

  const actions = store.getActions();
  const expectedActions = [{type: `SET_CITY`, payload: name}];
  expect(actions).toEqual(expectedActions);

  actions.forEach((action) => {
    state = reducer(state, action);
  });
  expect(state.current).toBe(name);
});

