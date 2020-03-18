import groupBy from './group-by';


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

it(`Function should group id`, () => {
  const data =
    [
      {
        id: 1,
        name: `Max`
      },
      {
        id: 1,
        lastName: `Kuznetsov`
      },
      {
        id: 2,
        name: `Victoria`
      },
    ];

  expect(groupBy(data, `id`)).toEqual(
      {
        '1': [{id: 1, name: `Max`}, {id: 1, lastName: `Kuznetsov`}],
        '2': [{id: 2, name: `Victoria`}]
      });
});

