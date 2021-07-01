import offers from '../mocks/offers';
import reviews from '../mocks/reviews';
import {CITIES, SortTypes} from '../const';
import {ActionType} from './action';
import {getOffersByCity} from '../utils';

const initialState = {
  activeCity: CITIES[0],
  offers: getOffersByCity(offers, CITIES[0]),
  reviews,
  sortType: SortTypes.POPULAR,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
        offers: getOffersByCity(offers, action.payload),
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };
    default:
      return state;
  }
};
