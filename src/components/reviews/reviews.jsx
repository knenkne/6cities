import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setComment} from '../../store/actions/actions.js';
import {getAuthorizationStatus} from '../../store/reducers/user/selectors.js';
import {getComments, getOfferID} from '../../store/reducers/offers/selectors.js';

import List from './reviews-list.jsx';
import Form from './review-form.jsx';

function Reviews({isAuthorized, comments, handleComment, id}) {
  return (
    <section className="property__reviews reviews">
      {comments.length > 0 && <List reviews={comments}/>}
      {isAuthorized && <Form onSubmit={handleComment} id={id}/>}
    </section>
  );
}

Reviews.propTypes = {
  id: PropTypes.number,
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
  handleComment: PropTypes.func
};

const mapStateToProps = (state) => ({
  id: getOfferID(state),
  isAuthorized: getAuthorizationStatus(state),
  comments: getComments(state)
});

const mapDispatchToProps = (dispatch) => ({
  handleComment(data) {
    dispatch(setComment(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
