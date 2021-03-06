import React from 'react';
import { useNavigate } from 'react-router';
import carIcon from '../imgs/car-icon.svg';
import motorcycleIcon from '../imgs/motorcycle-icon.svg';
import '../sass/VehicleItem.scss';

export default function VehicleItem({ vehicle }) {
  const navigate = useNavigate();
  const renderImg = () => {
    if(vehicle.image) return vehicle.image;
    if(vehicle.type === 'moto') return motorcycleIcon;
    return carIcon;
  };

  return (
    <button className='vehicle-item' onClick={ () => navigate(`/vehicles/${vehicle.id}`)}>
      <p>Tipo: {vehicle.type}</p>
      <img src={ renderImg() } alt={ vehicle.type }/>
      <h1>{vehicle.model}</h1>
      <h2>{vehicle.category}</h2>
    </button>
  )
}
