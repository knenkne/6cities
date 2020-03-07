import React from 'react';
import PropTypes from 'prop-types';

import Tab from '../tab/tab.jsx';
import OffersFilled from './offers-filled.jsx';
import OffersEmpty from './offers-empty.jsx';

import {connect} from 'react-redux';

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

function Offers({offers, cities, currentCity}) {
  return (
    <main className={`page__main page__main--index page__main--index-empty${offers.length > 0 ? `` : ` page__main--index-empty`}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => <Tab city={city} key={city} />)}
          </ul>
        </section>
      </div>
      {offers.length > 0 ? <OffersFilled offers={offers} city={currentCity} /> : <OffersEmpty city={currentCity} />}
    </main>
  );
}

Offers.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string
  })),
  cities: PropTypes.arrayOf(PropTypes.string),
  currentCity: PropTypes.string
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  cities: state.cities,
  offers: state.offers.filter((offer) => offer.city.name === state.currentCity).sort(sortMap[state.currentSorting])
});

export default connect(mapStateToProps)(Offers);


