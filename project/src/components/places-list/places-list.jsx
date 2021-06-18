import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer.prop';
import PlaceCard from '../place-card/place-card.jsx';
import {CardTypes} from '../../const';

function PlacesList({offers, onMouseEnter, onMouseLeave}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          cardType={CardTypes['MAIN_PAGE']}
          onMouseEnter={() => onMouseEnter(offer.id)}
          onMouseLeave={onMouseLeave}
        />))}
    </div>
  );
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default PlacesList;
