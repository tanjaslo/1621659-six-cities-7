import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import offerProp from '../../../prop-types/offer.prop';
import reviewProp from '../../../prop-types/review.prop';
import PlacesList from '../../places-list/places-list';
import Header from '../../header/header';
import Map from '../../map/map';
import ReviewsList from '../../reviews-list/reviews-list';
import ReviewForm from '../../review-form/review-form';
import {getRating, uppercaseFirstLetter} from '../../../utils';

function RoomPage({offers, reviews}) {
  const {id} = useParams();
  const room = offers.find((offer) => offer.id === Number(id));
  const {bedrooms, goods, images, title, price, type, description, maxAdults, isPremium, isFavorite, rating, host} = room;
  const {avatarUrl, isPro, name} = host;

  const placeRating = getRating(rating);
  const nearOffers = offers.filter((item) => item !== room).slice(0, 3);

  const [activeCard, setActiveCard] = useState(room);

  const onCardHover = (cardId) => {
    const currentCard = offers.find((offer) => offer.id === Number(cardId));
    setActiveCard(currentCard);
  };

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((imageUrl, i) => (
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
                <button className={`property__bookmark-button button${isFavorite ? ' property__bookmark-button--active' : ''}`} type="button">
                  <svg className="property__bookmark-icon" style={{width: '31', height: '33'}}>
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
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
                <h2 className="reviews__title">Reviews &middot;
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={offers[0].city} offers={offers} activeCard={activeCard}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList
              offers={nearOffers}
              onMouseEnter={onCardHover}
              onMouseLeave={() => setActiveCard(room)}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

RoomPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

const mapStateToProps = ({offers, reviews}) => ({
  offers,
  reviews,
});

export {RoomPage};
export default connect(mapStateToProps)(RoomPage);
