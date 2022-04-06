import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { takeVehicle } from '../services/requisitionsApi';
import carIcon from '../imgs/car-icon.svg';
import motorcycleIcon from '../imgs/motorcycle-icon.svg';
import Context from '../services';
import Manager from '../components/Manager';
import '../sass/VehicleDetails.scss';

export default function VehicleDetails() {
  const { isLogged } = useContext(Context);
  const [vehicle, setVehicle] = useState('');
  const [isEditing, toggleIsEditing] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const get = async () => {
      const getVehicle = await takeVehicle(id);
      setVehicle(getVehicle);
    };
    get();
  }, [setVehicle, id, isEditing]);

  const renderImg = () => {
    if(vehicle.image) return vehicle.image;
    if(vehicle.type === 'moto') return motorcycleIcon;
    return carIcon;
  };

  if(!isLogged) {
    return navigate('/');
  }

  if(!vehicle) {
    return <h1 className="loading">Carregando</h1>;
  }

  return (
    <section>
    {isEditing ? (
      <Manager
        vehicle={ {...vehicle, id} }
        isEditing
        toggleIsEditing={ toggleIsEditing }
      />
    ) :
    (<div className="vehicle-details">
      <img src={ renderImg() } alt={ vehicle.type }/>
      <button
        type="button"
        onClick={(e) => toggleIsEditing(!isEditing) }
        className="button-edit"
      >
        Editar
      </button>
      <h1>{vehicle.model}</h1>
      <h2>{vehicle.category}</h2>
      <p>Ano de fabricação: {vehicle.year}</p>
      <p>Tipo: {vehicle.type}</p>
      <p>Placa: {vehicle.plate}</p>
      <p>Cor: {vehicle.color}</p>
      <p>Marca: {vehicle.brand}</p>
    </div>)}
    </section>
  );
};
