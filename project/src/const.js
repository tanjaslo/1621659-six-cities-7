export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const DEFAULT_CITY = CITIES[0];
export const MAX_REVIEWS_COUNT = 10;

export const APIRoute = {
  OFFERS: '/hotels',
  REVIEWS: '/comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
  OFFERS_NEARBY: '/nearby',
  FAVORITES: '/favorite',
};

export const AppRoute = {
  FAVORITES: '/favorites',
  LOGIN: '/login',
  MAIN: '/',
  ROOM: '/offer/:id',
  NOT_FOUND: '/not-found',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const CardType = {
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

export const FavoritesButtonType = {
  CARD: {
    buttonClassName: 'place-card',
    imgWidth: '18',
    imgHeight: '19',
  },
  ROOM_PAGE: {
    buttonClassName: 'property',
    imgWidth: '31',
    imgHeight: '33',
  },
};

export const Type = {
  MAIN_PAGE: 'MAIN_PAGE',
  FAVORITES_PAGE: 'FAVORITES_PAGE',
  ROOM_PAGE: 'ROOM_PAGE',
  CARD: 'CARD',
};


export const Rating = {
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

export const ErrorMessage = {
  DEFAULT: 'Something went wrong.',
  OFFLINE: 'The internet connection appears to be offline.',
  REVIEW_ERROR: 'Your review was not sent. Please try again.',
};

export const SortType = {
  POPULAR: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};
