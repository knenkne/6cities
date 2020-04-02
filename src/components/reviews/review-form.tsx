import * as React from 'react';
import {connect} from 'react-redux';

import {OperationStatus, COMMENT, ratings} from '../../common/const';
import {getOfferID} from '../../store/reducer/offers/selectors';
import {getStatus} from '../../store/reducer/request/selectors';
import {ActionCreator} from '../../store/reducer/request/actions';
import {setComment} from '../../store/reducer/offers/actions';
import withValues from '../../hocs/with-values/with-values';


interface Props {
  id: number;
  status: OperationStatus;
  comment: string;
  rating: string;
  onSubmit: (data: object) => void;
  onReset: () => void;
  onStatusReset: () => void;
  onChange: (e: React.SyntheticEvent) => void;
}

class ReviewForm extends React.PureComponent<Props, {}> {
  static defaultProps = {
    comment: ``,
    rating: ``
  }

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    const {status, onReset, onStatusReset} = this.props;

    if (status === OperationStatus.SUCCESS) {
      onReset();
      onStatusReset();
    }
  }


  handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const {comment, rating, id, onSubmit} = this.props;
    onSubmit({
      comment,
      rating: parseInt(rating, 10),
      id
    });
  }

  render() {
    const {status, rating, comment, onChange} = this.props;
    const pendingStatus = status === OperationStatus.PENDING;
    const errorStatus = status === OperationStatus.FAILED;

    return (
      <form className={`reviews__form${errorStatus ? ` reviews__form--error` : ``} form`} action="#" method="post" onSubmit={this.handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {ratings.map((i) => {
            return (
              <React.Fragment key={`star-${i}`}>
                <input className="form__rating-input visually-hidden" name="rating" value={i} id={`${i}-stars`} type="radio" onChange={onChange} checked={i === rating} disabled={pendingStatus}/>
                <label htmlFor={`${i}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            );
          })}
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" onChange={onChange} value={comment} disabled={pendingStatus}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{COMMENT.MIN_LENGTH} and below {COMMENT.MAX_LENGTH} characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled={!rating || comment.length < COMMENT.MIN_LENGTH || comment.length > COMMENT.MAX_LENGTH || pendingStatus}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  id: getOfferID(state),
  status: getStatus(state, `comment`, getOfferID(state))
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(data) {
    dispatch(setComment(data));
  },
  onStatusReset() {
    dispatch(ActionCreator.setRequest({type: `comment`, status: OperationStatus.EMPTY, id: null}));
  }
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(withValues(ReviewForm));
