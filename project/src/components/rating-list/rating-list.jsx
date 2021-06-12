import React from 'react';
import PropTypes from 'prop-types';
//import RatingItem from '../rating-item/rating-item';
import {Ratings} from '../../const';

function RatingList({onChange}) {
  return (
    <div className="reviews__rating-form form__rating">
      {Object.values(Ratings).map(({value, title}) => (
        <React.Fragment key={title}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={value}
            id={`${value}-stars`}
            type="radio"
            onChange={onChange}
          />
          <label
            htmlFor={`${value}-stars`}
            className="reviews__rating-label form__rating-label"
            title={title}
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </React.Fragment>
      ))}
    </div>);
}

RatingList.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default RatingList;
