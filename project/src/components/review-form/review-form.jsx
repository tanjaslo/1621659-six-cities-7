import React, {useState} from 'react';
import RatingList from '../rating-list/rating-list';

const MIN_CHARS_COUNT = 50;

function ReviewForm() {
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState('');

  const onFormSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => onFormSubmit(evt)}
    >
      <label className="reviews__label form__label"
        htmlFor="review"
      >Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <RatingList rating={rating} onChange={(evt) => setRating(evt.target.value)} />
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review.comment}
        onChange={(evt) => setReview(evt.target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.length < MIN_CHARS_COUNT && true}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
