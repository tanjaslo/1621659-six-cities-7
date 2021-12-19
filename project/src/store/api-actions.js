import {loadOffers,
  loadOffer,
  loadReviews,
  loadOffersNearby,
  loadFavoritesOffers,
  redirectToRoute,
  requireAuthorization,
  logout as userLogout,
  setOfferLoadingStatus,
  setUserData,
  updateOffer,
  setDataLoadingStatus,
  setFavoritesLoadingStatus,
  setServerStatus} from './actions';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';
import {adaptOfferToClient,
  adaptReviewToClient,
  adaptUserToClient} from '../adapter/adapter';

export const fetchOffers = () =>
  (dispatch, _getState, api) => {
    dispatch(setServerStatus(false));
    dispatch(setDataLoadingStatus(false));
    return api.get(APIRoute.OFFERS)
      .then(({data}) => dispatch(loadOffers(data.map(adaptOfferToClient))))
      .then(() => {
        dispatch(setServerStatus(true));
        dispatch(setDataLoadingStatus(true));
      })
      .catch(() => {
        dispatch(loadOffers([]));
        dispatch(setServerStatus(false));
      });
  };

export const fetchOffer = (id) => (dispatch, _getState, api) => {
  dispatch(setOfferLoadingStatus(false));
  return api.get(`${APIRoute.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadOffer(adaptOfferToClient(data))))
    .then(() => dispatch(setOfferLoadingStatus(true)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)));
};

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({data}) => dispatch(loadReviews(data.map(adaptReviewToClient))))
);

export const fetchOffersNearby = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}/${id}${APIRoute.OFFERS_NEARBY}`)
    .then(({data}) => dispatch(loadOffersNearby(data.map(adaptOfferToClient))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((data) => dispatch(setUserData(adaptUserToClient(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))));

export const login = ({login: email, password}) =>
  (dispatch, _getState, api) => (
    api.post(APIRoute.LOGIN, {email, password})
      .then(({data}) => {
        localStorage.setItem('token', data.token);
        dispatch(setUserData(adaptUserToClient(data)));
      })
      .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
      .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
  );

export const logout = () =>
  (dispatch, _getState, api) => (
    api.delete(APIRoute.LOGOUT)
      .then(() => localStorage.removeItem('token'))
      .then(() => dispatch(userLogout()))
      .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
  );

export const postReview = ({id, comment, rating}) =>
  (dispatch, _getState, api) => (
    api.post(`${APIRoute.REVIEWS}/${id}`,
      {comment, rating})
      .then(({data}) => dispatch(loadReviews(data.map(adaptReviewToClient))))
  );

export const fetchFavoritesOffers = () =>
  (dispatch, _getState, api) => {
    dispatch(setFavoritesLoadingStatus(false));
    return api.get(APIRoute.FAVORITES)
      .then(({data}) => dispatch(loadFavoritesOffers(data.map(adaptOfferToClient))))
      .then(() => dispatch(setFavoritesLoadingStatus(true)));
  };

export const setFavorites = ({id, status}) =>
  (dispatch, _getState, api) => (
    api.post(`${APIRoute.FAVORITES}/${id}/${status}`)
      .then(({data}) => dispatch(updateOffer(adaptOfferToClient(data))))
      .catch(() => dispatch(redirectToRoute(AppRoute.LOGIN)))
  );
