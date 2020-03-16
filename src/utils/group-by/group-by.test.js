import groupBy from './group-by.js';


it(`Function should group cities`, () => {
  const data =
    [
      {
        city:
        {
          name: `Moscow`
        },
        id: 1
      },
      {
        city:
        {
          name: `New York`
        },
        id: 2
      },
      {
        city:
        {
          name: `New York`
        },
        id: 3
      },
      {
        city: {
          name: `Moscow`
        },
        id: 4
      },
      {
        city: {
          name: `Amsterdam`
        },
        id: 5
      }
    ];

  expect(groupBy(data, `city.name`)).toEqual(
      {
        'Moscow': [{city: {name: `Moscow`}, id: 1}, {city: {name: `Moscow`}, id: 4}],
        'New York': [{city: {name: `New York`}, id: 2}, {city: {name: `New York`}, id: 3}],
        'Amsterdam': [{city: {name: `Amsterdam`}, id: 5}]
      });
});

