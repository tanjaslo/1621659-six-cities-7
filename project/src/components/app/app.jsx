import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';

function App() {
  return (
    <Switch>
      <Route exact path={AppRoutes.MAIN} component={MainPage} />
      <PrivateRoute
        exact path={AppRoutes.FAVORITES}
        status={AuthorizationStatus.AUTH}
        redirect={AppRoutes.LOGIN}
        render={() => <FavoritesPage />}
      />
      <Route exact path={AppRoutes.LOGIN} component={LoginPage} />
      <PrivateRoute
        exact
        path={AppRoutes.LOGIN}
        status={AuthorizationStatus.NO_AUTH}
        redirect={AppRoutes.MAIN}
        render={() => <LoginPage />}
      />
      <Route exact path={AppRoutes.ROOM} component={RoomPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default App;
