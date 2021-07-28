import React, {memo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getActiveSortType} from '../../store/ui/selectors';
import {changeSortType} from '../../store/actions';
import {SortType} from '../../const';
import SortItem from '../sort-item/sort-item';

function SortList() {
  const dispatch = useDispatch();
  const activeSortType = useSelector(getActiveSortType);

  const [isSortListOpen, setIsSortListOpen] = useState(false);

  const handleSortClick = () => {
    setIsSortListOpen((prevState) => !prevState);
  };

  const handleSortChange = (type) => {
    dispatch(changeSortType(type));
    handleSortClick();
  };

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by </span>
      <span
        className='places__sorting-type'
        tabIndex='0'
        onClick={handleSortClick}
      >
        {activeSortType}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select' />
        </svg>
      </span>
      <ul className={`places__options places__options--custom
      ${isSortListOpen && 'places__options--opened'}`}
      >
        {Object.values(SortType).map((sort) => (
          <SortItem
            key={sort}
            isActive={activeSortType === sort}
            activeSortType={sort}
            onChangeSort={handleSortChange}
          />
        ))}
      </ul>
    </form>
  );
}

export default memo(SortList);
