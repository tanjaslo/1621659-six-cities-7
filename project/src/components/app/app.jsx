import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {AppRoutes} from '../../const';
import browserHistory from '../../browser-history';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';

function App({isDataLoaded}) {
  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoutes.MAIN} component={MainPage} />
        <PrivateRoute
          exact path={AppRoutes.FAVORITES}
          render={() => <FavoritesPage />}
        />
        <Route exact path={AppRoutes.LOGIN} component={LoginPage} />
        <Route exact path={AppRoutes.ROOM} component={RoomPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  // authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  // authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export {App};
export default connect(mapStateToProps)(App);
