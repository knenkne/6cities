import React from "react";
import PropTypes from 'prop-types';

import List from './reviews-list.jsx';

function Reviews({reviews}) {
  return (
    <section className="property__reviews reviews">
      {reviews.length > 0 && <List reviews={reviews}/>}
      {/* <form class="reviews__form form" action="#" method="post">
      <label class="reviews__label form__label" for="review">Your review</label>
      <div class="reviews__rating-form form__rating">
        <input class="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
        <label for="5-stars" class="reviews__rating-label form__rating-label" title="perfect">
          <svg class="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input class="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio">
        <label for="4-stars" class="reviews__rating-label form__rating-label" title="good">
          <svg class="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input class="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio">
        <label for="3-stars" class="reviews__rating-label form__rating-label" title="not bad">
          <svg class="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input class="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio">
        <label for="2-stars" class="reviews__rating-label form__rating-label" title="badly">
          <svg class="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input class="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio">
        <label for="1-star" class="reviews__rating-label form__rating-label" title="terribly">
          <svg class="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea class="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div class="reviews__button-wrapper">
        <p class="reviews__help">
          To submit review please make sure to set <span class="reviews__star">rating</span> and describe your stay with at least <b class="reviews__text-amount">50 characters</b>.
        </p>
        <button class="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form> */}
    </section>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string
    }),
    info: PropTypes.shape({
      text: PropTypes.string,
      rating: PropTypes.number,
      date: PropTypes.string
    })
  }))
};

export default Reviews;
