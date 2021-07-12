import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';
import {logout,
  requireAuthorization,
  setUserData
} from '../actions';

const initialState = {
  userData: {},
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const userData = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.userData = {};
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export {userData};
