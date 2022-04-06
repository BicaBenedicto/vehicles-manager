enum vehiclesTypes {
  car = 'carro',
  motorcycle = 'moto',
}

type vehiclesCategories = {
  carro: 'Compacto' | 'Sedan' | 'SUV' | 'Caminhonete';
  moto: 'Scooter' | 'Cidade' | 'Off - Road' | 'Sport';
};

export interface ICategories {
  id: number,
  type: vehiclesTypes,
  category: vehiclesCategories,
};

