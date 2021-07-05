export const ActionType = {
  CHANGE_CITY: 'cities/changeCity',
  CHANGE_SORT_TYPE: 'main/changeSortType',
  LOAD_OFFERS: 'offers/loadOffers',
  LOAD_REVIEWS: 'reviews/loadReviews',
  REDIRECT_TO_ROUTE: 'cities/redirectToRoute',
  REQUIRED_AUTHORIZATION: 'user/requireAuthorization',
  LOAD_USER_DATA: 'user/loadUserData',
  LOGOUT: 'user/logout',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  loadUserData: (userData) => ({
    type: ActionType.LOAD_USER_DATA,
    payload: userData,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
