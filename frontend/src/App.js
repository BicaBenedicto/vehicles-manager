import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Context from './services';
import Home from './pages/Home';
import Header from './components/Header';
import VehicleDetails from './pages/VehicleDetails';
import Login from './pages/Login';
import Manager from './pages/Manager';

function App() {
  const [vehicles, setVehicles] = useState('');
  const [isTable, setIsTable] = useState(false);
  const [isLogged, changeIsLogged] = useState(false);
  const [types, setTypes] = useState('');
  const [categories, setCategories] = useState('');

  const store = {
    vehicles,
    setVehicles,
    isTable,
    setIsTable,
    isLogged,
    changeIsLogged,
    categories,
    setCategories,
    types,
    setTypes,
  };

  return (
    <Context.Provider value={ store }>
      <Routes>
        <Route path="/manager" element={ <><Header/><Manager /></> } />
        <Route path="/vehicles/:id" element={ <><Header/><VehicleDetails /></> } />
        <Route path="/vehicles" element={ <><Header/><Home /></> } />
        <Route path="/" element={ <><Header/><Login /></> } />
      </Routes>
    </Context.Provider>
  );
}

export default App;
