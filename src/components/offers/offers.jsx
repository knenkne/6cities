import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getOffers} from '../../store/reducers/offers/selectors.js';
import {getCities} from '../../store/reducers/cities/selectors.js';
import {getCity} from '../../store/reducers/cities/selectors.js';

import Tab from '../tab/tab.jsx';
import OffersFilled from './offers-filled.jsx';
import OffersEmpty from './offers-empty.jsx';

function Offers({offers, cities, city}) {
  return (
    <main className={`page__main page__main--index page__main--index-empty${offers.length ? `` : ` page__main--index-empty`}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((it) => <Tab city={it} key={it} />)}
          </ul>
        </section>
      </div>
      {offers.length ? <OffersFilled offers={offers} city={city}/> : <OffersEmpty city={city} />}
    </main>
  );
}

Offers.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    bedrooms: PropTypes.number,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        zoom: PropTypes.number
      }),
      name: PropTypes.string
    }),
    description: PropTypes.string,
    goods: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      avatarUrl: PropTypes.string,
      id: PropTypes.number,
      isPro: PropTypes.bool,
      name: PropTypes.string
    }),
    id: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    isFavorite: PropTypes.bool,
    isPremium: PropTypes.bool,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number
    }),
    maxAdults: PropTypes.number,
    previewImage: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string
  })),
  cities: PropTypes.arrayOf(PropTypes.string),
  city: PropTypes.string
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  cities: getCities(state),
  offers: getOffers(state)
});

export default connect(mapStateToProps)(Offers);


