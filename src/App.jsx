import React from 'react';

import VehicleService from './service/VehicleService';

const vehicleService = new VehicleService();

vehicleService.getVehicles().then(console.log);

const App = () => {
  return <div>App</div>;
};

export default App;
