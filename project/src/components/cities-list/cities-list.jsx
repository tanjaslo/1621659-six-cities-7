import React, {memo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CITIES} from '../../const';
import City from '../city/city';
import {getActiveCity} from '../../store/ui/selectors';
import {changeCity} from '../../store/actions';

function CitiesList() {
  const activeCity = useSelector(getActiveCity);
  const dispatch = useDispatch();

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <City key={city}
          city={city}
          isActive={activeCity === city}
          onClick={() => dispatch(changeCity(city))}
        />
      ))}
    </ul>
  );
}

export default memo(CitiesList);
