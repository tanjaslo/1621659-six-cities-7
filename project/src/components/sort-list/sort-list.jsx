import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getSortType} from '../../store/ui/selectors';
import {changeSortType} from '../../store/actions';
import {SortTypes} from '../../const';
import SortItem from '../sort-item/sort-item';

function SortList() {
  const dispatch = useDispatch();
  const sortType = useSelector(getSortType);

  const [isSortListOpen, setIsSortListOpen] = useState(false);

  const handleSortClick = () => {
    setIsSortListOpen((prevState) => !prevState);
  };

  const handleSortChange = (type) => {
    dispatch(changeSortType(type));
    // setIsSortListOpen(false);
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

export default SortList;
