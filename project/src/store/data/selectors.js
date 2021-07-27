import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';
import {getActiveCity} from '../ui/selectors';

const MAX_REVIEWS_COUNT = 5;

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getCurrentOffer = (state) => state[NameSpace.DATA].currentOffer;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getOffersNearby = (state) => state[NameSpace.DATA].offersNearby;
export const getFavoritesOffers = (state) => state[NameSpace.DATA].favoritesOffers;
export const getDataLoadingStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getFavoritesLoadingStatus = (state) => state[NameSpace.DATA].areFavoritesLoaded;
export const getOfferLoadingStatus = (state) => state[NameSpace.DATA].isOfferDataLoaded;

export const getCurrentOffers = createSelector(
  [getOffers, getActiveCity],
  (offers, activeCity) => offers.filter(({city}) => city.name  === activeCity),
);

export const getSortedReviews = createSelector(
  getReviews,
  (reviews) => reviews
    .slice(0, MAX_REVIEWS_COUNT)
    .sort((firstReview, secondReview) =>
      (new Date(secondReview.date) - new Date(firstReview.date))));
