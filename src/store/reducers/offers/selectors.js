import {createSelector} from 'reselect';

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

const offersSelector = (state) => state.offers.data;
const favoritesSelector = (state) => state.offers.favorites;
const IDSelector = (state) => state.offers.current;
const citySelector = (state) => state.cities.current;
const sortingSelector = (state) => state.offers.sorting;

export const getOffers = createSelector(
    offersSelector,
    citySelector,
    sortingSelector,
    (offers, city, sorting) => offers.filter((offer) => offer.city.name === city).sort(sortMap[sorting])
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
