const renameKeys = (obj) => {
  for (const key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      if (key.includes(`_`)) {
        const [firstWord, secondWord] = key.split(`_`);
        const newKey = firstWord + secondWord.charAt(0).toUpperCase() + secondWord.slice(1);

        obj[newKey] = obj[key];
        delete obj[key];

        if (typeof obj[newKey] === `object`) {
          renameKeys(obj[newKey]);
        }
      }
    }
  }

  return obj;
};

export default renameKeys;

