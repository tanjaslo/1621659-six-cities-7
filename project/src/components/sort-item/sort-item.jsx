import React from 'react';
import PropTypes from 'prop-types';

function SortItem({activeSortType, isActive, onChangeSort}) {

  const handleSortClick = () => {
    onChangeSort(activeSortType);
  };

  return (
    <li className={`places__option ${isActive && 'places__option--active'}`}
      tabIndex='0'
      onClick={handleSortClick}
    >
      {activeSortType}
    </li>
  );
}

SortItem.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onChangeSort: PropTypes.func.isRequired,
};

export default SortItem;
