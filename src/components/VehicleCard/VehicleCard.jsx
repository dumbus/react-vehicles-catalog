import React from 'react';

import './VehicleCard.scss';

const VehicleCard = ({ vehicleData }) => {
  const { id, name, model, color, year, price, latitude, longitude } =
    vehicleData;

  const getLocationMessage = (latitude, longitude) => {
    if (!latitude || !longitude) {
      return 'location is unknown';
    }

    return `${latitude}, ${longitude}`;
  };

  return (
    <li key={id} className="vehicle-card">
      <h3 className="vehicle-card__title">{`${name} ${model}`}</h3>

      <div className="vehicle-card__divider"></div>

      <div className="vehicle-card__description">
        <div className="vehicle-card__description-item">
          <div className="vehicle-card__description-category">Цвет:</div>
          <div className="vehicle-card__description-value">{color}</div>
        </div>

        <div className="vehicle-card__description-item">
          <div className="vehicle-card__description-category">Год выпуска:</div>
          <div className="vehicle-card__description-value">{year}</div>
        </div>

        <div className="vehicle-card__description-item">
          <div className="vehicle-card__description-category">Цена:</div>
          <div className="vehicle-card__description-value">{`${price} (у. е.)`}</div>
        </div>

        <div className="vehicle-card__description-item">
          <div className="vehicle-card__description-category">
            Местоположение:
          </div>
          <div className="vehicle-card__description-value">
            {getLocationMessage(latitude, longitude)}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VehicleCard;
