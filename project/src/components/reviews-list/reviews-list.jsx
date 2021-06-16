import React from 'react';
import PropTypes from 'prop-types';
import reviewsProp from '../../prop-types/reviews.prop';
import Review from '../review/review';

function ReviewsList({reviews}) {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};

export default ReviewsList;