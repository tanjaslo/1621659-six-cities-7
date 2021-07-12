import {createReducer} from '@reduxjs/toolkit';

import {
  loadOffers,
  loadRoom,
  loadReviews,
  loadOffersNearby
  //setRoomLoadingStatus
} from '../actions';

const initialState = {
  offers: [],
  room: {},
  reviews: [],
  offersNearby: [],
  isDataLoaded: false,
  isRoomDataLoaded: false,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.isDataLoaded = true;
      state.offers = action.payload;
    })
    .addCase(loadRoom, (state, action) => {
      state.isRoomDataLoaded = true;
      state.room = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    });
/*     .addCase(setRoomLoadingStatus, (state, action) => {
      state.isRoomDataLoaded = action.payload;
    }); */
});

export {data};
