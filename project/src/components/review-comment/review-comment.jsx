import React, {memo} from 'react';
import PropTypes from 'prop-types';

function ReviewComment({comment, setComment}) {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      value={comment}
      onChange={(evt) => setComment(evt.target.value)}
    >
    </textarea>
  );
}

ReviewComment.propTypes = {
  comment: PropTypes.string,
  setComment: PropTypes.func.isRequired,
};

export default memo(ReviewComment);
