import React from 'react';
import PropTypes from 'prop-types';

import withFocusedItem from '../../hocs/with-focused-item/with-focused-item.jsx';

import Offer from '../offer/offer.jsx';
import Map from '../map/map.jsx';
import Sorters from '../sorters/sorters.jsx';

function OffersFilled({offers, city, focusedItem, onBookmarkClick, onMouseEnter, onMouseLeave}) {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} places to stay in {city}
          </b>
          <Sorters />
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <Offer
                {...offer}
                key={offer.id}
                onBookmarkClick={onBookmarkClick}
                handleMouseEnter={onMouseEnter}
                handleMouseLeave={onMouseLeave}
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <Map
            mini
            offers={offers}
            focusedOffer={focusedItem}
          />
        </div>
      </div>
    </div>
  );
}

OffersFilled.propTypes = {
  city: PropTypes.string,
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
  focusedItem: PropTypes.number,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onBookmarkClick: PropTypes.func
};

export default withFocusedItem(OffersFilled);
