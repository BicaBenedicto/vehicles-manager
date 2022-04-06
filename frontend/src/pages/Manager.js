import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../services';
import ManagerComponent from '../components/Manager';
import '../sass/Manager.scss';

export default function Manager() {
  const { isLogged } = useContext(Context);
  const navigate = useNavigate();
  
  if(!isLogged) {
    return navigate('/');
  }

  return (<ManagerComponent />);
};
