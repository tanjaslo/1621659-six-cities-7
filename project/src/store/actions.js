import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_REVIEWS: 'data/loadReviews',
  LOAD_OFFERS_NEARBY: 'data/loadOffersNearby',
  LOAD_FAVORITES_OFFERS: 'data/loadFavoritesOffers',
  UPDATE_OFFER: 'data/updateOffer',
  SET_IS_OFFER_DATA_LOADED: 'data/setIsOfferDataLoaded',
  SET_ARE_FAVORITES_LOADED: 'data/setAreFavoritesLoaded',
  SET_IS_SERVER_AVAILABLE: 'data/setIsServerAvailable',
  CHANGE_CITY: 'ui/changeCity',
  CHANGE_SORT_TYPE: 'ui/changeSortType',
  REDIRECT_TO_ROUTE: 'ui/redirectToRoute',
  SET_USER_DATA: 'user/setUserData',
  LOGOUT: 'user/logout',
  REQUIRE_AUTHORIZATION: 'user/requireAuthorization',
};

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => ({
  payload: offer,
}));

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const loadOffersNearby = createAction(ActionType.LOAD_OFFERS_NEARBY, (offersNearby) => ({
  payload: offersNearby,
}));

export const loadFavoritesOffers = createAction(ActionType.LOAD_FAVORITES_OFFERS, (favoritesOffers) => ({
  payload: favoritesOffers,
}));

export const setFavoritesLoadingStatus = createAction(ActionType.SET_ARE_FAVORITES_LOADED, (status) => ({
  payload: status,
}));

export const setOfferLoadingStatus = createAction(ActionType.SET_IS_OFFER_DATA_LOADED, (status) => ({
  payload: status,
}));

export const setServerStatus = createAction(ActionType.SET_IS_SERVER_AVAILABLE, (status) => ({
  payload: status,
}));

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

export const requireAuthorization = createAction(ActionType.REQUIRE_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const updateOffer = createAction(ActionType.UPDATE_OFFER, (offer) => ({
  payload: offer,
}));
