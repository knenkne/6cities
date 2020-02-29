import React from 'react';
import PropTypes from 'prop-types';

function OfferIntro(props) {
  const {id, title, type, bedrooms, maxAdults, previewImage, isPremium, isFavorite, price, rating} = props;

  return (
    <React.Fragment>
      {isPremium && <div className="property__mark">
        <span>Premium</span>
      </div>}
      <div className="property__name-wrapper">
        <h1 className="property__name">
          {title}
        </h1>
        <button className={`property__bookmark-button button${isFavorite ? ` property__bookmark-button--active` : ``}`} type="button">
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
}

OfferIntro.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  bedrooms: PropTypes.number,
  adults: PropTypes.number,
  price: PropTypes.number,
  premium: PropTypes.bool,
  rating: PropTypes.number,
  bookmarked: PropTypes.bool
};

export default OfferIntro;
