import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Alert from '../../alert/alert';
import CitiesList from '../../cities-list/cities-list';
import CitiesPlaces from '../../cities-places/cities-places';
import Header from '../../header/header';
import LoadingScreen from '../../loading-screen/loading-screen';
import MainEmpty from '../../main-empty/main-empty';
import {getActiveCity} from '../../../store/ui/selectors';
import {getCurrentOffers} from '../../../store/data/selectors';
import {fetchOffers} from '../../../store/api-actions';
import {getDataLoadingStatus, getServerStatus} from '../../../store/data/selectors';
import {ErrorMessage} from '../../../const';

function MainPage(){
  const dispatch = useDispatch();
  const isDataLoaded = useSelector(getDataLoadingStatus);
  const isServerAvailable = useSelector(getServerStatus);
  const currentOffers = useSelector(getCurrentOffers);
  const activeCity = useSelector(getActiveCity);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      {!isServerAvailable && <Alert message={ErrorMessage.OFFLINE} />}
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
