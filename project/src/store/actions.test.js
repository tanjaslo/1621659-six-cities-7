
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
});
