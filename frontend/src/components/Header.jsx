import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import carAndMotorcycle from '../imgs/carro-e-moto.png';
import '../sass/Header.scss';
import Context from '../services';

export default function Header() {
  const { isLogged, changeIsLogged } = useContext(Context);
  const navigate = useNavigate();

  const changePage = (page) => {
    return navigate(page);
  };

  const logoutButton = () => {
    changeIsLogged(false);
    return navigate('/');
  };

  return (
    <header className="header">
      <img src={ carAndMotorcycle } alt="car and motorcycle" />
      <h1>Gerenciador de veículos</h1>
      {isLogged && (
        <nav>
          <button type="button" onClick={() => changePage('/vehicles')}>Home</button>
          <button type="button" onClick={() => changePage('/manager')}>Gerenciar</button>
          <button type="button" onClick={ logoutButton }>Sair</button>
        </nav>
      )}
    </header>
  )
}
