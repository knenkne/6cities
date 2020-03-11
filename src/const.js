export const OperationStatus = {
  PENDING: `PENDING`,
  SUCCESS: `SUCCESS`,
  FAILED: `FAILED`
};

export const AppRoute = {
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer`,
  ROOT: `/`,
};

export const APIRoute = {
  HOTELS: `/hotels`,
  LOGIN: `/login`,
  FAVORITES: `/favorite`,
  getNearbyOffers(id) {
    return `/hotels/${id}/nearby`;
  },
  getComments(id) {
    return `/comments/${id}`;
  }
};

export const Error = {
  UNAUTHORIZED: 401
};

export const BASE_URL = `https://htmlacademy-react-3.appspot.com/six-cities`;
export const TIMEOUT = 5000;

export const PIN = {
  size: [27, 39],
  url: `img/pin.svg`,
  activeUrl: `img/pin-active.svg`
};

export const LAYER = {
  url: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{@2x}.png`
};

export const COMMENT = {
  minLength: 50
};

export const sorters = [
  {
    name: `id`,
    title: `Popular`
  },
  {
    name: `toHigh`,
    title: `Price: low to high`
  },
  {
    name: `toLow`,
    title: `Price: high to low`
  },
  {
    name: `rating`,
    title: `Top rated first`
  }];

export const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
export const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
export const MAX_IMAGES = 6;
