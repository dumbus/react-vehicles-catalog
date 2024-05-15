import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import VehiclesList from './components/VehiclesList/VehiclesList';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

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
