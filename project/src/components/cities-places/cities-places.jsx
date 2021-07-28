import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer.prop';
import Map from '../map/map';
import PlacesList from '../places-list/places-list';
import SortList from '../sort-list/sort-list';
import {getSortedOffers} from '../../utils';
import {getActiveCity, getActiveSortType} from '../../store/ui/selectors';

function CitiesPlaces({currentOffers}) {
  const activeSortType = useSelector(getActiveSortType);
  const activeCity = useSelector(getActiveCity);
  const sortedOffers = getSortedOffers(activeSortType, currentOffers);

  const [activeCardId, setActiveCardId] = useState(0);

  const handleOnMouseEnter = (currentId) => {
    setActiveCardId(currentId);
  };
  const handleOnMouseLeave = () => {
    setActiveCardId(0);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{currentOffers.length} {currentOffers.length > 1 ? 'places' : 'place'} to stay in {activeCity}</b>
        <SortList
          activeSortType={activeSortType}
        />
        <PlacesList
          isMainPage
          offers={sortedOffers}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            city={currentOffers[0].city}
            offers={currentOffers}
            activeCardId={activeCardId}
          />
        </section>
      </div>
    </div>
  );
}

CitiesPlaces.propTypes = {
  currentOffers: PropTypes.arrayOf(offerProp).isRequired,
};

export default CitiesPlaces;
