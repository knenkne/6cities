import * as React from 'react';

import {Offer} from '../../types';
import Card from '../offer/offer';


interface Props {
  offers: Offer[];
}

const NearbyOffers: React.FC<Props> = ({offers}: Props) => {
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
