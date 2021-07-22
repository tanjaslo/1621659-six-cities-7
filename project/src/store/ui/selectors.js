import {NameSpace} from '../root-reducer';

export const getActiveCity = (state) => state[NameSpace.UI].activeCity;
export const getActiveSortType = (state) => state[NameSpace.UI].activeSortType;
