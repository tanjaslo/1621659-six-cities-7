import React, {useState} from 'react';
import PropTypes from 'prop-types';
import offersProp from '../../prop-types/offers.prop';
import PlaceCard from '../place-card/place-card.jsx';
import {CardTypes} from '../../const';

function PlacesList({offers}) {
  const [, setActiveCard] = useState(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          cardType={CardTypes['MAIN_PAGE']}
          onMouseEnter={() => setActiveCard(offer.id)}
          onMouseLeave={() => setActiveCard(null)}
        />))}
    </div>
  );
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
};

export default PlacesList;
