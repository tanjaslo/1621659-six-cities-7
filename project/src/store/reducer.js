import offers from '../mocks/offers';
import reviews from '../mocks/reviews';
import {CITIES} from '../const';
import {ActionType} from './action';
import {getOffersByCity} from '../utils';

const initialState = {
  activeCity: CITIES[0],
  offers: getOffersByCity(offers, CITIES[0]),
  reviews,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
        offers: getOffersByCity(offers, action.payload),
      };
    default:
      return state;
  }
};
