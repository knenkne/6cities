import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Offer(props) {
  return (
    <article className="cities__place-card place-card" onMouseEnter={props.handleMouseEnter}>
      {props.premium && <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={props.images[0]}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price}</b>
            <span className="place-card__price-text">
                    &#47;&nbsp;night
            </span>
          </div>
          <button
            className={`place-card__bookmark-button button${props.bookmarked ? ` place-card__bookmark-button--active` : ``}`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width="18"
              height="19"
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(props.rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${props.id}`}>{props.name}</Link>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}

Offer.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string),
  premium: PropTypes.bool,
  bookmarked: PropTypes.bool,
  handleMouseEnter: PropTypes.func
};

export default Offer;
