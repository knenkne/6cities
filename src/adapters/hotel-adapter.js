import renameKeys from '../utils/rename-keys/rename-keys.js';

export default class Adapter {
  constructor(data) {
    Object.assign(this, renameKeys(data));
  }

  static parseHotel(data) {
    return new Adapter(data);
  }

  static parseHotels(data) {
    return data.map(Adapter.parseHotel);
  }
}
