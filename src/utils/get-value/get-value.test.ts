import getValue from './get-value';

const data = {
  city: {
    location: {
      x: 90
    }
  }
};

it(`Function should get value`, () => expect(getValue(data, `city.location.x`)).toEqual(90));

it(`Function should get value from array`, () => expect(getValue(data, [`city`, `location`, `x`])).toEqual(90));

it(`Function should return undefined`, () => expect(getValue(data, [`city`, `location`, `y`])).toEqual(undefined));
