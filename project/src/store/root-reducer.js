import {combineReducers} from 'redux';
import {data} from './data/data';
import {ui} from './ui/ui';
import {userData} from './userData/userData';

export const NameSpace = {
  DATA: 'DATA',
  UI: 'UI',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.UI]: ui,
  [NameSpace.USER]: userData,
});
