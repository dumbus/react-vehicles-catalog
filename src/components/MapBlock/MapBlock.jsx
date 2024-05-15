import React, { useState } from 'react';
import { Map, ZoomControl, Placemark } from '@pbe/react-yandex-maps';

import './MapBlock.scss';

import cross from '../../assets/cross.svg';

import Spinner from '../Spinner/Spinner';

const MapBlock = ({ isMap, toggleMap, latitude, longitude, name, model }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleMapLoad = () => {
    setIsLoading(false);
  };

  // Patch to remove defaultProps error from console
  const error = console.error;
  console.error = (...args) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <div className={`map ${isMap ? '' : 'hidden'}`}>
      {isLoading ? <Spinner /> : ''}

      <button
        className="map__button map__close"
        style={{ backgroundImage: `url(${cross})` }}
        onClick={toggleMap}
      />
      <Map
        defaultState={{ center: [latitude, longitude], zoom: 15 }}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          borderRadius: '1rem',
          overflow: 'hidden'
        }}
        options={{
          suppressMapOpenBlock: true
        }}
        onLoad={handleMapLoad}
      >
        <ZoomControl options={{ float: 'right' }} />
        <Placemark
          geometry={[latitude, longitude]}
          properties={{
            iconContent: `${name} ${model}`
          }}
          options={{
            preset: 'islands#blueStretchyIcon'
          }}
        />
      </Map>
    </div>
  );
};

export default MapBlock;
