import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoutes} from '../const';
import {adaptOfferToClient, adaptReviewToClient} from '../adapter/adapter';

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

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) =>
  (dispatch, _getState, api) => (
    api.post(APIRoutes.LOGIN, {email, password})
      .then(({data}) => localStorage.setItem('token', data.token))
      .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
  );

export const logout = () =>
  (dispatch, _getState, api) => (
    api.delete(APIRoutes.LOGOUT)
      .then(() => localStorage.removeItem('token'))
      .then(() => dispatch(ActionCreator.logout()))
  );