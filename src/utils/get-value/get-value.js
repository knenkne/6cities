const getValue = (object, keys) => {
  keys = Array.isArray(keys) ? keys : keys.split(`.`);
  object = object[keys.shift()];

  if (object && keys.length > 0) {
    return getValue(object, keys);
  }

  return object;
};

export default getValue;
