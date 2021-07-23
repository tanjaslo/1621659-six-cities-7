import {userData} from './user-data';
import {ActionType} from '../actions';
import {AuthorizationStatus} from '../../const';

describe('Reducer: userData', () => {
  it('without additional parameters should return initial state', () => {
    expect(userData(undefined, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        userData: {},
      });
  });

  it('should update authorizationStatus by require authorization', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(userData(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH});
  });

  it('should update authorizationStatus to by logout', () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(userData(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH});
  });

  it('should update user data by setting user data', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: {},
    };
    const setUserDataAction = {
      type: ActionType.SET_USER_DATA,
      payload: userData,
    };

    expect(userData(state, setUserDataAction))
    .toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: userData,
    });
  });
});
