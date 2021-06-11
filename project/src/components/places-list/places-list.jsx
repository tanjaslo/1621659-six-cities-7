import React, {useState} from 'react';
import PropTypes from 'prop-types';
import offersProp from '../../prop-types/offers.prop';
import PlaceCard from '../place-card/place-card.jsx';

function PlacesList({offers}) {
  const [, setActiveCard] = useState(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={`offer-${offer.id}`}
          offer={offer}
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
