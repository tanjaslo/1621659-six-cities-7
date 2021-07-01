import {SortTypes} from './const';

const STARS_COUNT = 5;

export const getOffersByCity = (offers, activeCity) =>
  offers.filter(({city}) => city.name  === activeCity);

export const getRating = (rating) =>
  `${((rating / STARS_COUNT) * 100)}%`;

export const getSortedOffers = (sortType, offers) => {
  switch (sortType) {
    case SortTypes.PRICE_LOW:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortTypes.PRICE_HIGH:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortTypes.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    case SortTypes.POPULAR:
    default:
      return offers;
  }
};

export const uppercaseFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);
