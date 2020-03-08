import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getAuthorizationStatus} from '../../store/reducers/user/selectors.js';
import {getComments} from '../../store/reducers/offers/selectors.js';

import List from './reviews-list.jsx';
import Form from './review-form.jsx';

function Reviews({isAuthorized, comments}) {
  return (
    <section className="property__reviews reviews">
      {comments.length > 0 && <List reviews={comments}/>}
      {isAuthorized && <Form />}
    </section>
  );
}

Reviews.propTypes = {
  isAuthorized: PropTypes.bool,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      isPro: PropTypes.bool,
      avatarUrl: PropTypes.string
    })
  }))
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state),
  comments: getComments(state)
});

export default connect(mapStateToProps)(Reviews);
