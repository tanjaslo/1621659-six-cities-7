import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer.prop';
import {changeCity} from '../../store/actions';
import PlaceCard from '../place-card/place-card';
import {AppRoutes, CardTypes, Types} from '../../const';

function FavoritesPlace({favoritesOffers, favoritesCity}) {
  const dispatch = useDispatch();

  const offers = favoritesOffers.filter((offer) => offer.city.name === favoritesCity);

  const handleCityClick = () => {
    dispatch(changeCity(favoritesCity));
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={AppRoutes.MAIN}
            onClick={handleCityClick}
          >
            <span>{favoritesCity}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            cardType={CardTypes[Types.FAVORITES_PAGE]}
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
