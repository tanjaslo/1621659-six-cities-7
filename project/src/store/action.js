export const ActionType = {
  CHANGE_CITY: 'cities/changeCity',
  CHANGE_SORT_TYPE: 'main/changeSortType',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_ROOM: 'data/loadRoom',
  LOAD_REVIEWS: 'data/loadReviews',
  REDIRECT_TO_ROUTE: 'cities/redirectToRoute',
  REQUIRED_AUTHORIZATION: 'user/requireAuthorization',
  LOAD_USER_DATA: 'user/loadUserData',
  LOAD_OFFERS_NEARBY: 'data/loadOffersNearby',
  LOGOUT: 'user/logout',
  SET_IS_ROOM_DATA_LOADED: 'offers/setIsRoomDataLoaded',
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
  loadRoom: (room) => ({
    type: ActionType.LOAD_ROOM,
    payload: room,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  loadOffersNearby: (offersNearby) => ({
    type: ActionType.LOAD_OFFERS_NEARBY,
    payload: offersNearby,
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
  setRoomLoadingStatus: (isLoaded) => ({
    type: ActionType.SET_IS_ROOM_DATA_LOADED,
    payload: isLoaded,
  }),
};
