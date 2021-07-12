import {loadOffers,
  loadRoom,
  loadReviews,
  loadOffersNearby,
  redirectToRoute,
  requireAuthorization,
  logout as userLogout,
  //setRoomLoadingStatus,
  setUserData} from './actions';
import {AuthorizationStatus, APIRoutes, AppRoutes} from '../const';
import {adaptOfferToClient,
  adaptReviewToClient,
  adaptUserToClient} from '../adapter/adapter';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.OFFERS)
    .then(({data}) => dispatch(loadOffers(data.map(adaptOfferToClient))))
);

export const fetchRoom = (id) => (dispatch, _getState, api) => {
  // dispatch(setRoomLoadingStatus(false));
  api.get(`${APIRoutes.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadRoom(adaptOfferToClient(data))))
    //.then(() => dispatch(setRoomLoadingStatus(true)))
    .catch(() => {
      dispatch(redirectToRoute(AppRoutes.NOT_FOUND));
    });
};

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutes.REVIEWS}/${id}`)
    .then(({data}) => dispatch(loadReviews(data.map(adaptReviewToClient))))
);

export const fetchOffersNearby = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutes.OFFERS}/${id}${APIRoutes.OFFERS_NEARBY}`)
    .then(({data}) => dispatch(loadOffersNearby(data.map(adaptOfferToClient))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGIN)
    .then(({data}) => dispatch(setUserData(adaptUserToClient(data))))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) =>
  (dispatch, _getState, api) => (
    api.post(APIRoutes.LOGIN, {email, password})
      .then(({data}) => {
        localStorage.setItem('token', data.token);
        dispatch(setUserData(adaptUserToClient(data)));
      })
      .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
      .then(() => dispatch(redirectToRoute(AppRoutes.MAIN)))
  );

export const logout = () =>
  (dispatch, _getState, api) => (
    api.delete(APIRoutes.LOGOUT)
      .then(() => localStorage.removeItem('token'))
      .then(() => dispatch(userLogout()))
      .then(() => dispatch(redirectToRoute(AppRoutes.MAIN)))
  );

export const postReview = ({id, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoutes.REVIEWS}/${id}`,
    {comment, rating},
    {
      headers: {
        'x-token': localStorage.getItem('token'),
      },
    })
    .then(({data}) => dispatch(loadReviews(data.map(adaptReviewToClient))))
);
