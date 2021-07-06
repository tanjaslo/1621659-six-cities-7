import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoutes, AppRoutes} from '../const';
import {adaptOfferToClient,
  adaptReviewToClient,
  adaptUserToClient} from '../adapter/adapter';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.OFFERS)
    .then(({data}) => {
      const offers = data.map((offer) => adaptOfferToClient(offer));
      return offers;
    })
    .then((offers) => dispatch(ActionCreator.loadOffers(offers)))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutes.REVIEWS}/${id}`)
    .then(({data}) => {
      const reviews = data.map((review) => adaptReviewToClient(review));
      return reviews;
    })
    .then((reviews) => dispatch(ActionCreator.loadReviews(reviews)))
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoutes.OFFERS}/${id}${APIRoutes.NEARBY_OFFERS}`)
    .then(({data}) => dispatch(ActionCreator.loadNearbyOffers(data.map(adaptOfferToClient))))
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
