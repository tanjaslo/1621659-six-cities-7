import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer.prop';
import PlaceCard from '../place-card/place-card.jsx';
import {CardType, Type} from '../../const';

function PlacesList({offers, onMouseEnter, onMouseLeave, isMainPage = true}) {
  return (
    <div className={isMainPage
      ? 'cities__places-list places__list tabs__content'
      : ''}
    >
      {offers.map((offer) => (
        <PlaceCard
          isMainPage={isMainPage}
          key={offer.id}
          offer={offer}
          cardType={CardType[`${isMainPage ? Type.MAIN_PAGE : Type.ROOM_PAGE}`]}
          onMouseEnter={() => onMouseEnter(offer.id)}
          onMouseLeave={() => onMouseLeave(null)}
        />))}
    </div>
  );
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  isMainPage: PropTypes.bool,
};

export default PlacesList;
