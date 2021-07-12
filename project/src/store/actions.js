import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_ROOM: 'data/loadRoom',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_OFFERS_NEARBY: 'data/loadOffersNearby',
  //SET_IS_ROOM_DATA_LOADED: 'data/setIsRoomDataLoaded',
  CHANGE_CITY: 'ui/changeCity',
  CHANGE_SORT_TYPE: 'ui/changeSortType',
  REDIRECT_TO_ROUTE: 'ui/redirectToRoute',
  SET_USER_DATA: 'user/setUserData',
  LOGOUT: 'user/logout',
  REQUIRED_AUTHORIZATION: 'user/requireAuthorization',
};

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadRoom = createAction(ActionType.LOAD_ROOM, (room) => ({
  payload: room,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const loadOffersNearby = createAction(ActionType.LOAD_OFFERS_NEARBY, (offersNearby) => ({
  payload: offersNearby,
}));

/* export const setRoomLoadingStatus = createAction(ActionType.SET_IS_ROOM_DATA_LOADED, (isLoaded) => ({
  payload: isLoaded,
})); */

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE, (sortType) => ({
  payload: sortType,
}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const setUserData = createAction(ActionType.SET_USER_DATA, (userData) => ({
  payload: userData,
}));

export const logout = createAction(ActionType.LOGOUT);

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));
