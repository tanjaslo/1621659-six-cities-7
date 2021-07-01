import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {SortTypes} from '../../const';
import SortItem from '../sort-item/sort-item';

function SortList({sortType, onChangeSort}) {
  const [isSortListOpen, setIsSortListOpen] = useState(false);

  const handleSortClick = () => {
    setIsSortListOpen((prevState) => !prevState);
  };

  const handleSortChange = (type) => {
    onChangeSort(type);
    setIsSortListOpen(false);
  };

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by </span>
      <span className='places__sorting-type' tabIndex='0' onClick={handleSortClick}>
        {sortType}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select' />
        </svg>
      </span>
      <ul className={`places__options places__options--custom
      ${isSortListOpen && 'places__options--opened'}`}
      >
        {Object.values(SortTypes).map((sort) => (
          <SortItem
            key={sort}
            isActive={sortType === sort}
            sortType={sort}
            onChangeSort={handleSortChange}
          />
        ))}
      </ul>
    </form>
  );
}

SortList.propTypes = {
  sortType: PropTypes.string.isRequired,
  onChangeSort: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSort(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  },
});

export {SortList};
export default connect(mapStateToProps, mapDispatchToProps)(SortList);
