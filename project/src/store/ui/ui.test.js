import {ui} from './ui';
import {changeCity, changeSortType} from '../actions';
import {DEFAULT_CITY, SortTypes} from '../../const';

describe('Reducer: ui', () => {
  it('without additional parameters should return initial state', () => {
    expect(ui(undefined, {}))
      .toEqual({
        activeCity: DEFAULT_CITY,
        activeSortType: SortTypes.POPULAR,
      });
  });

  it('should replace current city with change city', () => {
    const state = {
        activeCity: DEFAULT_CITY,
        activeSortType: SortTypes.POPULAR,
    };

    expect(ui(state, changeCity('Amsterdam')))
      .toEqual({
        activeCity: 'Amsterdam',
        activeSortType: SortTypes.POPULAR,
      });
  });

  it('should change sort type to a given value', () => {
    const state = {
        activeCity: 'Amsterdam',
        activeSortType: SortTypes.POPULAR,
    };

    expect(ui(state, changeSortType(SortTypes.PRICE_LOW)))
      .toEqual({
        activeCity: 'Amsterdam',
        activeSortType: SortTypes.PRICE_LOW,
      });
  });
});