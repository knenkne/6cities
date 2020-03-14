import * as React from 'react';
import {connect} from 'react-redux';

import {Review} from '../../types';
import {setComment, ActionCreator} from '../../store/actions/actions';
import {getAuthorizationStatus, getOperationStatus} from '../../store/reducers/user/selectors';
import {getComments, getOfferID} from '../../store/reducers/offers/selectors';

import List from './reviews-list';
import Form from './review-form';


interface Props {
  id: boolean;
  isAuthorized: boolean;
  comments: Review[];
  commentStatus: string;
  handleComment: () => void;
  handleOperationStatusReset: () => void;
}

const Reviews: React.FC<Props> = ({isAuthorized, handleOperationStatusReset, commentStatus, comments, handleComment, id}: Props) => {
  return (
    <section className="property__reviews reviews">
      {comments.length > 0 && <List reviews={comments}/>}
      {isAuthorized && <Form onSubmit={handleComment} onOperationStatusReset={handleOperationStatusReset} commentStatus={commentStatus} id={id}/>}
    </section>
  );
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
