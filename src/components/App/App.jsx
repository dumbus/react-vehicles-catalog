import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import VehiclesList from '../VehiclesList/VehiclesList';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const App = () => {
  return (
    <div className="app">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <ErrorBoundary>
        <VehiclesList />
      </ErrorBoundary>

      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
