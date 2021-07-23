import {data} from './data';
import {ActionType} from '../actions';

const offer = {
  bedrooms: 2,
  city: 'Paris',
  id: 2,
  isFavorite: true,
  price: 120,
  title: 'Beautiful & luxurious studio at great location',
};

const offers = [
  {
    id: 0,
    isFavorite: false,
  },
  {
    id: 1,
    isFavorite: true,
  },
  {
    id: 2,
    isFavorite: true,
  },
  {
    id: 3,
    isFavorite: false,
  },
];

const favoriteOffer = {
  id: 0,
  isFavorite: true,
};

const offerToUpdate = {
  id: 0,
  isFavorite: false,
};

const favoritesOffers = [
  {
    id: 1,
    isFavorite: true,
  },
  {
    id: 2,
    isFavorite: true,
  },
];

const offersNearby = [
  {
    id: 0,
    isFavorite: false,
  },
  {
    id: 1,
    isFavorite: true,
  },
  {
    id: 2,
    isFavorite: true,
  },
];

const reviews = [
  {
    comment:
      'The room was quite spacious, comfortable bed, staff was super helpful! Location is great. Nice priced, good value for Amsterdam. Definitely will come back again.',
    date: '2020-07-13T11:22:13.375Z',
    id: 1,
    rating: 5,
  },
  {
    comment:
      'Staff were extremely accommodating, let us check out an hour later free of charge! Over all decor of the hotel was fabulous. Loved it and would stay again.',
    date: '2020-07-12T11:22:13.375Z',
    id: 2,
    rating: 2,
  },
  {
    comment:
      ' Our room was lovely, really large and the bed was huge!! Bathroom small but exactly what you need, wet room tiled style. Located less than 5mins walk from central station and 5 mins from the district. Plenty of food places on the same road and shopping the road behind, right in the heart of everything. Staff were lovely and went above expectations when I said in the booking it was my partners birthday, which was a lovely surprise.',
    date: '2020-07-11T11:22:13.375Z',
    id: 3,
    rating: 5,
  },
];

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data(undefined, {}))
      .toEqual({
        offers: [],
        currentOffer: {},
        reviews: [],
        offersNearby: [],
        favoritesOffers: [],
        isDataLoaded: false,
        isOfferDataLoaded: false,
        areFavoritesLoaded: false,
      });
  });

  it('should update offers by load offers', () => {
    const state = {
      offers: [],
      currentOffer: {},
      reviews: [],
      offersNearby: [],
      favoritesOffers: [],
      isDataLoaded: false,
      isOfferDataLoaded: false,
      areFavoritesLoaded: false,
    };
    const loadOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
    expect(data(state, loadOffersAction))
      .toEqual({
        offers: offers,
        currentOffer: {},
        reviews: [],
        offersNearby: [],
        favoritesOffers: [],
        isDataLoaded: true,
        isOfferDataLoaded: false,
        areFavoritesLoaded: false,
      });
  });

  it('should update reviews by load reviews', () => {
    const state = {
      offers: [],
      currentOffer: {},
      reviews: [],
      offersNearby: [],
      favoritesOffers: [],
      isDataLoaded: false,
      isOfferDataLoaded: false,
      areFavoritesLoaded: false,
    };
    const loadReviewsAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
    expect(data(state, loadReviewsAction))
      .toEqual({
        offers: [],
        currentOffer: {},
        reviews: reviews,
        offersNearby: [],
        favoritesOffers: [],
        isDataLoaded: false,
        isOfferDataLoaded: false,
        areFavoritesLoaded: false,
      });
  });

  it('should update offers nearby by load offers nearby', () => {
    const state = {
      offers: [],
      currentOffer: {},
      reviews: [],
      offersNearby: [],
      favoritesOffers: [],
      isDataLoaded: false,
      isOfferDataLoaded: false,
      areFavoritesLoaded: false,
    };
    const loadOffersNearbyAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offersNearby,
    };

    expect(data(state, loadOffersNearbyAction))
      .toEqual({
        offers: [],
        currentOffer: {},
        reviews: [],
        offersNearby: offersNearby,
        favoritesOffers: [],
        isDataLoaded: false,
        isOfferDataLoaded: false,
        areFavoritesLoaded: false,
      });
  });

  it('should update current offer by load offer', () => {
    const state = {
      offers: [],
      currentOffer: {},
      reviews: [],
      offersNearby: [],
      favoritesOffers: [],
      isDataLoaded: false,
      isOfferDataLoaded: false,
      areFavoritesLoaded: false,
    };
    const loadOfferAction = {
      type: ActionType.LOAD_OFFER,
      payload: offer,
    };

    expect(data(state, loadOfferAction))
      .toEqual({
        offers: [],
        currentOffer: offer,
        reviews: [],
        offersNearby: [],
        favoritesOffers: [],
        isDataLoaded: false,
        isOfferDataLoaded: true,
        areFavoritesLoaded: false,
      });
  });

  it('should set isOfferLoaded status to the given value', () => {
    const state = {
      offers: [],
      currentOffer: {},
      reviews: [],
      offersNearby: [],
      favoritesOffers: [],
      isDataLoaded: false,
      isOfferDataLoaded: false,
      areFavoritesLoaded: false,
    };
    const setOfferLoadingStatus = {
      type: ActionType.SET_IS_OFFER_DATA_LOADED,
      payload: true,
    };

    expect(data(state, setOfferLoadingStatus))
      .toEqual({
        offers: [],
        currentOffer: {},
        reviews: [],
        offersNearby: [],
        favoritesOffers: [],
        isDataLoaded: false,
        isOfferDataLoaded: true,
        areFavoritesLoaded: false,
      });
  });

  it('should set areFavoritesLoaded status to the given value', () => {
    const state = {
      offers: [],
      currentOffer: {},
      reviews: [],
      offersNearby: [],
      favoritesOffers: [],
      isDataLoaded: false,
      isOfferDataLoaded: false,
      areFavoritesLoaded: false,
    };
    const setAreFavoriteOffersLoadedAction = {
      type: ActionType.SET_ARE_FAVORITES_LOADED,
      payload: true,
    };

    expect(data(state, setAreFavoriteOffersLoadedAction))
      .toEqual({
        offers: [],
        currentOffer: {},
        reviews: [],
        offersNearby: [],
        favoritesOffers: [],
        isDataLoaded: false,
        isOfferDataLoaded: false,
        areFavoritesLoaded: true,
      });
  });

  it('should update offer, offers, offers nearby, favorites by given favorite offer', () => {
    const state = {
      offers: offers,
      currentOffer: offerToUpdate,
      reviews: reviews,
      offersNearby: offersNearby,
      favoritesOffers: favoritesOffers,
      isDataLoaded: true,
      isOfferDataLoaded: true,
      areFavoritesLoaded: true,
    };
    const updatedOffers = [
      {
        id: 0,
        isFavorite: true,
      },
      {
        id: 1,
        isFavorite: true,
      },
      {
        id: 2,
        isFavorite: true,
      },
      {
        id: 3,
        isFavorite: false,
      },
    ];

    const updatedFavoritesOffers = [
      {
        id: 1,
        isFavorite: true,
      },
      {
        id: 2,
        isFavorite: true,
      },
      {
        id: 0,
        isFavorite: true,
      },
    ];

    const updatedOffersNearby = [
      {
        id: 0,
        isFavorite: true,
      },
      {
        id: 1,
        isFavorite: true,
      },
      {
        id: 2,
        isFavorite: true,
      },
    ];

    const updateOfferAction = {
      type: ActionType.UPDATE_OFFER,
      payload: favoriteOffer,
    };

    expect(data(state, updateOfferAction))
      .toEqual({
        offers: updatedOffers,
        currentOffer: favoriteOffer,
        reviews: reviews,
        offersNearby: updatedOffersNearby,
        favoritesOffers: updatedFavoritesOffers,
        isDataLoaded: true,
        isOfferDataLoaded: true,
        areFavoritesLoaded: true,
      });
  });
});
