import React, { useState, useEffect } from 'react';

import './VehiclesList.scss';

import ascending from '../../assets/ascending.svg';
import descending from '../../assets/descending.svg';

import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import VehicleCard from '../VehicleCard/VehicleCard';

import VehicleService from '../../service/VehicleService';

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

  const renderVehiclesList = (vehiclesData) => {
    const vehiclesItems = vehiclesData.map((vehicleData) => {
      const { id } = vehicleData;

      return <VehicleCard key={id} vehicleData={vehicleData} />;
    });

    return <ul className="vehicles-list__list">{vehiclesItems}</ul>;
  };

  const error = hasError ? <Error /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const content = !(isLoading || hasError)
    ? renderVehiclesList(vehiclesData)
    : null;

  return (
    <>
      <div className="vehicles-list container">
        <h2 className="vehicles-list__header">Список автомобилей</h2>

        <div className="vehicles-list__sort">
          <h3 className="vehicles-list__sort-title">Сортировка:</h3>

          <button
            className="vehicles-list__sort-button"
            onClick={() => handleSortChange('year')}
          >
            <span>По году выпуска</span>
            <img
              className={`vehicles-list__sort-img ${sortType === 'year' ? '' : 'hidden'}`}
              src={sortOrder > 0 ? ascending : descending}
              alt={sortOrder > 0 ? 'ascending' : 'descending'}
            />
          </button>
          <button
            className="vehicles-list__sort-button"
            onClick={() => handleSortChange('price')}
          >
            <span>По цене</span>
            <img
              className={`vehicles-list__sort-img ${sortType === 'price' ? '' : 'hidden'}`}
              src={sortOrder > 0 ? ascending : descending}
              alt={sortOrder > 0 ? 'ascending' : 'descending'}
            />
          </button>
        </div>

        {error}
        {spinner}
        {content}
      </div>
    </>
  );
};

export default VehiclesList;
