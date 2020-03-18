import renameKeys from './utils/rename-keys/rename-keys';

export default class Adapter {
  [key: string]: string | number | boolean;
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
