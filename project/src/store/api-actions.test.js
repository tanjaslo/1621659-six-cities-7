import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './actions';
import {
  checkAuth,
  fetchFavoritesOffers,
  fetchOffer,
  fetchOffers,
  fetchOffersNearby,
  fetchReviews,
  postReview,
  setFavorites,
  login,
  logout
} from './api-actions';
import {APIRoutes, AppRoutes, AuthorizationStatus} from '../const';
import {adaptReviewToClient,
  adaptOfferToClient,
  adaptUserToClient} from '../adapter/adapter';

let api = null;

const comment = 'comfortable bed';
const rating = 5;

const fakeUser = {
  avatarUrl: 'img/1.png',
  email: 'Oliver.conner@gmail.com',
  id: 1,
  isPro: false,
  name: 'Oliver.conner',
};

const fakeReview = {
  comment: 'The room was quite spacious, comfortable bed, staff was super helpful! Location is great.',
  date: '2020-07-13T11:22:13.375Z',
  id: 1,
  rating: 5,
  user: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 1,
    isPro: true,
    name: 'Angelina',
  },
};

const fakeOffer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 48.864716,
      longitude: 2.3,
      zoom: 10,
    },
    name: 'Paris',
  },
  description:
    'Big spasious flat is situated in the heart of the city centre within walking distance of museums, the main shopping area and night life. You will find plenty of cafés and restaurants in the area.',
  goods: [
    'Air conditioning',
    'Wi-Fi',
    'Towels',
    'Heating',
    'Cable TV',
    'Fridge',
  ],
  host: {
    avatarUrl: 'img/1.png',
    id: 1,
    isPro: true,
    name: 'Corine',
  },
  id: 1,
  images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/room.jpg'],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 48.73564787,
    longitude: 2.34556,
    zoom: 8,
  },
  'max_adults': 5,
  'preview_image': 'img/test.jpg',
  price: 300,
  rating: 5,
  title: 'Central apartment',
  type: 'apartment',
};

const userData = {
  'avatar_url': 'img/1.png',
  email: 'Oliver.conner@gmail.com',
  id: 1,
  'is_pro': true,
  name: 'Oliver.conner',
  token: 'nbfA8gWdfiOqwEfd2s',
};

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET checkAuth', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoutes.LOGIN)
      .reply(200, userData);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_DATA,
          payload: adaptUserToClient(userData),
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffers();

    apiMock
      .onGet(APIRoutes.OFFERS)
      .reply(200, [fakeOffer]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [adaptOfferToClient(fakeOffer)],
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const offersNearbyLoader = fetchOffersNearby(id);

    apiMock
      .onGet(`${APIRoutes.OFFERS}/${id}${APIRoutes.OFFERS_NEARBY}`)
      .reply(200, [fakeOffer]);

    return offersNearbyLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_NEARBY,
          payload: [adaptOfferToClient(fakeOffer)],
        });
      });
  });

  it('should make a correct API call to GET /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = 1;
    const reviewsLoader = fetchReviews(fakeId);

    apiMock
      .onGet(`${APIRoutes.REVIEWS}/${fakeId}`)
      .reply(200, [fakeReview]);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [adaptReviewToClient(fakeReview)],
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const offerLoader = fetchOffer(id);

    apiMock
      .onGet(`${APIRoutes.OFFERS}/${id}`)
      .reply(200, fakeOffer);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_IS_OFFER_DATA_LOADED,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_OFFER,
          payload: adaptOfferToClient(fakeOffer),
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_IS_OFFER_DATA_LOADED,
          payload: true,
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoader = fetchFavoritesOffers();

    apiMock
      .onGet(APIRoutes.FAVORITES)
      .reply(200, [fakeOffer]);

    return favoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_ARE_FAVORITES_LOADED,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_FAVORITES_OFFERS,
          payload: [adaptOfferToClient(fakeOffer)],
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_ARE_FAVORITES_LOADED,
          payload: true,
        });
      });
  });

  it('should make a correct API call to POST /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 5;
    const reviewSender = postReview({id: id, comment: comment, rating: rating});

    apiMock
      .onPost(`${APIRoutes.REVIEWS}/${id}`, {comment, rating})
      .reply(200, [fakeReview]);

    return reviewSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [adaptReviewToClient(fakeReview)],
        });
      });
  });

  it('should make a correct API call to POST /favorite/:id/:status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const status = 0;
    const setFavoritesSender = setFavorites({id, status});

    apiMock
      .onPost(`${APIRoutes.FAVORITES}/${id}/${status}`)
      .reply(200, fakeOffer);

    return setFavoritesSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFER,
          payload: adaptOfferToClient(fakeOffer),
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginSender = login({login: fakeUser.email, password: 'qwerty' });

    apiMock.onPost(APIRoutes.LOGIN).reply(200, userData);

    return loginSender(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_DATA,
          payload: adaptUserToClient(userData),
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoutes.MAIN,
        });
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const userLogout = logout();

    Storage.prototype.removeItem = jest.fn();

    apiMock
      .onDelete(APIRoutes.LOGOUT)
      .reply(204, [{fake: true}]);

    return userLogout(dispatch, jest.fn(() => {}), api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).nthCalledWith(1, {
          type: ActionType.LOGOUT,
        });

        expect(dispatch).nthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoutes.MAIN,
        });

        expect(Storage.prototype.removeItem).toBeCalledTimes(1);
        expect(Storage.prototype.removeItem).nthCalledWith(1, 'token');
      });
  });
});
