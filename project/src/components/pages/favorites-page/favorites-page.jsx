import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import offerProp from '../../../prop-types/offer.prop';
import {Link} from 'react-router-dom';
import FavoritesList from '../../favorites-list/favorites-list';
import Header from '../../header/header';

function FavoritesPage({offers}) {
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);
  const cities = Array.from(new Set(offers.map((offer) => offer.city.name)));
  const favoritesCities = [...cities.values()];

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList
              favoritesCities={favoritesCities}
              favoritesOffers={favoritesOffers}
            />
          </section>
        </div>
      </main>
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

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

const mapStateToProps = ({offers}) => ({
  offers: offers,
});

export {FavoritesPage};
export default connect(mapStateToProps, null)(FavoritesPage);
