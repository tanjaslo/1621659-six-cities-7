import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer.prop';
import PlaceCard from '../place-card/place-card';
import {CardTypes} from '../../const';

function FavoritesPlace({favoritesOffers, favoritesCity}) {
  const offers = favoritesOffers.filter((offer) => offer.city.name === favoritesCity);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{favoritesCity}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            cardType={CardTypes['FAVORITES_PAGE']}
          />))}
      </div>
    </li>
  );
}

FavoritesPlace.propTypes = {
  favoritesOffers: PropTypes.arrayOf(offerProp).isRequired,
  favoritesCity: PropTypes.string.isRequired,
};

export default FavoritesPlace;
