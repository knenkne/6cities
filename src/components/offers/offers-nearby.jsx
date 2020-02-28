import React from 'react';
import PropTypes from 'prop-types';

import Offer from '../offer/offer.jsx';

function NearbyOffers({offers}) {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((offer) => <Offer key={offer.id} {...offer} />)}
        </div>
      </section>
    </div>
  );
}

NearbyOffers.propTypes = {
  offers: PropTypes.array
};

export default NearbyOffers;
