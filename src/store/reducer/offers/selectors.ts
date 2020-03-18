import {createSelector} from 'reselect';
import {sort, city} from '../../../common/types';
import {Offer, Review} from '../../../common/interfaces';


interface State {
  cities: {
    current: city;
  };
  offers: {
    sorting: sort;
    current: number;
    data: Offer[];
    nearby: Offer[];
    comments: Review[];
    favorites: Offer[];
  };
}

const sortMap = {
  rating(a, b) {
    return b.rating - a.rating;
  },
  id(a, b) {
    return a.id - b.id;
  },
  toLow(a, b) {
    return b.price - a.price;
  },
  toHigh(a, b) {
    return a.price - b.price;
  }
};

const offersSelector = (state: State) => state.offers.data;
const favoritesSelector = (state: State) => state.offers.favorites;
const IDSelector = (state: State) => state.offers.current;
const citySelector = (state: State) => state.cities.current;
const sortingSelector = (state: State) => state.offers.sorting;

export const getOffers = createSelector(
    offersSelector,
    citySelector,
    sortingSelector,
    (offers, cityName, sorting) => offers.filter((offer) => offer.city.name === cityName).sort(sortMap[sorting])
);


export const getOffer = createSelector(
    offersSelector,
    IDSelector,
    (offers, id) => offers.find((offer) => offer.id === id)
);

export const getComments = (state) => state.offers.comments;
export const getNearbyOffers = (state) => state.offers.nearby;
export const getSorting = sortingSelector;
export const getOfferID = IDSelector;
export const getFavorites = favoritesSelector;
