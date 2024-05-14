import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import VehiclesList from './components/VehiclesList/VehiclesList';

const App = () => {
  return (
    <div className="app">
      <Header />
      <VehiclesList />
      <Footer />
    </div>
  );
};

export default App;
