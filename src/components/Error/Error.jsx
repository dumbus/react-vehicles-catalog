import React from 'react';

import './Error.scss';

import error from '../../assets/error.svg';

const Error = () => {
  return (
    <div className="error">
      <img className="error__image" src={error} alt="error image" />

      <div className="error__description">Упс... Что-то пошло не так...</div>
    </div>
  );
};

export default Error;
