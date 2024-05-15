import React, { useState, useEffect } from 'react';

import './VehiclesList.scss';

import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import VehicleCard from '../VehicleCard/VehicleCard';
import Sort from '../Sort/Sort';

import VehicleService from '../../service/VehicleService';

import { YMaps } from '@pbe/react-yandex-maps';

const VehiclesList = () => {
  const [vehiclesData, setVehiclesData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [sortType, setSortType] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const vehicleService = new VehicleService();

  useEffect(() => {
    onRequest();
  }, []);

  useEffect(() => {
    const sortedData = [...vehiclesData].sort((firstVehicle, secondVehicle) => {
      return (firstVehicle[sortType] - secondVehicle[sortType]) * sortOrder;
    });

    setVehiclesData(sortedData);
  }, [sortType, sortOrder]);

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

  const renderContent = (vehiclesData) => {
    const vehiclesItems = vehiclesData.map((vehicleData) => {
      const { id } = vehicleData;

      return <VehicleCard key={id} vehicleData={vehicleData} />;
    });

    return (
      <>
        <Sort
          sortType={sortType}
          setSortType={setSortType}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        <ul className="vehicles-list__list">{vehiclesItems}</ul>
      </>
    );
  };

  const error = hasError ? <Error /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const content = !(isLoading || hasError) ? renderContent(vehiclesData) : null;

  return (
    <>
      <div className="vehicles-list container">
        <h2 className="vehicles-list__header">Список автомобилей</h2>

        {error}
        {spinner}
        <YMaps
          query={{
            apikey: '9dd0753a-924c-4279-8976-c28baa0e1a16'
          }}
        >
          {content}
        </YMaps>
      </div>
    </>
  );
};

export default VehiclesList;
