import {SortType} from './const';

const STARS_COUNT = 5;

export const getRating = (rating) =>
  `${((rating / STARS_COUNT) * 100)}%`;

export const getSortedOffers = (sortType, offers) => {
  switch (sortType) {
    case SortType.PRICE_LOW:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortType.PRICE_HIGH:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortType.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    case SortType.POPULAR:
    default:
      return offers;
  }
};

export const uppercaseFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const updateOffers = (offers, payload) => {
  if (offers.some((offer) => offer.id === payload.id)) {
    offers.find((offer) => offer.id === payload.id)
      .isFavorite = payload.isFavorite;
  }
  return offers;
};

export const updateOfferIsFavorite = (offer, payload) => {
  if (offer.id === payload.id) {
    offer.isFavorite = payload.isFavorite;
  }
  return offer;
};

export const updateFavoritesOffers = (offers, payload) => {
  if (payload.isFavorite) {
    return [...offers, payload];
  }
  return offers.filter((offer) => offer.id !== payload.id);
};
