import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import offerProp from '../../../prop-types/offer.prop';
import reviewProp from '../../../prop-types/review.prop';
import PlacesList from '../../places-list/places-list';
import Header from '../../header/header';
import LoadingScreen from '../../loading-screen/loading-screen';
import Map from '../../map/map';
import ReviewsList from '../../reviews-list/reviews-list';
import ReviewForm from '../../review-form/review-form';
import {getRating, uppercaseFirstLetter} from '../../../utils';
import {fetchRoom, fetchReviews, fetchOffersNearby} from '../../../store/api-actions';

const MAX_NEARBY_OFFERS = 3;
const MAX_ROOM_IMAGES = 6;

function RoomPage({room, reviews, offersNearby, loadRoomData, isRoomDataLoaded}) {
  const {id} = useParams();

  useEffect(() => {
    loadRoomData(id);
  }, [id, loadRoomData]);

  if (!isRoomDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const {bedrooms, goods, images, title, price, type, description, maxAdults, isPremium, isFavorite, rating, host, city} = room;
  const {avatarUrl, isPro, name} = host;

  const placeRating = getRating(rating);
  const nearOffers = offersNearby.filter((item) => item !== room).slice(0, MAX_NEARBY_OFFERS);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
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
            <Map
              city={city}
              offers={[room, ...offersNearby]}
              activeCard={room}
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
      </main>
    </div>
  );
}

RoomPage.propTypes = {
  room: offerProp,
  offersNearby: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
  loadRoomData: PropTypes.func.isRequired,
  isRoomDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  room: state.room,
  offersNearby: state.offersNearby,
  reviews: state.reviews,
  isRoomDataLoaded: state.isRoomDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  loadRoomData(id) {
    dispatch(fetchRoom(id));
    dispatch(fetchOffersNearby(id));
    dispatch(fetchReviews(id));
  },
});

export {RoomPage};
export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
