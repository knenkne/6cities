import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Offer} from '../../common/interfaces';
import {getStatus} from '../../store/reducer/request/selectors';
import {setFavorite} from '../../store/reducer/offers/actions';
import {AppRoute, OperationStatus} from '../../common/const';


interface Props extends Offer {
  mini: boolean;
  status: string;
  handleMouseEnter: (e: React.SyntheticEvent) => void;
  handleMouseLeave: () => void;
  onClick: (id: number, isFavorite: number) => void;
}

const Card: React.FC<Props> = ({id, title, type, previewImage, isPremium, isFavorite, price, rating, handleMouseEnter, handleMouseLeave, onClick, status, mini = false}) => {
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
            className={`place-card__bookmark-button button${isFavorite ? ` place-card__bookmark-button--active` : ``}${status === OperationStatus.FAILED ? ` place-card__bookmark-button--error` : ``}`}
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

const mapStateToProps = (state, props) => ({
  status: getStatus(state, `favorite`, props.id)
});

const mapDispatchToProps = (dispatch) => ({
  onClick(id: number, status: number) {
    dispatch(setFavorite(id, status));
  }
});

export {Card};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
