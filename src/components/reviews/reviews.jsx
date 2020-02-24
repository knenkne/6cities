import React from "react";
import PropTypes from 'prop-types';

import List from './reviews-list.jsx';
import Form from './review-form.jsx';

function Reviews({reviews}) {
  return (
    <section className="property__reviews reviews">
      {reviews.length > 0 && <List reviews={reviews}/>}
      <Form />
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
