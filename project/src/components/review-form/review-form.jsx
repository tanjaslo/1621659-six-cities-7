import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {postReview} from '../../store/api-actions';
import RatingList from '../rating-list/rating-list';

const MIN_CHARS_COUNT = 50;

function ReviewForm({roomId, sendReview}) {
  // const [review, setReview] = useState({rating: null, comment: ''});
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState('');

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    sendReview({id: roomId, comment: review, rating: rating});
    setRating(null);
    setReview('');
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
      <RatingList rating={rating} setRating={setRating} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
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

ReviewForm.propTypes = {
  roomId: PropTypes.number.isRequired,
  sendReview: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  sendReview: postReview,
};

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
