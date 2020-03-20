import {city} from './types';

export enum OperationStatus {
  PENDING = `PENDING`,
  SUCCESS = `SUCCESS`,
  FAILED = `FAILED`,
  EMPTY = ``
}

export enum APIStatus {
  UNAUTHORIZED = 401,
  SUCCESS = 200
}

export enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

export const TIMEOUT = 5000;
export const MAX_IMAGES = 6;
export const BASE_URL = `https://htmlacademy-react-3.appspot.com/six-cities`;

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

// [width, height] согласно доке leaflet типа Point[number, number]
const PIN_SIZE: [number, number] = [27, 39];
export const PIN = {
  SIZE: PIN_SIZE,
  URL: `img/pin.svg`,
  ACTIVE_URL: `img/pin-active.svg`
};

export const LAYER = {
  URL: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{@2x}.png`
};

export const COMMENT = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 300,
  MAX_COUNT: 10
};

export const cities: city[] = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
export const ratings: string[] = [`5`, `4`, `3`, `2`, `1`];
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

