import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import offerProp from '../../../prop-types/offer.prop';
import Header from '../../header/header';
import MainEmpty from '../../main-empty/main-empty';
import Map from '../../map/map';
import CitiesList from '../../cities-list/cities-list';
import PlacesList from '../../places-list/places-list';
import SortList from '../../sort-list/sort-list';
import {getSortedOffers} from '../../../utils';

function MainPage({offers, activeCity, sortType}){
  const [activeCard, setActiveCard] = useState({});
  const sortedOffers = getSortedOffers(sortType, offers);

  const onCardHover = (id) => {
    const currentCard = offers.find((offer) => offer.id === Number(id));
    setActiveCard(currentCard);
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index
      ${offers.length === 0 && (
      'page__main--index-empty')}`}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          {offers.length !== 0 ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} {offers.length > 1 ? 'places' : 'place'} to stay in {activeCity}</b>
                <SortList />
                <PlacesList
                  isMainPage
                  offers={sortedOffers}
                  onMouseEnter={onCardHover}
                  onMouseLeave={() => setActiveCard('')}
                />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={offers[0].city} offers={offers} activeCard={activeCard}/>
                </section>
              </div>
            </div>
          ) : (
            <MainEmpty activeCity={activeCity} />
          )}
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  activeCity: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  activeCity: state.activeCity,
  sortType: state.sortType,
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
