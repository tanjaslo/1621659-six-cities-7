import {createReducer} from '@reduxjs/toolkit';
import {
  loadOffers,
  loadOffer,
  loadReviews,
  loadOffersNearby,
  loadFavoritesOffers,
  setFavoritesLoadingStatus,
  setOfferLoadingStatus,
  setServerStatus,
  updateOffer
} from '../actions';
import {updateFavoritesOffers, updateOfferIsFavorite, updateOffers} from '../../utils';

const initialState = {
  offers: [],
  currentOffer: {},
  reviews: [],
  offersNearby: [],
  favoritesOffers: [],
  isDataLoaded: false,
  isOfferDataLoaded: false,
  areFavoritesLoaded: false,
  isServerAvailable: true,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.isDataLoaded = true;
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.isOfferDataLoaded = true;
      state.currentOffer = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(loadFavoritesOffers, (state, action) => {
      state.favoritesOffers = action.payload;
      state.areFavoritesLoaded = true;
    })
    .addCase(setFavoritesLoadingStatus, (state, action) => {
      state.areFavoritesLoaded = action.payload;
    })
    .addCase(setOfferLoadingStatus, (state, action) => {
      state.isOfferDataLoaded = action.payload;
    })
    .addCase(setServerStatus, (state, action) => {
      state.isServerAvailable = action.payload;
    })
    .addCase(updateOffer, (state, action) => {
      state.currentOffer = updateOfferIsFavorite(state.currentOffer, action.payload);
      state.offers = updateOffers(state.offers, action.payload);
      state.favoritesOffers = updateFavoritesOffers(state.favoritesOffers, action.payload);
      state.offersNearby = updateOffers(state.offersNearby, action.payload);
    });
});

export {data};
