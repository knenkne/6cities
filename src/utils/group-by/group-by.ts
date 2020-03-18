import getValue from '../get-value/get-value';

const groupBy = (array: object[], keys: string[] | string) => {
  return array.reduce((acc, curr) => {
    const value = getValue(curr, keys);
    if (!acc.hasOwnProperty(value)) {
      acc[value] = [];
    }

    acc[value].push(curr);

    return acc;
  }, {} as object);
};

export default groupBy;
