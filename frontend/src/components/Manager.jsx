import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postVehicle, putVehicle, takeVehicles, removeVehicle, takeCategories } from '../services/requisitionsApi';
import '../sass/Manager.scss';
import Context from '../services';

export default function Manager({ vehicle = {}, isEditing = false, toggleIsEditing = () => {}}) {
  const { setVehicles, categories, types, setCategories, setTypes } = useContext(Context);
  const navigate = useNavigate();
  const [brand, setBrand] = useState(vehicle.brand || '');
  const [model, setModel] = useState(vehicle.model || '');
  const [plate, setPlate] = useState(vehicle.plate || '');
  const [color, setColor] = useState(vehicle.color || '');
  const [year, setYear] = useState(vehicle.year || '');
  const [type, setType] = useState(vehicle.type || 'carro');
  const [category, setCategory] = useState(vehicle.category || '');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const getCategories = async () => {
      const categoriesGet = await takeCategories();
      const typesGet = categoriesGet.map(({ type }) => type);
      const typesRemovedDuplicate = typesGet.filter((c, index) => typesGet.indexOf(c) === index);
      setTypes(typesRemovedDuplicate);

      const TYPES = typesRemovedDuplicate.reduce((acc, obj) => ({...acc, [obj]: []}), {});
      categoriesGet.forEach(({ category, id, type}) => (TYPES[type].push({ category, id })));
      setCategories(TYPES);

      if(!vehicle.category) {
        setType(typesRemovedDuplicate[0]);
        setCategory(TYPES[typesRemovedDuplicate[0]][0].category);
      }
    };
    getCategories();
  }, [setCategories, setTypes, setType, setCategory, vehicle.category]);

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

  if(!categories || !types) {
    return <h1 className="loading">Carregando</h1>
  }

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
        {types.map((type) => <option value={ type } key={ type }>{type}</option>)}
      </select>
      <select value={ category } onChange={ (e) => setCategory(e.target.value)}>
        {categories[type].map(({ id, category }) => <option value={ category } key={ id }>{category}</option>)}
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
