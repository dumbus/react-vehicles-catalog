import React from 'react';

import './VehiclesList.scss';

import VehicleCard from '../VehicleCard/VehicleCard';

const VehiclesList = () => {
  return (
    <>
      <div className="vehicles-list container">
        <h2 className="vehicles-list__header">Список автомобилей</h2>

        <ul className="vehicles-list__list">
          <VehicleCard />
          <VehicleCard />
          <VehicleCard />

          <VehicleCard />
          <VehicleCard />
          <VehicleCard />

          <VehicleCard />
          <VehicleCard />
          <VehicleCard />

          <VehicleCard />
          <VehicleCard />
          <VehicleCard />
        </ul>
      </div>
    </>
  );
};

export default VehiclesList;
