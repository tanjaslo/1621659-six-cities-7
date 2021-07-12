import React from 'react';
import {useSelector} from 'react-redux';
import Header from '../../header/header';
import MainEmpty from '../../main-empty/main-empty';
import CitiesList from '../../cities-list/cities-list';
import {getActiveCity} from '../../../store/ui/selectors';
import {getCurrentOffers} from '../../../store/data/selectors';
import CitiesPlaces from '../../cities-places/cities-places';

function MainPage(){
  const currentOffers = useSelector(getCurrentOffers);
  const activeCity = useSelector(getActiveCity);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index
      ${currentOffers.length === 0 && (
      'page__main--index-empty')}`}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          {currentOffers.length !== 0 ? (
            <CitiesPlaces
              currentOffers={currentOffers}
              city={activeCity}
            />
          ) : (
            <MainEmpty activeCity={activeCity} />
          )}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
