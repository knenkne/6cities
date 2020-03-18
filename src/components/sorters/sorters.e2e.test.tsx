import * as React from 'react';
import {shallow} from 'enzyme';

import {sort} from '../../common/types';
import {Sorters} from './sorters';


const sorting: sort = `id`;

it(`<Sorting /> should be pressed`, () => {
  let isActive = false;
  let currentSorting = sorting;

  const handleClick = () => {
    isActive = !isActive;
  };

  const handleSortClick = (e) => {
    currentSorting = e.target.dataset.name;
  };

  const tree = shallow(
      <Sorters
        isActive={isActive}
        onClick={handleClick}
        onSortClick={handleSortClick}
        currentSorting={currentSorting}
      />
  );

  tree.find(`.places__sorting-type`).simulate(`click`);
  expect(isActive).toBe(true);

  tree.find(`.places__option`).at(2).simulate(`click`, {target: {dataset: {name: `toLow` as sort}}});
  expect(currentSorting).toBe(`toLow`);
});

