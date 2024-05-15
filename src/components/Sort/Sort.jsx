import React from 'react';

import './Sort.scss';

import ascending from '../../assets/ascending.svg';
import descending from '../../assets/descending.svg';

const Sort = ({ sortType, setSortType, sortOrder, setSortOrder }) => {
  const handleSortChange = (type) => {
    if (type === sortType) {
      setSortOrder((oldOrder) => oldOrder * -1);
    } else {
      if (type === 'year') {
        setSortType('year');
      }

      if (type === 'price') {
        setSortType('price');
      }

      setSortOrder(1);
    }
  };

  return (
    <>
      <div className="sort">
        <h3 className="sort__title">Сортировка:</h3>

        <button
          className="sort__button"
          onClick={() => handleSortChange('year')}
        >
          <span>По году выпуска</span>
          <img
            className={`sort__img ${sortType === 'year' ? '' : 'hidden'}`}
            src={sortOrder > 0 ? ascending : descending}
            alt={sortOrder > 0 ? 'ascending' : 'descending'}
          />
        </button>
        <button
          className="sort__button"
          onClick={() => handleSortChange('price')}
        >
          <span>По цене</span>
          <img
            className={`sort__img ${sortType === 'price' ? '' : 'hidden'}`}
            src={sortOrder > 0 ? ascending : descending}
            alt={sortOrder > 0 ? 'ascending' : 'descending'}
          />
        </button>
      </div>
    </>
  );
};

export default Sort;
