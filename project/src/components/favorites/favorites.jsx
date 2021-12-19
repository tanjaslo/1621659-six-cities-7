import React, {memo} from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer.prop';
import FavoritesList from '../favorites-list/favorites-list';

function Favorites({favoritesOffers, favoritesCities}) {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList
            favoritesOffers={favoritesOffers}
            favoritesCities={favoritesCities}
          />
        </section>
      </div>
    </main>
  );
}

Favorites.propTypes = {
  favoritesOffers: PropTypes.arrayOf(offerProp).isRequired,
  favoritesCities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default memo(Favorites);
