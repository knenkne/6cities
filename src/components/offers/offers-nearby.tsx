import * as React from 'react';

import {Offer} from '../../common/interfaces';
import Card from '../offer/offer';


const NearbyOffers: React.FC<{offers: Offer[]}> = ({offers}) => {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((offer) => <Card key={offer.id} {...offer} />)}
        </div>
      </section>
    </div>
  );
};

export default React.memo(NearbyOffers);
