import groupBy from './group-by.js';


it(`Function should create 2D array with cities`, () => {
  const data =
    [
      {city: `Moscow`, id: 1},
      {city: `New York`, id: 2},
      {city: `New York`, id: 3},
      {city: `Moscow`, id: 4},
      {city: `Amsterdam`, id: 5}
    ];

  expect(groupBy(data, `city`)).toEqual(
      {
        'Moscow': [{city: `Moscow`, id: 1}, {city: `Moscow`, id: 4}],
        'New York': [{city: `New York`, id: 2}, {city: `New York`, id: 3}],
        'Amsterdam': [{city: `Amsterdam`, id: 5}]
      });
});

