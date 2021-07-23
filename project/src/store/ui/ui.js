import {
  changeCity,
  changeSortType
} from '../actions';
import {createReducer} from '@reduxjs/toolkit';
import {DEFAULT_CITY, SortTypes} from '../../const';

const initialState = {
  activeCity: DEFAULT_CITY,
  activeSortType: SortTypes.POPULAR,
};

const ui = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.activeSortType = action.payload;
    });
});

export {ui};
