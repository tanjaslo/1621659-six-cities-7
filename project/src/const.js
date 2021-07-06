export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const DEFAULT_CITY = CITIES[0];

export const APIRoutes = {
  OFFERS: '/hotels',
  REVIEWS: '/comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
  NEARBY_OFFERS: '/nearby',
};

export const AppRoutes = {
  FAVORITES: '/favorites',
  LOGIN: '/login',
  MAIN: '/',
  ROOM: '/offer/:id',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const CardTypes = {
  MAIN_PAGE: {
    articleClassName: 'cities__place-card',
    imgWrapperClassName: 'cities__image-wrapper',
    cardInfoClassName: '',
    hasPremiumMark: true,
    imgWidth: '260',
    imgHeight: '200',
  },
  FAVORITES_PAGE: {
    articleClassName: 'favorites__card',
    imgWrapperClassName: 'favorites__image-wrapper',
    cardInfoClassName: 'favorites__card-info',
    hasPremiumMark: false,
    imgWidth: '150',
    imgHeight: '110',
  },
  ROOM_PAGE: {
    articleClassName: 'near-places__card',
    imgWrapperClassName: 'near-places__image-wrapper',
    cardInfoClassName: '',
    hasPremiumMark: false,
    imgWidth: '260',
    imgHeight: '200',
  },
};

export const Ratings = {
  PERFECT: {
    value: 5,
    title: 'perfect',
  },
  GOOD: {
    value: 4,
    title: 'good',
  },
  NOT_BAD: {
    value: 3,
    title: 'not bad',
  },
  BADLY: {
    value: 2,
    title: 'badly',
  },
  TERRIBLY: {
    value: 1,
    title: 'terribly',
  },
};

export const SortTypes = {
  POPULAR: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};
