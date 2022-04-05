enum vehiclesTypes {
  car = 'carro',
  motorcycle = 'moto',
}

type vehiclesCategories = {
  carro: 'Compacto' | 'Sedan' | 'SUV' | 'Caminhonete';
  moto: 'Scooter' | 'Cidade' | 'Off - Road' | 'Sport';
};

export interface IVehicles {
  type: vehiclesTypes,
  category: vehiclesCategories,
  brand: string,
  model: string,
  color: string,
  plate: string,
  year: number,
};
