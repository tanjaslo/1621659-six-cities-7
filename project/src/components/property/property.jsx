import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer.prop';
import reviewProp from '../../prop-types/review.prop';
import {useSelector} from 'react-redux';
import FavoritesButton from '../favorites-button/favorites-button';
import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewForm from '../review-form/review-form';
import {AuthorizationStatus, Types} from '../../const';
import {getRating, uppercaseFirstLetter} from '../../utils';
import {getAuthorizationStatus} from '../../store/userData/selectors';

const MAX_ROOM_IMAGES = 6;
const MAX_NEARBY_OFFERS = 3;

function Property({offer, reviews, offersNearby}) {
  const {id, bedrooms, goods, images, title, price, type, description, maxAdults, isPremium, isFavorite, rating, host, city} = offer;
  const {avatarUrl, isPro, name} = host;

  const placeRating = getRating(rating);
  const nearOffers = offersNearby.filter((item) => item !== offer).slice(0, MAX_NEARBY_OFFERS);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.slice(0, MAX_ROOM_IMAGES).map((imageUrl, i) => (
              <div className="property__image-wrapper" key={imageUrl + i.toString()}>
                <img className="property__image" src={imageUrl} alt={uppercaseFirstLetter(type)} />
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && (
              <div className="property__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="property__name-wrapper">
              <h1 className="property__name">{title}</h1>
              <FavoritesButton
                id={id}
                buttonType={Types.ROOM_PAGE}
                isFavorite={isFavorite}
              />
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: placeRating}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {uppercaseFirstLetter(type)}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((good, i) => (
                  <li className="property__inside-item" key={good + i.toString()}>
                    {good}
                  </li>
                ))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="property__avatar user__avatar"
                    src={avatarUrl}
                    style={{width: '74', height: '74'}}
                    alt="Host avatar"
                  />
                </div>
                <span className="property__user-name">
                  {name}
                </span>
                {isPro && (
                  <span className="property__user-status">Pro</span>
                )}
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <ReviewsList reviews={reviews} />
              {authorizationStatus === AuthorizationStatus.AUTH && (
                <ReviewForm id={id} />)}
            </section>
          </div>
        </div>
        <section className="property__map map">
          <Map
            city={city}
            offers={[offer, ...offersNearby]}
            activeCard={offer}
          />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <PlacesList
              offers={nearOffers}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            />
          </div>
        </section>
      </div>
    </>
  );
}

Property.propTypes = {
  offer: offerProp,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
  offersNearby: PropTypes.arrayOf(offerProp).isRequired,
};

export default Property;
