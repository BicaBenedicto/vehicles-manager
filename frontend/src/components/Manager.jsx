import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postVehicle, putVehicle, takeVehicles, removeVehicle } from '../services/requisitionsApi';
import '../sass/Manager.scss';
import Context from '../services';

const TYPES = {
  carro: ['Compacto', 'Sedan', 'SUV', 'Caminhonete'],
  moto: ['Scooter', 'Cidade', 'Off - Road', 'Sport'],
};

export default function Manager({ vehicle = {}, isEditing = false, toggleIsEditing = () => {}}) {
  const { setVehicles } = useContext(Context);
  const navigate = useNavigate();
  const [brand, setBrand] = useState(vehicle.brand);
  const [model, setModel] = useState(vehicle.model);
  const [plate, setPlate] = useState(vehicle.plate);
  const [color, setColor] = useState(vehicle.color);
  const [year, setYear] = useState(vehicle.year);
  const [category, setCategory] = useState(vehicle.category || TYPES[Object.keys(TYPES)[0]][0]);
  const [type, setType] = useState(vehicle.type || Object.keys(TYPES)[0]);
  const [message, setMessage] = useState('');

  const onRegisterButton = async (e) => {
    e.preventDefault();
    const body = {
      brand,
      model,
      plate,
      color,
      category,
      year,
    };
    if (isEditing) {
      const vehiclesUpdated = await putVehicle(body, vehicle.id);
      if(vehiclesUpdated.includes('sucesso')) toggleIsEditing(false);
      const get = async () => {
        const vehiclesGet = await takeVehicles();
        setVehicles(vehiclesGet);
      };
      return get();
    }

    const vehicles = await postVehicle(body);
    if(vehicles.includes('sucedido')) {
      setBrand('');
      setModel('');
      setPlate('');
      setColor('');
      setYear('');
    }
    return setMessage(vehicles);
  };

  const onDeleteButton = async () => {
    await removeVehicle(vehicle.id);
    const get = async () => {
      const vehiclesGet = await takeVehicles();
      setVehicles(vehiclesGet);
    };
    get();
    return navigate('/vehicles');
  };

  if(message) {
    setTimeout(() => {
      setMessage('');
    }, 10000);
  };

  return (
    <form className="manager" onSubmit={ onRegisterButton }>
      <label>
        Marca:
        <input
          type="text"
          value={ brand }
          onChange={ (e) => setBrand(e.target.value) }
        />
      </label>
      <label>
        Modelo:
        <input
          type="text"
          value={ model }
          onChange={ (e) => setModel(e.target.value) }
        />
      </label>
      <label>
        Placa:
        <input
          type="text"
          value={ plate }
          onChange={ (e) => setPlate(e.target.value) }
        />
      </label>
      <label>
        Cor:
        <input
          type="text"
          value={ color }
          onChange={ (e) => setColor(e.target.value) }
        />
      </label>      <label>
        Ano de fabricação:
        <input
          type="number"
          value={ year }
          onChange={ (e) => setYear(e.target.value) }
        />
      </label>
      <select value={ type } onChange={ (e) => setType(e.target.value)}>
        {Object.keys(TYPES).map((type) => <option value={ type } key={ type }>{type}</option>)}
      </select>
      <select value={ category } onChange={ (e) => setCategory(e.target.value)}>
        {TYPES[type].map((category) => <option value={ category } key={ category }>{category}</option>)}
      </select>
      {!isEditing ? (<button
        type="submit"
      >
        Cadastrar
      </button>)
      : (
        <div className='cancelar-salvar-deletar'>
        <button
          type="button"
          onClick={() => toggleIsEditing(false)}
        >
          Cancelar
        </button>
        <button
          type="submit"
        >
          Salvar
        </button>
        <button
          type="button"
          onClick={ onDeleteButton }
        >
          Excluir
        </button>
        </div>
      )}
      <h3>{message}</h3>
    </form>
  )
};
