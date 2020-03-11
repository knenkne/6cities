import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setComment, ActionCreator} from '../../store/actions/actions.js';
import {getAuthorizationStatus, getOperationStatus} from '../../store/reducers/user/selectors.js';
import {getComments, getOfferID} from '../../store/reducers/offers/selectors.js';

import List from './reviews-list.jsx';
import Form from './review-form.jsx';

function Reviews({isAuthorized, handleOperationStatusReset, commentStatus, comments, handleComment, id}) {
  return (
    <section className="property__reviews reviews">
      {comments.length > 0 && <List reviews={comments}/>}
      {isAuthorized && <Form onSubmit={handleComment} onOperationStatusReset={handleOperationStatusReset} commentStatus={commentStatus} id={id}/>}
    </section>
  );
}

Reviews.propTypes = {
  id: PropTypes.number,
  commentStatus: PropTypes.string,
  isAuthorized: PropTypes.bool,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      isPro: PropTypes.bool,
      avatarUrl: PropTypes.string
    })
  })),
  handleOperationStatusReset: PropTypes.func,
  handleComment: PropTypes.func
};

const mapStateToProps = (state) => ({
  id: getOfferID(state),
  isAuthorized: getAuthorizationStatus(state),
  comments: getComments(state),
  commentStatus: getOperationStatus(state, `commentStatus`)
});

const mapDispatchToProps = (dispatch) => ({
  handleComment(data) {
    dispatch(setComment(data));
  },
  handleOperationStatusReset(name) {
    dispatch(ActionCreator.setOperationStatus(name, ``));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Reviews));
