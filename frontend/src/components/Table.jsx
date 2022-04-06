import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { postVehicle, putVehicle, takeVehicles, removeVehicle } from '../services/requisitionsApi';
import Context from '../services';
import '../sass/Table.scss';

export default function Table() {
  const { vehicles } = useContext(Context);
  const navigate = useNavigate();

  const renderTableItems = () => {
    return vehicles.map((vehicle, index) => (
      <tr key={ vehicle.id } className={ index % 2 === 0 ? 'par' : 'impar' }>
        <button onClick={ () => navigate(`/vehicles/${vehicle.id}`) }>
          <td>{vehicle.brand}</td>
          <td>{vehicle.model}</td>
          <td>{vehicle.plate}</td>
          <td>{vehicle.color}</td>
          <td>{vehicle.year}</td>
          <td>{vehicle.category}</td>
          <td>{vehicle.type}</td>
        </button>
      </tr>
    ));
  };

  return (!vehicles ? <h1>Carregando</h1> :
    <table className="vehicles-table">
      <th>
        <td>Marca</td>
        <td>Modelo</td>
        <td>Placa</td>
        <td>Cor</td>
        <td>Ano de fabricação</td>
        <td>Categoria</td>
        <td>Tipo</td>
      </th>
      {renderTableItems()}
    </table>
  );
};
