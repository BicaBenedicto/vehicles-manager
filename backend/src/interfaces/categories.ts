enum VehiclesTypes {
  car = 'carro',
  motorcycle = 'moto',
}

type VehiclesCategories = {
  carro: 'Compacto' | 'Sedan' | 'SUV' | 'Caminhonete';
  moto: 'Scooter' | 'Cidade' | 'Off - Road' | 'Sport';
};

export interface ICategories {
  id: number,
  type: VehiclesTypes,
  category: VehiclesCategories,
}
