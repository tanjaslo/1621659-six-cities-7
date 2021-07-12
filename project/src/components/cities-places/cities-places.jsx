import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Map from '../map/map';
import PlacesList from '../places-list/places-list';
import SortList from '../sort-list/sort-list';
import {getSortedOffers} from '../../utils';
import {getActiveCity, getSortType} from '../../store/ui/selectors';
import {getCurrentOffers} from '../../store/data/selectors';

function CitiesPlaces() {
  const currentOffers = useSelector(getCurrentOffers);
  const sortType = useSelector(getSortType);
  const activeCity = useSelector(getActiveCity);
  const sortedOffers = getSortedOffers(sortType, currentOffers);

  const [activeCard, setActiveCard] = useState({});

  const onCardHover = (id) => {
    const currentCard = currentOffers.find((offer) => offer.id === Number(id));
    setActiveCard(currentCard);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{currentOffers.length} {currentOffers.length > 1 ? 'places' : 'place'} to stay in {activeCity}</b>
        <SortList
          sortType={sortType}
        />
        <PlacesList
          isMainPage
          offers={sortedOffers}
          onMouseEnter={onCardHover}
          onMouseLeave={() => setActiveCard({})}
        />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            city={currentOffers[0].city}
            offers={currentOffers}
            activeCard={activeCard}
          />
        </section>
      </div>
    </div>
  );
}

export default CitiesPlaces;
