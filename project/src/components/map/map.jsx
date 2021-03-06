import React, {memo, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer.prop';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';

const defaultIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [15, 30],
});

const activeIcon = L.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [15, 30],
});

function Map({city, offers, activeCardId}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const layerGroup = L.layerGroup();

    if (map) {
      offers.forEach(({location: {latitude, longitude}, id}) => {
        const marker = L.marker(
          {
            lat: latitude,
            lng: longitude,
          },
          {
            icon:
            (id === activeCardId)
              ? activeIcon
              : defaultIcon,
          },
        );
        layerGroup.addLayer(marker);
        //marker.addTo(layerGroup);
      });

      layerGroup.addTo(map);

      map.flyTo(
        [offers[0].city.location.latitude, offers[0].city.location.longitude],
        offers[0].city.location.zoom,
      );
    }

    return () => {
      if (map) {
        layerGroup.remove();
      }
    };
  }, [map, offers, activeCardId]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

Map.propTypes = {
  activeCardId: PropTypes.number.isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default memo(Map);
