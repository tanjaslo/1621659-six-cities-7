import {NameSpace} from '../root-reducer';

export const getActiveCity = (state) => state[NameSpace.UI].activeCity;
export const getSortType = (state) => state[NameSpace.UI].sortType;
