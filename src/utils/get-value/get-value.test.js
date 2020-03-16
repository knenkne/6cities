import getValue from './get-value.js';


it(`Function should get value`, () => {
  const data = {
    city: {
      location: {
        x: 90
      }
    }
  };

  expect(getValue(data, `city.location.x`)).toEqual(90);
});

