import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../sass/Login.scss';
import Context from '../services';

export default function Login() {
  const { changeIsLogged, isLogged } = useContext(Context);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onLoginButton = (e) => {
    e.preventDefault();
    changeIsLogged(true);
  };
  
  if(isLogged) {
    navigate('/vehicles');
  }

  return (
    <form className="login" onSubmit={ onLoginButton }>
      <label>
        Usuário:
        <input
          type="text"
          value={ username }
          onChange={ (e) => setUsername(e.target.value) }
        />
      </label>
      <label>
        Senha:
        <input
          type="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <button
        type="submit"
      >
        Entrar
      </button>
    </form>
  )
};
