import * as React from 'react';

import {Offer} from '../../common/interfaces';
import withFocusedItem from '../../hocs/with-focused-item/with-focused-item';
import Card from '../offer/offer';
import Map from '../map/map';
import Sorters from '../sorters/sorters';


interface Props {
  offers: Offer[];
  city: string;
  focusedItem: number;
  onBookmarkClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const OffersFilled: React.FC<Props> = ({offers, city, focusedItem, onBookmarkClick, onMouseEnter, onMouseLeave}) => {
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
              <Card
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
};

export default withFocusedItem(OffersFilled);
