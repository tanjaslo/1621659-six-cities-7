import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import offerProp from '../../prop-types/offer.prop';
import reviewProp from '../../prop-types/review.prop';

function App({offers, reviews}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <MainPage offers={offers} />
        </Route>
        <Route path={AppRoute.FAVORITES} exact>
          <FavoritesPage offers={offers} />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <LoginPage />
        </Route>
        <Route path={AppRoute.ROOM} exact>
          <RoomPage offers={offers} reviews={reviews} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default App;
