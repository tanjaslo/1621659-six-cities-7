import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../header/header';
import MainEmpty from '../../main-empty/main-empty';
import CitiesList from '../../cities-list/cities-list';
import {getActiveCity} from '../../../store/ui/selectors';
import {getCurrentOffers, getOffers} from '../../../store/data/selectors';
import CitiesPlaces from '../../cities-places/cities-places';
import { fetchOffers } from '../../../store/api-actions';

function MainPage(){
  //const dispatch = useDispatch();
  const currentOffers = useSelector(getCurrentOffers);
  //const offers = useSelector(getOffers);
  const activeCity = useSelector(getActiveCity);

/*   useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  const sortedOffers =
  offers && offers.filter((item) => item.city.name === activeCity); */

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
