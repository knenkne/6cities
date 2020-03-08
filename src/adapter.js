import renameKeys from './utils/rename-keys/rename-keys.js';

export default class Adapter {
  constructor(data) {
    Object.assign(this, renameKeys(data));
  }

  static parseItem(data) {
    return new Adapter(data);
  }

  static parse(data) {
    return data.map(Adapter.parseItem);
  }
}
