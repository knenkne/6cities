import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Offer as Type} from '../../types';
import {setBookmark} from '../../store/actions/actions';
import {AppRoute} from '../../const';


interface Props extends Type {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  onClick: (id: number, isFavorite: number) => void;
  mini: boolean;
}

const Offer: React.FC<Props> = ({id, title, type, previewImage, isPremium, isFavorite, price, rating, handleMouseEnter, handleMouseLeave, onClick, mini = false}: Props) => {
  const handleClick = () => onClick(id, isFavorite ? 0 : 1);
  return (
    <article className={`${mini ? `favorites__card` : `cities__place-card`} place-card`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-id={id}>
      {isPremium && <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${mini ? `favorites__image-wrapper` : `cities__image-wrapper`} place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={mini ? `150` : `260`}
            height={mini ? `110` : `200`}
            alt="Place image"
          />
        </a>
      </div>
      <div className={`${mini ? `favorites__card-info ` : ``}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">
                    &#47;&nbsp;night
            </span>
          </div>
          <button
            onClick={handleClick}
            className={`place-card__bookmark-button button${isFavorite ? ` place-card__bookmark-button--active` : ``}`}
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
            <span style={{width: `${Math.round(rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OFFER}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onClick(id: number, status: number) {
    dispatch(setBookmark(id, status));
  }
});

export default connect(null, mapDispatchToProps)(Offer);
