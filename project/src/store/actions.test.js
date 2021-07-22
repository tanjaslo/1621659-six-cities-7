
import {
  ActionType,
  changeCity,
  changeSortType,
  loadFavoritesOffers,
  loadOffers,
  loadOffer,
  loadOffersNearby,
  loadReviews,
  logout,
  redirectToRoute,
  requireAuthorization,
  setFavoritesLoadingStatus,
  setOfferLoadingStatus,
  setUserData,
  updateOffer
} from './actions';

describe('Actions', () => {
  it('action creator for loading offers returns correct action', () => {
    const offers = [
      {
        bedrooms: 3,
        city: 'Amsterdam',
        id: 1,
        isFavorite: false,
        price: 250,
        title: 'Big spasious flat',
      },
      {
        bedrooms: 2,
        city: 'Paris',
        id: 2,
        isFavorite: true,
        price: 120,
        title: 'Beautiful & luxurious studio at great location',
      },
      {
        bedrooms: 5,
        city: 'Paris',
        id: 3,
        isFavorite: false,
        price: 140,
        title: 'Large luxury house in a quiet place',
      },
    ];
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(loadOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for loading offer, returns correct action', () => {
    const offer = {
      bedrooms: 3,
      city: 'Amsterdam',
      id: 1,
      isFavorite: false,
      price: 250,
      title: 'Big spasious flat',
    };
    const expectedAction = {
      type: ActionType.LOAD_OFFER,
      payload: offer,
    };

    expect(loadOffer(offer)).toEqual(expectedAction);
  });

  it('action creator for loading favorites, returns correct action', () => {
    const offers = [
      {
        bedrooms: 3,
        city: 'Amsterdam',
        id: 1,
        isFavorite: false,
        price: 250,
        title: 'Big spasious flat',
      },
      {
        bedrooms: 2,
        city: 'Paris',
        id: 2,
        isFavorite: true,
        price: 120,
        title: 'Beautiful & luxurious studio at great location',
      },
      {
        bedrooms: 5,
        city: 'Paris',
        id: 3,
        isFavorite: false,
        price: 140,
        title: 'Large luxury house in a quiet place',
      },
    ];
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES_OFFERS,
      payload: offers,
    };

    expect(loadFavoritesOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for loading offers nearby, returns correct action', () => {
    const offers = [
      {
        bedrooms: 3,
        city: 'Amsterdam',
        id: 1,
        isFavorite: false,
        price: 250,
        title: 'Big spasious flat',
      },
      {
        bedrooms: 2,
        city: 'Paris',
        id: 2,
        isFavorite: true,
        price: 120,
        title: 'Beautiful & luxurious studio at great location',
      },
      {
        bedrooms: 5,
        city: 'Paris',
        id: 3,
        isFavorite: false,
        price: 140,
        title: 'Large luxury house in a quiet place',
      },
    ];
    const expectedAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offers,
    };

    expect(loadOffersNearby(offers)).toEqual(expectedAction);
  });

  it('action creator for loading reviews returns correct action', () => {
    const reviews = [
      {
        rating: 3,
        text: 'bubububu',
      },
      {
        rating: 5,
        text: 'aaaaaaaa',
      },
      {
        rating: 4,
        text: 'eeeeeeee',
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };

    expect(loadReviews(reviews)).toEqual(expectedAction);
  });

  it('action creator for changing city returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'Amsterdam',
    };

    expect(changeCity('Amsterdam')).toEqual(expectedAction);
  });

  it('action creator for changing sort type returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: 'high',
    };

    expect(changeSortType('low')).toEqual(expectedAction);
  });

  it('action creator for logging out returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('action creator for redirecting returns correct action', () => {
    const url = '/login';
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url,
    };

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });

  it('action creator for require authorization returns correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: 'AUTH',
    };

    expect(requireAuthorization('AUTH')).toEqual(expectedAction);
  });

  it('action creator for setting is offer loaded status returns correct action', () => {
    const isLoaded = false;

    const expectedAction = {
      type: ActionType.SET_IS_OFFER_DATA_LOADED,
      payload: isLoaded,
    };

    expect(setOfferLoadingStatus(isLoaded)).toEqual(expectedAction);
  });

  it('action creator for setting favorite offers loading status returns correct action', () => {
    const isLoaded = false;

    const expectedAction = {
      type: ActionType.SET_ARE_FAVORITES_LOADED,
      payload: isLoaded,
    };

    expect(setFavoritesLoadingStatus(isLoaded)).toEqual(expectedAction);
  });

  it('action creator for setting user data returns correct action', () => {
    const user = {
      id: 1,
      username: 'Tanja',
      email: 'tanja@gmail.com',
      password: 111,
    };

    const expectedAction = {
      type: ActionType.SET_USER_DATA,
      payload: user,
    };

    expect(setUserData(user)).toEqual(expectedAction);
  });

  it('action creator for updating offer returns correct action', () => {
    const offer = {
      bedrooms: 3,
      city: 'Amsterdam',
      id: 1,
      isFavorite: false,
      price: 250,
      title: 'Big spasious flat',
    };
    const expectedAction = {
      type: ActionType.UPDATE_OFFER,
      payload: offer,
    };

    expect(updateOffer(offer)).toEqual(expectedAction);
  });
});
