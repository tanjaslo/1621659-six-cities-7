import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import offersProp from '../../prop-types/offers.prop';
import {getRating, uppercaseFirstLetter} from '../../utils';

function PlaceCard({cardType, offer, onMouseEnter, onMouseLeave}) {
  const {id, title, previewImage, price, type, isFavorite, isPremium, rating} = offer;
  const {articleClassName, imgWrapperClassName, cardInfoClassName, imgWidth, imgHeight} = cardType;

  const placeRating = getRating(rating);

  return (
    <article className={`${articleClassName} place-card`}
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className={`${imgWrapperClassName} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imgWidth} height={imgHeight}
            alt="Place"
          />
        </Link>
      </div>
      <div className={`${cardInfoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button${isFavorite ? ' place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: placeRating}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{uppercaseFirstLetter(type)}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  offer: offersProp,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  cardType: PropTypes.shape({
    articleClassName: PropTypes.string,
    imgWrapperClassName: PropTypes.string,
    cardInfoClassName: PropTypes.string,
    hasPremiumMark: PropTypes.bool,
    imgWidth: PropTypes.string,
    imgHeight: PropTypes.string,
  }).isRequired,
};

export default PlaceCard;
