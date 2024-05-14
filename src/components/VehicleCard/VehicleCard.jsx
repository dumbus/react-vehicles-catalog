import React, { useState, useRef } from 'react';

import './VehicleCard.scss';

import remove from '../../assets/remove.svg';
import edit from '../../assets/edit.svg';
import save from '../../assets/save.svg';

const VehicleCard = ({ vehicleData }) => {
  const { id, name, model, color, year, price, latitude, longitude } =
    vehicleData;

  const [buttonState, setButtonState] = useState('edit');
  const [isEdit, setEdit] = useState(false);
  const [show, setShow] = useState(true);
  const [titleValue, setTitleValue] = useState(`${name} ${model}`);
  const [priceValue, setPriceValue] = useState(price);

  const getLocationMessage = (latitude, longitude) => {
    if (!latitude || !longitude) {
      return 'location is unknown';
    }

    return `${latitude}, ${longitude}`;
  };

  const onEditClick = () => {
    setButtonState((buttonState) => {
      return buttonState === 'edit' ? 'save' : 'edit';
    });
    setEdit((isEdit) => !isEdit);
  };

  const onRemoveClick = () => {
    setShow(false);
  };

  const handleKeyDown = (ref, event) => {
    if (ref === priceInputRef && !/[0-9]/.test(event.key)) {
      event.preventDefault();
    }

    if (event.key === 'Enter' || event.key === 'Escape') {
      ref.current.blur();
    }
  };

  const handleChange = (ref, event) => {
    if (ref === titleInputRef) {
      setTitleValue(event.target.value);
    }

    if (ref === priceInputRef) {
      setPriceValue(event.target.value);
    }
  };

  const titleInputRef = useRef();
  const priceInputRef = useRef();

  return (
    <li
      key={id}
      className="vehicle-card"
      style={{ display: `${show ? 'block' : 'none'}` }}
    >
      <input
        className={`vehicle-card__title input ${isEdit ? 'edit' : ''}`}
        onChange={(event) => handleChange(titleInputRef, event)}
        onKeyDown={(event) => handleKeyDown(titleInputRef, event)}
        value={titleValue}
        type="text"
        disabled={!isEdit}
        ref={titleInputRef}
      />

      <div className="vehicle-card__divider"></div>

      <div className="vehicle-card__description">
        <div className="vehicle-card__description-item">
          <div className="vehicle-card__description-category">Цвет:</div>
          <div className="vehicle-card__description-value color">
            <div
              className="vehicle-card__description-value color__figure"
              style={{ backgroundColor: color }}
            />
            <div className="vehicle-card__description-value color__text">
              {`(${color})`}
            </div>
          </div>
        </div>

        <div className="vehicle-card__description-item">
          <div className="vehicle-card__description-category">Год выпуска:</div>
          <div className="vehicle-card__description-value">{year}</div>
        </div>

        <div className="vehicle-card__description-item">
          <div className="vehicle-card__description-category">Цена:</div>
          <input
            className={`vehicle-card__description-value ${isEdit ? 'edit' : ''}`}
            value={priceValue}
            onChange={(event) => handleChange(priceInputRef, event)}
            onKeyDown={(event) => handleKeyDown(priceInputRef, event)}
            type="number"
            disabled={!isEdit}
            ref={priceInputRef}
          />
        </div>

        <div className="vehicle-card__description-item">
          <div className="vehicle-card__description-category">
            Местоположение:
          </div>
          <div className="vehicle-card__description-value">
            {getLocationMessage(latitude, longitude)}
          </div>
        </div>
      </div>

      <div className="vehicle-card__buttons">
        <button
          onClick={onEditClick}
          className="vehicle-card__button"
          style={{
            backgroundImage: `url(${buttonState === 'edit' ? edit : save})`
          }}
        />
        <button
          className="vehicle-card__button"
          style={{ backgroundImage: `url(${remove})` }}
          onClick={onRemoveClick}
        />
      </div>
    </li>
  );
};

export default VehicleCard;
