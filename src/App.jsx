import React from 'react';

import VehicleService from './service/VehicleService';

import VehiclesList from './components/VehiclesList/VehiclesList';

const vehicleService = new VehicleService();

vehicleService.getVehicles().then(console.log);

const App = () => {
  return <VehiclesList />;
};

export default App;
