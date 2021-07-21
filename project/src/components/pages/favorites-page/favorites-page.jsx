import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchFavoritesOffers} from '../../../store/api-actions';
import Favorites from '../../favorites/favorites';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import Header from '../../header/header';
import LoadingScreen from '../../loading-screen/loading-screen';
import {getFavoritesOffers, getFavoritesLoadingStatus} from '../../../store/data/selectors';

function FavoritesPage() {
  const dispatch = useDispatch();
  const favoritesOffers = useSelector(getFavoritesOffers);
  const areFavoritesLoaded = useSelector(getFavoritesLoadingStatus);

  const cities = Array.from(new Set(favoritesOffers.map((item) => item.city.name)));
  const favoritesCities = [...cities.values()];

  useEffect(() => {
    dispatch(fetchFavoritesOffers());
  }, [dispatch]);

  if (!areFavoritesLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page">
      <Header />
      {favoritesOffers.length !== 0 ? (
        <Favorites
          favoritesOffers={favoritesOffers}
          favoritesCities={favoritesCities}
        />) : (
        <FavoritesEmpty />
      )}
      <footer className="footer container">
        <Link to="/">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
