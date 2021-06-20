import React from 'react';
import reviewProp from '../../prop-types/review.prop';
import {getRating} from '../../utils';

function Review({review}) {
  const {comment, date, rating, user} = review;
  const {avatarUrl, isPro, name} = user;

  const placeRating = getRating(rating);
  const formattedDate = new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'short'});

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
        {isPro &&
        <span className="property__user-status">Pro
        </span>}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: placeRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>
          {formattedDate}
        </time>
      </div>
    </li>
  );
}

Review.propTypes = {
  review: reviewProp,
};

export default Review;
