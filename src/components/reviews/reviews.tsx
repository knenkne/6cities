import * as React from 'react';
import {connect} from 'react-redux';

import {COMMENT} from '../../common/const';
import {Review} from '../../common/interfaces';
import {getAuthorizationStatus} from '../../store/reducer/user/selectors';
import {getComments} from '../../store/reducer/offers/selectors';
import List from './reviews-list';
import Form from './review-form';

const sortByDate = (a: Review, b: Review) => +new Date(b.date) - +new Date(a.date);

const Reviews: React.FC<{comments: Review[]; isAuthorized: boolean}> = ({comments, isAuthorized}) => {
  const sortedComments = comments.sort(sortByDate).slice(0, COMMENT.MAX_COUNT);
  return (
    <section className="property__reviews reviews">
      {comments.length > 0 && <List reviews={sortedComments}/>}
      {isAuthorized && <Form />}
    </section>
  );
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state),
  comments: getComments(state)
});


export default connect(mapStateToProps)(Reviews);
