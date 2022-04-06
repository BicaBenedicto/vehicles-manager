import axios from 'axios';

const BACKEND_URL = 'http://localhost:4000';

export const takeVehicles = async () => {
  const { data } = await axios.get(`${BACKEND_URL}/veiculos`);
  return data;
}

export const takeCategories = async () => {
  const { data } = await axios.get(`${BACKEND_URL}/categorias`);
  return data;
}

export const takeVehicle = async (id) => {
  const { data } = await axios.get(`${BACKEND_URL}/veiculos/${id}`);
  return data;
}

export const postVehicle = async (body) => {
  try {
  await axios.post(`${BACKEND_URL}/veiculos`, body);
  return 'Cadastro bem-sucedido';
  } catch(e) {
    return 'Cadastro não finalizado, verifique as informações preenchidas';
  }
}

export const putVehicle = async (body, id) => {
  try {
  await axios.put(`${BACKEND_URL}/veiculos/${id}`, body);
  return 'Alterado com sucesso';
  } catch(e) {
    console.log(e);
    return 'Alteração não finalizado, verifique as informações preenchidas';
  }
}

export const removeVehicle = async (id) => {
  try {
  await axios.delete(`${BACKEND_URL}/veiculos/${id}`);
  return 'Excluido com sucesso';
  } catch(e) {
    console.log(e);
    return 'Exclusão não finalizado, verifique as informações preenchidas';
  }
}
