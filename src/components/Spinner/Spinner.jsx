import React from 'react';

import './Spinner.scss';

import spinner from '../../assets/spinner.svg';

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Spinner;
