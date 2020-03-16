import renameKeys from './utils/rename-keys/rename-keys.js';

export default class Adapter {
  constructor(data: object) {
    Object.assign(this, renameKeys(data));
  }

  static parseItem(data: object) {
    return new Adapter(data);
  }

  static parse(data: object[]) {
    return data.map(Adapter.parseItem);
  }
}
