import getValue from '../get-value/get-value.js';

const groupBy = (array, keys) => {
  return array.reduce((acc, curr) => {
    const value = getValue(curr, keys);
    if (!acc.hasOwnProperty(value)) {
      acc[value] = [];
    }

    acc[value].push(curr);

    return acc;
  }, {});
};

export default groupBy;
