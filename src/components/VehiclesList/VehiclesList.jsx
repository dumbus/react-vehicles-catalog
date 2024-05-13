import React, { useState, useEffect } from 'react';

import './VehiclesList.scss';

import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import VehicleCard from '../VehicleCard/VehicleCard';

import VehicleService from '../../service/VehicleService';

const VehiclesList = () => {
  const [vehiclesData, setVehiclesData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  const vehicleService = new VehicleService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    vehicleService.getVehicles().then(onVehiclesDataLoaded).catch(onError);
  };

  const onVehiclesDataLoaded = (vehiclesData) => {
    setVehiclesData(vehiclesData);
    setLoading(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const renderVehiclesList = (vehiclesData) => {
    const vehiclesItems = vehiclesData.map((vehicleData) => {
      const { id } = vehicleData;

      return <VehicleCard key={id} vehicleData={vehicleData} />;
    });

    return <ul className="vehicles-list__list">{vehiclesItems}</ul>;
  };

  const vehiclesList = renderVehiclesList(vehiclesData);

  const error = hasError ? <Error /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const content = !(isLoading || hasError) ? vehiclesList : null;

  return (
    <>
      <div className="vehicles-list container">
        <h2 className="vehicles-list__header">Список автомобилей</h2>

        {error}
        {spinner}
        {content}
      </div>
    </>
  );
};

export default VehiclesList;
