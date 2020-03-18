import * as React from 'react';

import {property} from '../../common/types';


interface Props {
  title: string;
  type: property;
  bedrooms: number;
  maxAdults: number;
  isPremium: boolean;
  isFavorite: boolean;
  price: number;
  rating: number;
  errorStatus: boolean;
  onClick: () => void;
}

const OfferIntro: React.FC<Props> = ({title, type, bedrooms, maxAdults, isPremium, isFavorite, price, rating, onClick, errorStatus}) => {
  return (
    <React.Fragment>
      {isPremium && <div className="property__mark">
        <span>Premium</span>
      </div>}
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {title}
        </h1>
        <button className={`property__bookmark-button button${isFavorite ? ` property__bookmark-button--active` : ``}${errorStatus ? ` property__bookmark-button--error` : ``}`} type="button" onClick={onClick}>
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{width: `${Math.round(rating) * 20}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{rating}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {type}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
             Max {maxAdults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
    </React.Fragment>
  );
};

export default React.memo(OfferIntro);
