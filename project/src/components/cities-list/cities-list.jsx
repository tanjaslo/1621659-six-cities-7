import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {CITIES} from '../../const';
import City from '../city/city';

function CitiesList({activeCity, onChangeCity}) {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <City key={city}
          city={city}
          isActive={activeCity === city}
          onChangeCity={onChangeCity}
        />
      ))}
    </ul>
  );
}

CitiesList.propTypes = {
  onChangeCity: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
