import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoutes, AppRoutes} from '../const';
import {adaptOfferToClient,
  adaptReviewToClient,
  adaptUserToClient} from '../adapter/adapter';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map(adaptOfferToClient))))
);

export const fetchRoom = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setRoomLoadingStatus(false));
  api.get(`${APIRoutes.OFFERS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadRoom(adaptOfferToClient(data))))
    .then(() => dispatch(ActionCreator.setRoomLoadingStatus(true)))
    .catch(() => {
      dispatch(ActionCreator.redirectToRoute(AppRoutes.NOT_FOUND));
    });
};

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutes.REVIEWS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data.map(adaptReviewToClient))))
);

export const fetchOffersNearby = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutes.OFFERS}/${id}${APIRoutes.OFFERS_NEARBY}`)
    .then(({data}) => dispatch(ActionCreator.loadOffersNearby(data.map(adaptOfferToClient))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGIN)
    .then(({data}) => dispatch(ActionCreator.loadUserData(adaptUserToClient(data))))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) =>
  (dispatch, _getState, api) => (
    api.post(APIRoutes.LOGIN, {email, password})
      .then(({data}) => {
        localStorage.setItem('token', data.token);
        dispatch(ActionCreator.loadUserData(adaptUserToClient(data)));
      })
      .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
      .then(() => dispatch(ActionCreator.redirectToRoute(AppRoutes.MAIN)))
  );

export const logout = () =>
  (dispatch, _getState, api) => (
    api.delete(APIRoutes.LOGOUT)
      .then(() => localStorage.removeItem('token'))
      .then(() => dispatch(ActionCreator.logout()))
      .then(() => dispatch(ActionCreator.redirectToRoute(AppRoutes.MAIN)))
  );

export const postReview = ({id, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoutes.REVIEWS}/${id}`,
    {comment, rating},
    {
      headers: {
        'x-token': localStorage.getItem('token'),
      },
    })
    .then(({data}) => dispatch(ActionCreator.loadReviews(data.map(adaptReviewToClient))))
);
