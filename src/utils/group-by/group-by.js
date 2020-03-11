const groupBy = (array, key) => array.reduce((acc, curr) => {
  if (!acc.hasOwnProperty(curr[key].name)) {
    acc[curr[key].name] = [];
  }

  acc[curr[key].name].push(curr);

  return acc;
}, {});

export default groupBy;
