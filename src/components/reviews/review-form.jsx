import React from 'react';
import PropTypes from 'prop-types';

import withValues from '../../hocs/with-values/with-values.jsx';


function ReviewForm({id, rating, comment, onRatingChange, onCommentChange, onSubmit, onReset}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      comment,
      rating,
      id
    });

    // onReset();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit} disabled>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((i) => {
          return (
            <React.Fragment key={`star-${i}`}>
              <input className="form__rating-input visually-hidden" name="rating" value={i} id={`${i}-stars`} type="radio" onChange={onRatingChange} checked={i === rating}/>
              <label htmlFor={`${i}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          );
        })}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={onCommentChange} value={comment}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!rating || comment.length < 50}>Submit</button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  id: PropTypes.number,
  rating: PropTypes.number,
  comment: PropTypes.string,
  onRatingChange: PropTypes.func,
  onCommentChange: PropTypes.func,
  onReset: PropTypes.func,
  onSubmit: PropTypes.func
};

export default withValues(ReviewForm);
