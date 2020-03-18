/* eslint-disable @typescript-eslint/camelcase */
import renameKeys from './rename-keys';

it(`Function should rename nothing`, () => {
  const initialObject = {
    name: `Max`,
    lastName: `Kuznetsov`
  };

  expect(renameKeys(initialObject)).toEqual(initialObject);
});

it(`Function should rename shallow`, () => {
  const initialObject = {
    name: `Max`,
    lastName: `Kuznetsov`,
    is_senior: false,
    skills: [`react`, `redux`],
    is_liar: true
  };

  expect(renameKeys(initialObject)).toEqual({
    name: `Max`,
    lastName: `Kuznetsov`,
    isSenior: false,
    skills: [`react`, `redux`],
    isLiar: true
  });
});

it(`Function should rename deep`, () => {
  const initialObject = {
    some_map: {
      another_map: {
        message: `So deep :P`,
        deep_map: {
          message: `...`
        }
      },
    }
  };

  expect(renameKeys(initialObject)).toEqual({
    someMap: {
      anotherMap: {
        message: `So deep :P`,
        deepMap: {
          message: `...`
        }
      },
    }
  });
});
