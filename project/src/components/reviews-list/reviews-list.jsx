import React from 'react';
import Review from '../review/review';
import { getReviews, getSortedReviews } from '../../store/data/selectors';
import { useSelector } from 'react-redux';

function ReviewsList() {
  const reviews = useSelector(getReviews);
  const sortedReviews = useSelector(getSortedReviews);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">{sortedReviews.length}
        &nbsp;{reviews.length > 5 ? `(${reviews.length})` : ''}
        </span>
      </h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;

