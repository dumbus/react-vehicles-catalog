import React from 'react';

import './VehicleCard.scss';

const VehicleCard = () => {
  return (
    <li className="vehicle-card">
      <h3 className="vehicle-card__title">Toyota Camry</h3>

      <div className="vehicle-card__divider"></div>

      <div className="vehicle-card__description">
        <div className="vehicle-card__description-item">
          <div className="vehicle-card__description-category">Цвет:</div>
          <div className="vehicle-card__description-value">red</div>
        </div>

        <div className="vehicle-card__description-item">
          <div className="vehicle-card__description-category">Год выпуска:</div>
          <div className="vehicle-card__description-value">2021</div>
        </div>

        <div className="vehicle-card__description-item">
          <div className="vehicle-card__description-category">Цена:</div>
          <div className="vehicle-card__description-value">21000 (у.е.)</div>
        </div>

        <div className="vehicle-card__description-item">
          <div className="vehicle-card__description-category">
            Местоположение:
          </div>
          <div className="vehicle-card__description-value">
            55.753332, 37.621676
          </div>
        </div>
      </div>
    </li>
  );
};

export default VehicleCard;
