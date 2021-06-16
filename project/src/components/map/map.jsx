import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import offersProp from '../../prop-types/offers.prop';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const CITY = [52.38333, 4.9];
const ZOOM = 12;

function Map({offers}) {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current, {
      center: CITY,
      zoom: ZOOM,
      zoomControl: false,
      marker: true,
    });

    map.setView(CITY, ZOOM);

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'},
    ).addTo(map);

    offers.forEach((offer) => {
      const {latitude, longitude} = offer.location;

      const mapIcon = L.icon({
        iconUrl: 'img/pin.svg',
        iconSize: [30, 40],
        iconAnchor: [15, 40],
      });

      L.marker({
        lat: latitude,
        lng: longitude,
      }, {
        icon: mapIcon,
      })
        .addTo(map);
    });
  }, [offers]);

  return (
    <div id="map" ref={mapRef} style={{height: '100%'}}></div>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offersProp).isRequired,
};

export default Map;
