import * as React from 'react';
import {connect} from 'react-redux';

import {Review} from '../../interfaces';
import {getComments} from '../../store/reducers/offers/selectors';

import List from './reviews-list';
import Form from './review-form';


const Reviews: React.FC<{comments: Review[]}> = ({comments}) => {
  return (
    <section className="property__reviews reviews">
      {comments.length > 0 && <List reviews={comments}/>}
      <Form />
    </section>
  );
};

const mapStateToProps = (state) => ({
  comments: getComments(state)
});


export default connect(mapStateToProps)(React.memo(Reviews));
