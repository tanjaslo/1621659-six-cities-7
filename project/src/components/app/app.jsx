import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import LoginPage from '../pages/login-page/login-page';
import RoomPage from '../pages/room-page/room-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import offersProp from '../../prop-types/offers.prop';
import reviewsProp from '../../prop-types/reviews.prop';

function App({placesCount, offers, reviews}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <MainPage placesCount={placesCount} offers={offers} />
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
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offersProp).isRequired,
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};

export default App;
