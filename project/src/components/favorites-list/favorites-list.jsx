import React from 'react';
import PropTypes from 'prop-types';
import offersProp from '../../prop-types/offers.prop';
import FavoritesPlace from '../favorites-place/favorites-place';

function FavoritesList({favoritesOffers, favoritesCities}) {
  return (
    <ul className="favorites__list">
      {favoritesCities.map((city) => (
        <FavoritesPlace
          key={city}
          favoritesOffers={favoritesOffers}
          favoritesCity={city}
        />
      ))};
    </ul>
  );
}

FavoritesList.propTypes = {
  favoritesOffers: PropTypes.arrayOf(offersProp).isRequired,
  favoritesCities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default FavoritesList;
