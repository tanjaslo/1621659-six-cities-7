import React, {memo, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {postReview} from '../../store/api-actions';
import RatingList from '../rating-list/rating-list';
import ReviewComment from '../review-comment/review-comment';

const MIN_CHARS_COUNT = 50;
const MAX_CHARS_COUNT = 300;

function ReviewForm({id}) {
  const dispatch = useDispatch();

  // const [review, setReview] = useState({rating: null, comment: ''});
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState('');

  const isButtonDisabled = rating === null || comment.length < MIN_CHARS_COUNT
  || comment.length > MAX_CHARS_COUNT;

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(postReview(({id: id, comment: comment, rating: rating})));
    setRating(null);
    setComment('');
  };

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => onFormSubmit(evt)}
    >
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >Your review
      </label>
      <RatingList rating={rating} setRating={setRating} />
      <ReviewComment comment={comment} setComment={setComment} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_CHARS_COUNT} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isButtonDisabled ? 'disabled' : ''}
        >Submit
        </button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  id: PropTypes.number,
};

export default memo(ReviewForm);
